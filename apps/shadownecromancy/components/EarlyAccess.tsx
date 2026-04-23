'use client'

interface EarlyAccessProps {
  onOpenWaitlist: () => void
  onOpenPayment: () => void
}

export default function EarlyAccess({ onOpenWaitlist, onOpenPayment }: EarlyAccessProps) {
  return (
    <section
      aria-labelledby="early-access-heading"
      style={{ padding: '5rem 1.5rem' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2
          id="early-access-heading"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            color: 'var(--color-text-bone)',
            textAlign: 'center',
            marginBottom: '0.75rem',
          }}
        >
          Garanta seu lugar
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'var(--color-text-ash)',
            fontSize: '1rem',
            marginBottom: '3rem',
          }}
        >
          Duas formas de apoiar o ritual.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Card A — Early Access Grátis */}
          <article
            aria-labelledby="card-free-heading"
            style={{
              backgroundColor: 'var(--color-surface-tomb)',
              border: '1px solid var(--color-border-blade)',
              borderRadius: 'var(--radius-base)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-ash)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Acesso antecipado
              </p>
              <h3
                id="card-free-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.375rem',
                  color: 'var(--color-text-bone)',
                  marginBottom: '0.5rem',
                }}
              >
                Early Access
              </h3>
              <p style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-accent-brass)' }}>
                Grátis
              </p>
            </div>

            <ul
              role="list"
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.625rem',
                marginBottom: '2rem',
                flex: 1,
              }}
            >
              {[
                'Notificação no lançamento do beta',
                'Acesso antes do público geral',
                'Preço de lançamento garantido',
                'Voto nas features',
              ].map((item) => (
                <li
                  key={item}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9375rem', color: 'var(--color-text-ash)' }}
                >
                  <span style={{ color: 'var(--color-success)', marginTop: '2px', flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={onOpenWaitlist}
              aria-label="Entrar no Early Access gratuitamente"
              style={{
                width: '100%',
                backgroundColor: 'var(--color-surface-shadow)',
                color: 'var(--color-text-bone)',
                border: '1px solid var(--color-border-blade)',
                borderRadius: 'var(--radius-base)',
                padding: '0.875rem',
                fontSize: '1rem',
                fontWeight: 600,
                transition: 'border-color 180ms var(--ease-ritual)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.borderColor =
                  'var(--color-accent-flame)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.borderColor =
                  'var(--color-border-blade)'
              }}
            >
              Entrar no Early Access
            </button>
          </article>

          {/* Card B — Fundador R$17 */}
          <article
            aria-labelledby="card-founder-heading"
            style={{
              backgroundColor: 'var(--color-surface-tomb)',
              border: '2px solid var(--color-accent-flame)',
              borderRadius: 'var(--radius-base)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-1px',
                right: '1.5rem',
                backgroundColor: 'var(--color-accent-flame)',
                color: 'var(--color-text-bone)',
                fontSize: '0.6875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '0.25rem 0.625rem',
                borderBottomLeftRadius: 'var(--radius-sm)',
                borderBottomRightRadius: 'var(--radius-sm)',
              }}
            >
              Recomendado
            </span>

            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--color-text-ash)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Apoiador
              </p>
              <h3
                id="card-founder-heading"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.375rem',
                  color: 'var(--color-text-bone)',
                  marginBottom: '0.5rem',
                }}
              >
                Fundador
              </h3>
              <p style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-accent-brass)' }}>
                  R$ 17
                </span>
                <span style={{ fontSize: '0.875rem', color: 'var(--color-text-ash)' }}>
                  único
                </span>
              </p>
            </div>

            <ul
              role="list"
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.625rem',
                marginBottom: '2rem',
                flex: 1,
              }}
            >
              {[
                'Tudo do Early Access',
                'Ritual Completo incluído (val. R$37)',
                'Nome nos agradecimentos',
                'Canal direto com o criador',
              ].map((item) => (
                <li
                  key={item}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9375rem', color: 'var(--color-text-ash)' }}
                >
                  <span style={{ color: 'var(--color-accent-flame)', marginTop: '2px', flexShrink: 0 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={onOpenPayment}
              aria-label="Apoiar como fundador por R$ 17"
              style={{
                width: '100%',
                backgroundColor: 'var(--color-accent-flame)',
                color: 'var(--color-text-bone)',
                border: 'none',
                borderRadius: 'var(--radius-base)',
                padding: '0.875rem',
                fontSize: '1rem',
                fontWeight: 700,
                transition: 'background-color 180ms var(--ease-ritual)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  'var(--color-accent-flame-hover)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  'var(--color-accent-flame)'
              }}
            >
              Apoiar como fundador
            </button>
          </article>
        </div>
      </div>
    </section>
  )
}
