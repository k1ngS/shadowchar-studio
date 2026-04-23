import { NextRequest, NextResponse } from 'next/server'

// TODO: Replace console.log with NeonDB insert via Drizzle
// Example: await db.insert(waitlistTable).values({ email, createdAt: new Date() })

function isValidEmail(email: string): boolean {
  // Linear regex safe from ReDoS: validates basic local@domain.tld structure
  const local = email.indexOf('@')
  if (local < 1) return false
  const domain = email.lastIndexOf('.')
  return domain > local + 1 && domain < email.length - 1
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body as { email?: string }

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { message: 'E-mail é obrigatório.' },
        { status: 400 }
      )
    }

    const sanitised = email.trim().toLowerCase()

    if (!isValidEmail(sanitised)) {
      return NextResponse.json(
        { message: 'Formato de e-mail inválido.' },
        { status: 400 }
      )
    }

    // TODO: insert into NeonDB with Drizzle
    console.log('[waitlist] New subscriber:', sanitised)

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (err) {
    console.error('[waitlist] Error:', err)
    return NextResponse.json(
      { message: 'Erro interno. Tente novamente.' },
      { status: 500 }
    )
  }
}
