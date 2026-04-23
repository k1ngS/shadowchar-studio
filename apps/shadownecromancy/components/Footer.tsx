export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: '1px solid var(--color-border-blade)',
        padding: '2rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--color-text-ash)',
            marginBottom: '0.75rem',
          }}
        >
          Um produto de{' '}
          <span style={{ color: 'var(--color-accent-brass)', fontFamily: 'var(--font-display)' }}>
            Shadowchar Studio
          </span>
        </p>

        <nav aria-label="Links do rodapé">
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            {[
              { label: 'Privacidade', href: '/privacidade' },
              { label: 'Termos', href: '/termos' },
              { label: 'Contato', href: 'mailto:contato@shadowchar.studio' },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--color-text-ash)',
                    transition: 'color 160ms var(--ease-ritual)',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.color =
                      'var(--color-text-bone)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.color =
                      'var(--color-text-ash)'
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
