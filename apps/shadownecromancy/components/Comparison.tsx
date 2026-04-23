const tools = [
  {
    name: 'Notion / Obsidian',
    storesNotes: true,
    guidesReconstruction: false,
    rpgFocused: false,
    resurrectsCampaigns: false,
    highlight: false,
  },
  {
    name: 'ChatGPT',
    storesNotes: false,
    guidesReconstruction: true,
    rpgFocused: false,
    resurrectsCampaigns: false,
    highlight: false,
  },
  {
    name: 'Roll20 / D&D Beyond',
    storesNotes: true,
    guidesReconstruction: false,
    rpgFocused: true,
    resurrectsCampaigns: false,
    highlight: false,
  },
  {
    name: 'Discord / WhatsApp',
    storesNotes: false,
    guidesReconstruction: false,
    rpgFocused: false,
    resurrectsCampaigns: false,
    highlight: false,
  },
  {
    name: 'ShadowNecromancy',
    badge: 'O único',
    storesNotes: true,
    guidesReconstruction: true,
    rpgFocused: true,
    resurrectsCampaigns: true,
    highlight: true,
  },
]

function Cell({ value }: { value: boolean }) {
  return (
    <td
      style={{
        textAlign: 'center',
        padding: '0.875rem 0.75rem',
        fontSize: '1rem',
        color: value ? 'var(--color-success)' : 'var(--color-error)',
      }}
    >
      {value ? '✓' : '✗'}
    </td>
  )
}

export default function Comparison() {
  return (
    <section
      aria-labelledby="comparison-heading"
      style={{
        padding: '5rem 1.5rem',
        backgroundColor: 'var(--color-surface-tomb)',
        borderTop: '1px solid var(--color-border-blade)',
        borderBottom: '1px solid var(--color-border-blade)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2
          id="comparison-heading"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            color: 'var(--color-text-bone)',
            textAlign: 'center',
            marginBottom: '0.75rem',
          }}
        >
          Por que não usar o que já tenho?
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'var(--color-text-ash)',
            fontSize: '1rem',
            marginBottom: '3rem',
          }}
        >
          Ferramentas genéricas não ressuscitam campanhas. Esta foi construída para isso.
        </p>

        <div style={{ overflowX: 'auto' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.9375rem',
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: '1px solid var(--color-border-blade)',
                }}
              >
                {[
                  'Ferramenta',
                  'Armazena notas',
                  'Guia reconstrução',
                  'Foco em RPG',
                  'Ressuscita campanhas',
                ].map((col) => (
                  <th
                    key={col}
                    scope="col"
                    style={{
                      padding: '0.75rem',
                      textAlign: col === 'Ferramenta' ? 'left' : 'center',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.8125rem',
                      letterSpacing: '0.04em',
                      color: 'var(--color-text-ash)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tools.map((tool) => (
                <tr
                  key={tool.name}
                  style={{
                    borderBottom: '1px solid var(--color-border-subtle)',
                    backgroundColor: tool.highlight
                      ? 'var(--color-accent-flame-glow)'
                      : 'transparent',
                    outline: tool.highlight
                      ? '1px solid var(--color-accent-flame)'
                      : 'none',
                  }}
                >
                  <td
                    style={{
                      padding: '0.875rem 0.75rem',
                      color: tool.highlight
                        ? 'var(--color-text-bone)'
                        : 'var(--color-text-ash)',
                      fontWeight: tool.highlight ? 700 : 400,
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {tool.name}
                      {tool.badge && (
                        <span
                          style={{
                            fontSize: '0.6875rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            color: 'var(--color-accent-flame)',
                            border: '1px solid var(--color-accent-flame)',
                            borderRadius: 'var(--radius-sm)',
                            padding: '0.1rem 0.35rem',
                          }}
                        >
                          {tool.badge}
                        </span>
                      )}
                    </span>
                  </td>
                  <Cell value={tool.storesNotes} />
                  <Cell value={tool.guidesReconstruction} />
                  <Cell value={tool.rpgFocused} />
                  <Cell value={tool.resurrectsCampaigns} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
