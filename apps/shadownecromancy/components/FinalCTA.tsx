'use client'

interface FinalCTAProps {
  onOpenWaitlist: () => void
  onOpenPayment: () => void
}

export default function FinalCTA({ onOpenWaitlist, onOpenPayment }: FinalCTAProps) {
  return (
    <section
      aria-labelledby="final-cta-heading"
      style={{
        padding: '5rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <h2
          id="final-cta-heading"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            color: 'var(--color-text-bone)',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}
        >
          Sua campanha merece um fim.
        </h2>
        <p
          style={{
            fontSize: '1.0625rem',
            color: 'var(--color-text-ash)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          Não deixe anos de criatividade e investimento emocional apodrecerem no limbo.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1.25rem',
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
              transition:
                'border-color 180ms var(--ease-ritual), color 180ms var(--ease-ritual)',
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

        <p
          style={{
            fontSize: '0.8125rem',
            color: 'var(--color-text-ash)',
          }}
        >
          Grátis para sempre · Fundadores garantem Ritual Completo por R$ 17
        </p>
      </div>
    </section>
  )
}
