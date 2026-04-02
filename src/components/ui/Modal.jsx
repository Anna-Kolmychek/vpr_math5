import { useEffect, useCallback } from 'react'

/**
 * Модальное окно
 *
 * isOpen:   bool
 * onClose:  fn
 * title:    string (необязательно)
 * children: содержимое
 */
export default function Modal({ isOpen, onClose, title, children }) {
  const handleKeyDown = useCallback(e => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="animate-modal-in"
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRadius: '20px',
          padding: '24px',
          width: '100%',
          maxWidth: '500px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          position: 'relative',
        }}
      >
        {/* Шапка */}
        {title && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
          }}>
            <h2 style={{
              margin: 0,
              fontSize: '18px',
              fontWeight: 600,
              color: 'var(--color-text)',
            }}>
              {title}
            </h2>
            <button
              onClick={onClose}
              aria-label="Закрыть"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '20px',
                color: 'var(--color-text-muted)',
                padding: '4px 8px',
                borderRadius: '8px',
                lineHeight: 1,
                minWidth: '44px',
                minHeight: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-border)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              ✕
            </button>
          </div>
        )}

        {/* Содержимое */}
        <div style={{ color: 'var(--color-text)' }}>
          {children}
        </div>
      </div>
    </div>
  )
}
