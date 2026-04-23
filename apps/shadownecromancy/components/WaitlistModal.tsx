'use client'

import { useEffect, useRef, useState } from 'react'

interface WaitlistModalProps {
  onClose: () => void
}

export default function WaitlistModal({ onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const overlayRef = useRef<HTMLDivElement>(null)
  const firstFocusRef = useRef<HTMLInputElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  // Focus trap + initial focus
  useEffect(() => {
    firstFocusRef.current?.focus()

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()

      if (e.key === 'Tab') {
        const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
          'button, input, [tabindex]:not([tabindex="-1"])'
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.message ?? 'Erro ao registrar.')
      }

      setStatus('success')
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
      aria-labelledby="waitlist-title"
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
          maxWidth: '440px',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          ref={closeRef}
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
          id="waitlist-title"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.375rem',
            color: 'var(--color-text-bone)',
            marginBottom: '0.5rem',
          }}
        >
          Early Access — Grátis
        </h2>
        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--color-text-ash)',
            marginBottom: '2rem',
            lineHeight: 1.6,
          }}
        >
          Seja notificado no lançamento e garanta seu acesso antes do público geral.
        </p>

        {status === 'success' ? (
          <p
            role="status"
            aria-live="polite"
            style={{
              fontSize: '1rem',
              color: 'var(--color-success)',
              fontWeight: 600,
              textAlign: 'center',
              padding: '1.5rem 0',
            }}
          >
            ✓ Você está na lista. A sombra não esquece.
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <label
              htmlFor="waitlist-email"
              style={{
                display: 'block',
                fontSize: '0.8125rem',
                color: 'var(--color-text-ash)',
                marginBottom: '0.375rem',
                letterSpacing: '0.03em',
              }}
            >
              E-mail
            </label>
            <input
              ref={firstFocusRef}
              id="waitlist-email"
              type="email"
              required
              autoComplete="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading'}
              style={{
                display: 'block',
                width: '100%',
                backgroundColor: 'var(--color-surface-shadow)',
                border: '1px solid var(--color-border-blade)',
                borderRadius: 'var(--radius-base)',
                color: 'var(--color-text-bone)',
                fontSize: '1rem',
                padding: '0.75rem 1rem',
                marginBottom: '0.75rem',
                outline: 'none',
                transition: 'border-color 160ms var(--ease-ritual)',
              }}
              onFocus={(e) => {
                ;(e.currentTarget as HTMLInputElement).style.borderColor =
                  'var(--color-accent-flame)'
              }}
              onBlur={(e) => {
                ;(e.currentTarget as HTMLInputElement).style.borderColor =
                  'var(--color-border-blade)'
              }}
            />

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
              type="submit"
              disabled={status === 'loading'}
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
              {status === 'loading' ? 'Registrando...' : 'Entrar no Early Access — grátis'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
