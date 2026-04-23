const steps = [
  {
    number: '01',
    title: 'Registre os fragmentos',
    description:
      'Questionário guiado sobre personagens, NPCs, ganchos, última sessão. Você não precisa lembrar de tudo — cada fragmento conta.',
  },
  {
    number: '02',
    title: 'A sombra consolida',
    description:
      'Seus fragmentos são transformados em um documento coerente e acionável. A história ganha forma a partir do caos.',
  },
  {
    number: '03',
    title: 'Volte a jogar',
    description:
      'Documento "Onde Paramos" + mensagem de reengajamento para seus jogadores + plano de retomada com próximos passos.',
  },
]

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-heading"
      style={{
        padding: '5rem 1.5rem',
        backgroundColor: 'var(--color-surface-tomb)',
        borderTop: '1px solid var(--color-border-blade)',
        borderBottom: '1px solid var(--color-border-blade)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2
          id="how-heading"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            color: 'var(--color-text-bone)',
            textAlign: 'center',
            marginBottom: '0.75rem',
          }}
        >
          Como funciona
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'var(--color-text-ash)',
            fontSize: '1rem',
            marginBottom: '3rem',
          }}
        >
          Três etapas. Nenhuma magia escondida.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {steps.map((step) => (
            <article
              key={step.number}
              style={{
                backgroundColor: 'var(--color-surface-shadow)',
                border: '1px solid var(--color-border-blade)',
                borderRadius: 'var(--radius-base)',
                padding: '2rem',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--color-accent-flame)',
                  marginBottom: '1rem',
                  lineHeight: 1,
                }}
              >
                {step.number}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  color: 'var(--color-text-bone)',
                  marginBottom: '0.75rem',
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-ash)', lineHeight: 1.65 }}>
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
