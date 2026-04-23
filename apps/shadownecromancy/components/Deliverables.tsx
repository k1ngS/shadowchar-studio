const deliverables = [
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          d="M9 12h6M9 16h6M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M13 3v6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Documento "Onde Paramos"',
    description: 'Recapitulação completa da última sessão e do estado atual da campanha.',
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Resumo de Personagens e NPCs',
    description: 'Quem são, o que querem e onde estão na narrativa.',
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 8v4l3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Ganchos e Tramas Abertas',
    description: 'Os fios que ficaram soltos e que podem puxar a mesa de volta.',
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Mensagem de Reengajamento',
    description: 'Texto pronto para enviar aos jogadores e despertar o interesse de retornar.',
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Plano de Retomada',
    description: 'Próximos passos concretos para a primeira sessão de retorno.',
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Export em Markdown e PDF',
    description: 'Leve seu ritual para qualquer ferramenta — Obsidian, Notion, impressão.',
  },
]

export default function Deliverables() {
  return (
    <section
      aria-labelledby="deliverables-heading"
      style={{ padding: '5rem 1.5rem' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2
          id="deliverables-heading"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            color: 'var(--color-text-bone)',
            textAlign: 'center',
            marginBottom: '0.75rem',
          }}
        >
          O que você recebe
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'var(--color-text-ash)',
            fontSize: '1rem',
            marginBottom: '3rem',
          }}
        >
          Seis entregáveis para ressuscitar qualquer campanha.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1rem',
          }}
        >
          {deliverables.map((item) => (
            <article
              key={item.title}
              style={{
                backgroundColor: 'var(--color-surface-tomb)',
                border: '1px solid var(--color-border-blade)',
                borderRadius: 'var(--radius-base)',
                padding: '1.5rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  color: 'var(--color-accent-brass)',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                {item.icon}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    color: 'var(--color-text-bone)',
                    marginBottom: '0.375rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-ash)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
