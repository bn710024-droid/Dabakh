import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nom, entreprise, telephone, email, service, message } = body

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Site Web <onboarding@resend.dev>',
        to: ['contact@dabakhglobalservices.com'],
        subject: `Nouveau message : ${service}`,
        html: `<h2>Nouvelle demande</h2><p><b>Nom:</b> ${nom}</p><p><b>Entreprise:</b> ${entreprise}</p><p><b>Téléphone:</b> ${telephone}</p><p><b>Email:</b> ${email}</p><p><b>Objet:</b> ${service}</p><p><b>Message:</b> ${message}</p>`,
      }),
    })

    if (!res.ok) return NextResponse.json({ error: 'Erreur envoi' }, { status: 500 })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
