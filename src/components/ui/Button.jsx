/**
 * Универсальная кнопка
 *
 * variant: 'primary' | 'secondary' | 'danger' | 'ghost'
 * size:    'sm' | 'md' | 'lg'
 */
export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  type = 'button',
  ariaLabel,
  style: extraStyle = {},
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    borderRadius: '12px',
    fontFamily: "'Nunito', system-ui, sans-serif",
    fontWeight: 700,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    border: 'none',
    outline: 'none',
    width: fullWidth ? '100%' : undefined,
    opacity: disabled ? 0.45 : 1,
    minHeight: '44px',
    letterSpacing: '0.01em',
  }

  const sizes = {
    sm: { fontSize: '15px', padding: '8px 18px' },
    md: { fontSize: '17px', padding: '12px 24px' },
    lg: { fontSize: '18px', padding: '14px 32px' },
  }

  const variants = {
    primary: {
      background: 'var(--gradient-accent)',
      color: '#ffffff',
      boxShadow: '0 2px 8px rgba(99,102,241,0.3)',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--color-accent)',
      border: '2px solid var(--color-accent)',
    },
    danger: {
      backgroundColor: 'var(--color-error)',
      color: '#ffffff',
      boxShadow: '0 2px 8px rgba(239,68,68,0.25)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-muted)',
    },
  }

  const handleMouseEnter = e => {
    if (disabled) return
    const el = e.currentTarget
    if (variant === 'primary') {
      el.style.transform = 'scale(1.02)'
      el.style.boxShadow = '0 4px 16px rgba(99,102,241,0.45)'
    }
    if (variant === 'secondary') {
      el.style.backgroundColor = 'rgba(99,102,241,0.08)'
    }
    if (variant === 'danger') {
      el.style.backgroundColor = '#dc2626'
      el.style.transform = 'scale(1.02)'
    }
    if (variant === 'ghost') {
      el.style.backgroundColor = 'var(--color-border)'
      el.style.color = 'var(--color-text)'
    }
  }

  const handleMouseLeave = e => {
    const el = e.currentTarget
    el.style.transform = 'scale(1)'
    if (variant === 'primary') el.style.boxShadow = '0 2px 8px rgba(99,102,241,0.3)'
    if (variant === 'secondary') el.style.backgroundColor = 'transparent'
    if (variant === 'danger') {
      el.style.backgroundColor = 'var(--color-error)'
      el.style.boxShadow = '0 2px 8px rgba(239,68,68,0.25)'
    }
    if (variant === 'ghost') {
      el.style.backgroundColor = 'transparent'
      el.style.color = 'var(--color-text-muted)'
    }
  }

  const handleMouseDown = e => {
    if (disabled) return
    e.currentTarget.style.transform = 'scale(0.97)'
  }

  const handleMouseUp = e => {
    if (!disabled) e.currentTarget.style.transform = 'scale(1.02)'
  }

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      style={{ ...base, ...sizes[size], ...variants[variant], ...extraStyle }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
    </button>
  )
}
