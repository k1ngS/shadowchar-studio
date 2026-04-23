import type { Metadata } from 'next'
import { Cinzel, Inter } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '600', '700', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ShadowNecromancy — Ressuscite sua campanha abandonada',
  description:
    'Você tem notas espalhadas, jogadores que esfriaram e uma história que não teve fim. O ShadowNecromancy reconstrói o contexto da sua campanha abandonada e gera o plano para você voltar a jogar.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? 'https://shadownecromancy.com'),
  openGraph: {
    title: 'ShadowNecromancy — Sua campanha não está morta.',
    description:
      'Em menos de 30 minutos. Sem IA obrigatória. Sem assinatura. Um ritual. Uma ressurreição.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ShadowNecromancy — Sua campanha não está morta.',
    description:
      'Em menos de 30 minutos. Sem IA obrigatória. Sem assinatura. Um ritual. Uma ressurreição.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Ir para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  )
}
