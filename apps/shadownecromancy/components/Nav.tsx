'use client'

interface NavProps {
  onOpenWaitlist: () => void
}

export default function Nav({ onOpenWaitlist }: NavProps) {
  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(5, 5, 7, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border-blade)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left: brand + product */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.75rem',
              color: 'var(--color-text-ash)',
              letterSpacing: '0.05em',
            }}
          >
            Shadowchar Studio
          </span>
          <span
            aria-hidden="true"
            style={{
              width: '1px',
              height: '16px',
              backgroundColor: 'var(--color-border-blade)',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'var(--color-text-bone)',
              letterSpacing: '0.04em',
            }}
          >
            ShadowNecromancy
          </span>
        </div>

        {/* Right: CTA */}
        <button
          onClick={onOpenWaitlist}
          aria-label="Entrar no Early Access gratuitamente"
          style={{
            backgroundColor: 'var(--color-accent-flame)',
            color: 'var(--color-text-bone)',
            border: 'none',
            borderRadius: 'var(--radius-base)',
            padding: '0.5rem 1rem',
            fontSize: '0.8125rem',
            fontWeight: 600,
            letterSpacing: '0.02em',
            transition: 'background-color 180ms var(--ease-ritual)',
            whiteSpace: 'nowrap',
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
          Early Access — grátis
        </button>
      </div>
    </header>
  )
}
