'use client'

import { useEffect, useRef, useState } from 'react'

interface PaymentModalProps {
  onClose: () => void
}

export default function PaymentModal({ onClose }: PaymentModalProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const overlayRef = useRef<HTMLDivElement>(null)
  const firstFocusRef = useRef<HTMLButtonElement>(null)

  // Focus trap + ESC
  useEffect(() => {
    firstFocusRef.current?.focus()

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()

      if (e.key === 'Tab') {
        const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
          'button, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  async function handleCheckout() {
    setStatus('loading')
    setErrorMsg('')

    try {
      const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_FUNDADOR ?? ''

      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.message ?? 'Erro ao iniciar pagamento.')
      }

      const { url } = await res.json()
      if (url) {
        window.location.href = url
      } else {
        throw new Error('URL de pagamento não retornada.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Erro inesperado.')
    }
  }

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="payment-title"
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(5, 5, 7, 0.8)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        role="document"
        style={{
          backgroundColor: 'var(--color-surface-tomb)',
          border: '1px solid var(--color-border-blade)',
          borderRadius: 'var(--radius-base)',
          padding: '2.5rem',
          width: '100%',
          maxWidth: '420px',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'var(--color-text-ash)',
            fontSize: '1.25rem',
            lineHeight: 1,
            padding: '0.25rem',
            transition: 'color 160ms var(--ease-ritual)',
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text-bone)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text-ash)')
          }
        >
          ✕
        </button>

        <h2
          id="payment-title"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.375rem',
            color: 'var(--color-text-bone)',
            marginBottom: '0.5rem',
          }}
        >
          Apoiar como Fundador
        </h2>

        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--color-text-ash)',
            marginBottom: '1.5rem',
            lineHeight: 1.6,
          }}
        >
          Acesso ao Ritual Completo + todos os benefícios do Early Access.
        </p>

        {/* Price highlight */}
        <div
          style={{
            backgroundColor: 'var(--color-surface-shadow)',
            border: '1px solid var(--color-border-blade)',
            borderRadius: 'var(--radius-base)',
            padding: '1.25rem',
            marginBottom: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-ash)' }}>
              Fundador — acesso vitalício
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-ash)', marginTop: '0.25rem' }}>
              Ritual Completo incluído{' '}
              <span style={{ textDecoration: 'line-through' }}>R$37</span>
            </p>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'var(--color-accent-brass)',
            }}
          >
            R$ 17
          </p>
        </div>

        {status === 'error' && (
          <p
            role="alert"
            style={{
              fontSize: '0.8125rem',
              color: 'var(--color-error)',
              marginBottom: '0.75rem',
            }}
          >
            {errorMsg}
          </p>
        )}

        <button
          ref={firstFocusRef}
          onClick={handleCheckout}
          disabled={status === 'loading'}
          aria-busy={status === 'loading'}
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
            opacity: status === 'loading' ? 0.7 : 1,
          }}
          onMouseEnter={(e) => {
            if (status !== 'loading') {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                'var(--color-accent-flame-hover)'
            }
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.backgroundColor =
              'var(--color-accent-flame)'
          }}
        >
          {status === 'loading' ? 'Aguarde...' : 'Confirmar — R$ 17'}
        </button>

        <p
          style={{
            fontSize: '0.75rem',
            color: 'var(--color-text-ash)',
            textAlign: 'center',
            marginTop: '1rem',
          }}
        >
          Pagamento seguro via Stripe
        </p>
      </div>
    </div>
  )
}
