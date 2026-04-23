import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// TODO: Ensure STRIPE_SECRET_KEY is set in Vercel environment variables

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2025-02-24.acacia',
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { priceId } = body as { priceId?: string }

    const resolvedPriceId =
      priceId ?? process.env.STRIPE_PRICE_ID_FUNDADOR

    if (!resolvedPriceId) {
      return NextResponse.json(
        { message: 'Price ID não configurado.' },
        { status: 400 }
      )
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_URL ?? 'https://shadownecromancy.com'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: resolvedPriceId,
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/sucesso`,
      cancel_url: baseUrl,
    })

    return NextResponse.json({ url: session.url }, { status: 200 })
  } catch (err) {
    console.error('[create-checkout-session] Error:', err)
    const message =
      err instanceof Stripe.errors.StripeError
        ? err.message
        : 'Erro interno ao criar sessão de pagamento.'
    return NextResponse.json({ message }, { status: 500 })
  }
}
