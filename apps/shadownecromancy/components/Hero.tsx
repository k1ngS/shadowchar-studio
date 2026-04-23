'use client'

interface HeroProps {
  onOpenWaitlist: () => void
  onOpenPayment: () => void
}

const tags = ['D&D 5e', 'Tormenta20', 'Pathfinder', 'Call of Cthulhu', 'Sistema Agnóstico']

export default function Hero({ onOpenWaitlist, onOpenPayment }: HeroProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      style={{
        paddingTop: '8rem',
        paddingBottom: '5rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        textAlign: 'center',
        maxWidth: '860px',
        margin: '0 auto',
      }}
    >
      {/* Eyebrow */}
      <div
        aria-hidden="true"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '1.5rem',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            height: '1px',
            width: '40px',
            backgroundColor: 'var(--color-accent-brass)',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-accent-brass)',
          }}
        >
          Shadowchar Studio
        </span>
        <span
          style={{
            display: 'inline-block',
            height: '1px',
            width: '40px',
            backgroundColor: 'var(--color-accent-brass)',
          }}
        />
      </div>

      {/* H1 */}
      <h1
        id="hero-heading"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
          fontWeight: 700,
          color: 'var(--color-text-bone)',
          marginBottom: '1.5rem',
          lineHeight: 1.15,
        }}
      >
        Sua campanha não está{' '}
        <span style={{ color: 'var(--color-accent-flame)' }}>morta</span>.{' '}
        Ela está esperando.
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontSize: '1.125rem',
          color: 'var(--color-text-ash)',
          maxWidth: '640px',
          margin: '0 auto 1.25rem',
          lineHeight: 1.7,
        }}
      >
        Você tem notas espalhadas, jogadores que esfriaram e uma história que não
        teve fim. O ShadowNecromancy reconstrói o contexto da sua campanha
        abandonada e gera o plano para você voltar a jogar.
      </p>

      {/* Promise */}
      <p
        style={{
          fontSize: '0.9375rem',
          color: 'var(--color-text-bone)',
          fontWeight: 500,
          maxWidth: '560px',
          margin: '0 auto 2.5rem',
          lineHeight: 1.65,
        }}
      >
        Em menos de 30 minutos. Sem IA obrigatória. Sem assinatura.{' '}
        <span style={{ color: 'var(--color-accent-brass)' }}>
          Um ritual. Uma ressurreição.
        </span>
      </p>

      {/* CTAs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '2.5rem',
        }}
      >
        <button
          onClick={onOpenWaitlist}
          aria-label="Entrar no Early Access gratuitamente"
          style={{
            backgroundColor: 'var(--color-accent-flame)',
            color: 'var(--color-text-bone)',
            border: 'none',
            borderRadius: 'var(--radius-base)',
            padding: '0.875rem 1.75rem',
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '0.02em',
            transition: 'background-color 180ms var(--ease-ritual)',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
              'var(--color-accent-flame-hover)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
              'var(--color-accent-flame)')
          }
        >
          Entrar no Early Access — grátis
        </button>

        <button
          onClick={onOpenPayment}
          aria-label="Apoiar como fundador por R$ 17"
          style={{
            backgroundColor: 'transparent',
            color: 'var(--color-text-bone)',
            border: '1px solid var(--color-border-blade)',
            borderRadius: 'var(--radius-base)',
            padding: '0.875rem 1.75rem',
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.02em',
            transition: 'border-color 180ms var(--ease-ritual), color 180ms var(--ease-ritual)',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.borderColor = 'var(--color-accent-brass)'
            el.style.color = 'var(--color-accent-brass)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement
            el.style.borderColor = 'var(--color-border-blade)'
            el.style.color = 'var(--color-text-bone)'
          }}
        >
          Apoiar como fundador · R$ 17
        </button>
      </div>

      {/* System tags */}
      <div
        role="list"
        aria-label="Sistemas de RPG suportados"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.5rem',
        }}
      >
        {tags.map((tag) => (
          <span
            key={tag}
            role="listitem"
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-text-ash)',
              border: '1px solid var(--color-border-blade)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.25rem 0.625rem',
              letterSpacing: '0.03em',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}
