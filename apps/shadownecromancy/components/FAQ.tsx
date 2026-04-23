'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Minha campanha está abandonada há muito tempo. Não vai funcionar.',
    answer:
      'Quanto mais tempo abandonada, mais valiosa é a reconstrução. O ShadowNecromancy foi desenhado para trabalhar com fragmentos incompletos — basta o que você lembra. Mesmo memórias vagas são suficientes para ressuscitar o essencial.',
  },
  {
    question: 'Isso não é só um formulário glorificado?',
    answer:
      'É um ritual estruturado. A diferença está na sequência de perguntas, no foco em RPG e no output — você recebe documentos prontos para usar, não uma planilha para preencher do zero.',
  },
  {
    question: 'Posso fazer isso no Notion ou no ChatGPT de graça.',
    answer:
      'Pode. Mas você vai gastar horas organizando, o ChatGPT não tem memória persistente, e o Notion não te guia. O ShadowNecromancy resolve o problema em menos de 30 minutos com um fluxo que já sabe o que perguntar.',
  },
  {
    question: 'E se eu mal lembrar de nada da campanha?',
    answer:
      'O questionário é guiado — você responde o que conseguir, e a sombra trabalha com isso. Até campanhas "esquecidas" têm fragmentos suficientes para um plano de retomada.',
  },
  {
    question: 'Meus jogadores não vão querer retomar de qualquer jeito.',
    answer:
      'Uma das entregas é exatamente a mensagem de reengajamento — um texto calibrado para despertar interesse nos jogadores sem soar como cobrança. A sombra conhece o ritual de retorno.',
  },
  {
    question: 'Como funciona a IA opcional?',
    answer:
      'A IA é opcional e não obrigatória. O fluxo principal funciona sem ela. Se você quiser usar IA para expandir ganchos ou gerar texto de retomada, o sistema oferece prompts prontos para usar com qualquer ferramenta de IA que você já tenha.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      aria-labelledby="faq-heading"
      style={{
        padding: '5rem 1.5rem',
        backgroundColor: 'var(--color-surface-tomb)',
        borderTop: '1px solid var(--color-border-blade)',
        borderBottom: '1px solid var(--color-border-blade)',
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h2
          id="faq-heading"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            color: 'var(--color-text-bone)',
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          Perguntas frequentes
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-btn-${index}`

            return (
              <div
                key={index}
                style={{
                  border: '1px solid var(--color-border-blade)',
                  borderRadius: 'var(--radius-base)',
                  backgroundColor: isOpen
                    ? 'var(--color-surface-shadow)'
                    : 'transparent',
                  transition: 'background-color 160ms var(--ease-ritual)',
                }}
              >
                <h3 style={{ margin: 0 }}>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1.125rem 1.25rem',
                      backgroundColor: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      color: isOpen ? 'var(--color-text-bone)' : 'var(--color-text-ash)',
                      fontSize: '0.9375rem',
                      fontWeight: isOpen ? 600 : 400,
                      transition: 'color 160ms var(--ease-ritual)',
                    }}
                  >
                    <span>{faq.question}</span>
                    <span
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        color: 'var(--color-accent-flame)',
                        fontSize: '1.25rem',
                        lineHeight: 1,
                        transition: 'transform 200ms var(--ease-ritual)',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        display: 'inline-block',
                      }}
                    >
                      +
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  style={{
                    padding: isOpen ? '0 1.25rem 1.25rem' : '0 1.25rem',
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      color: 'var(--color-text-ash)',
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
