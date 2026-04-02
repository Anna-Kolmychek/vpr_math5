/**
 * Универсальная карточка
 *
 * clickable: true — добавляет hover-эффект и cursor: pointer
 */
export default function Card({ children, clickable = false, onClick, style: extraStyle = {} }) {
  const base = {
    backgroundColor: 'var(--color-surface)',
    borderRadius: '20px',
    boxShadow: 'var(--shadow-card)',
    padding: '20px',
    transition: 'all 0.2s ease',
    cursor: clickable ? 'pointer' : 'default',
    border: '1px solid var(--color-border)',
  }

  const handleMouseEnter = e => {
    if (!clickable) return
    e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'
    e.currentTarget.style.transform = 'translateY(-2px)'
  }

  const handleMouseLeave = e => {
    if (!clickable) return
    e.currentTarget.style.boxShadow = 'var(--shadow-card)'
    e.currentTarget.style.transform = 'translateY(0)'
  }

  return (
    <div
      style={{ ...base, ...extraStyle }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={clickable && onClick ? e => e.key === 'Enter' && onClick() : undefined}
    >
      {children}
    </div>
  )
}
