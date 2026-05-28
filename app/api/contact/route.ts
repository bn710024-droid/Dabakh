import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Rate Limiting (in-memory, par IP) ───────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;          // max 5 requêtes
const RATE_WINDOW = 60 * 1000; // par minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

// ─── Sanitisation : supprime balises HTML ────────────────────────────────────
function sanitize(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>/g, '')       // pas de balises HTML
    .replace(/[<>'"]/g, '')        // caractères dangereux
    .trim()
    .slice(0, 2000);               // limite longueur
}

// ─── Validation email ─────────────────────────────────────────────────────────
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ─── Validation téléphone (sénégalais ou international) ──────────────────────
function isValidPhone(phone: string): boolean {
  return /^[+\d\s\-().]{7,20}$/.test(phone);
}

export async function POST(request: NextRequest) {
  // 1. Rate limiting
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Trop de tentatives. Veuillez patienter une minute.' },
      { status: 429 }
    );
  }

  // 2. Parse body
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Format de données invalide.' }, { status: 400 });
  }

  // 3. Sanitisation
  const name    = sanitize(body.name);
  const email   = sanitize(body.email);
  const phone   = sanitize(body.phone);
  const message = sanitize(body.message);
  // service/objet est facultatif — généré automatiquement si vide
  const rawService = sanitize(body.subject ?? body.service ?? '');
  const subject = rawService || `Demande de contact — ${name}`;

  // 4. Validation serveur
  const errors: string[] = [];

  if (!name || name.length < 2)
    errors.push('Le nom complet est requis (minimum 2 caractères).');

  if (!email || !isValidEmail(email))
    errors.push("L'adresse email est invalide.");

  if (!phone || !isValidPhone(phone))
    errors.push('Le numéro de téléphone est invalide.');

  if (!message || message.length < 10)
    errors.push('Le message est trop court (minimum 10 caractères).');

  if (errors.length > 0) {
    return NextResponse.json({ error: errors.join(' ') }, { status: 422 });
  }

  // 5. Envoi email
  try {
    await resend.emails.send({
      from: 'Contact Dabakh <contact@dabakhglobalservices.com>',
      to: 'contact@dabakhglobalservices.com',
      replyTo: email,
      subject: `[Dabakh] ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8f8f6;padding:32px;border-radius:8px;">
          <div style="background:#1A7A3C;padding:20px 28px;border-radius:6px 6px 0 0;">
            <h2 style="color:#ffffff;margin:0;font-size:22px;">Nouveau message — Dabakh Global Services</h2>
          </div>
          <div style="background:#ffffff;padding:28px;border-radius:0 0 6px 6px;border:1px solid #e2e8f0;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;width:120px;color:#888;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;">Nom</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#111;font-size:15px;">${name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;"><a href="mailto:${email}" style="color:#E8600A;">${email}</a></td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;">Téléphone</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#111;font-size:15px;">${phone}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#888;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;">Objet</td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;color:#111;font-size:15px;">${subject}</td></tr>
              <tr><td colspan="2" style="padding:16px 0 0;">
                <div style="color:#888;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Message</div>
                <div style="background:#f8f8f6;padding:16px;border-radius:4px;color:#333;font-size:15px;line-height:1.7;white-space:pre-line;">${message}</div>
              </td></tr>
            </table>
            <div style="margin-top:24px;padding:12px;background:#fff8f5;border-left:3px solid #E8600A;border-radius:0 4px 4px 0;">
              <p style="margin:0;font-size:12px;color:#888;">IP source : ${ip} — Envoyé via dabakhglobalservices.com</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement." },
      { status: 500 }
    );
  }
}
