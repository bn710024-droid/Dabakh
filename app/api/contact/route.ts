import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Redis } from '@upstash/redis';

const resend = new Resend(process.env.RESEND_API_KEY);
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

function sanitize(str: unknown): string {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>/g, '').replace(/[<>'"]/g, '').trim().slice(0, 2000);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  return /^[+\d\s\-().]{7,20}$/.test(phone);
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const key = `ratelimit:${ip}`;
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, 60);
  if (count > 5) {
    return NextResponse.json(
      { error: 'Trop de tentatives. Veuillez patienter une minute.' },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Format de données invalide.' }, { status: 400 });
  }

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const phone = sanitize(body.phone);
  const message = sanitize(body.message);
  const rawService = sanitize(body.subject ?? body.service ?? '');
  const subject = rawService || `Demande de contact — ${name}`;

  const errors: string[] = [];
  if (!name || name.length < 2) errors.push('Le nom complet est requis.');
  if (!email || !isValidEmail(email)) errors.push("L'adresse email est invalide.");
  if (!phone || !isValidPhone(phone)) errors.push('Le numéro de téléphone est invalide.');
  if (!message || message.length < 10) errors.push('Le message est trop court.');
  if (errors.length > 0) return NextResponse.json({ error: errors.join(' ') }, { status: 422 });

  try {
    await resend.emails.send({
      from: 'Contact Dabakh <contact@dabakhglobalservices.com>',
      to: 'contact@dabakhglobalservices.com',
      reply_to: email,
      subject: `[Dabakh] ${subject}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;">
        <div style="background:#1A7A3C;padding:20px 28px;border-radius:6px 6px 0 0;">
          <h2 style="color:#fff;margin:0;">Nouveau message — Dabakh Global Services</h2>
        </div>
        <div style="background:#fff;padding:28px;border:1px solid #e2e8f0;">
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${phone}</p>
          <p><strong>Objet:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background:#f8f8f6;padding:16px;white-space:pre-line;">${message}</div>
          <p style="font-size:12px;color:#888;margin-top:24px;">IP: ${ip}</p>
        </div>
      </div>`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }
}
