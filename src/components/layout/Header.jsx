import { useNavigate } from 'react-router-dom'
import { Home } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'

// Кнопка-иконка — общий стиль для Home и ThemeToggle
function IconButton({ onClick, ariaLabel, children }) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      style={{
        background: 'var(--color-bg)',
        border: '1px solid var(--color-border)',
        cursor: 'pointer',
        borderRadius: '10px',
        minWidth: '40px',
        minHeight: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease',
        color: 'var(--color-text-muted)',
        flexShrink: 0,
        padding: '0 10px',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = 'var(--color-border)'
        e.currentTarget.style.color = 'var(--color-text)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = 'var(--color-bg)'
        e.currentTarget.style.color = 'var(--color-text-muted)'
      }}
    >
      {children}
    </button>
  )
}

export default function Header({ title, showBack = false }) {
  const navigate = useNavigate()

  return (
    <header style={{
      backgroundColor: 'var(--color-surface)',
      borderBottom: '1px solid var(--color-border)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      transition: 'background-color 0.3s ease',
    }}>
      <div style={{
        maxWidth: '680px',       /* совпадает с max-width контента */
        margin: '0 auto',
        padding: '0 20px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}>

        {/* Логотип — всегда виден, всегда кликабелен */}
        <button
          onClick={() => navigate('/')}
          aria-label="На главную"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexShrink: 0,
            borderRadius: '10px',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <div style={{
            width: '34px',
            height: '34px',
            background: 'var(--gradient-accent)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 800,
            fontSize: '17px',
            boxShadow: '0 2px 8px rgba(99,102,241,0.35)',
          }}>
            5
          </div>
          <span style={{
            fontSize: '18px',
            fontWeight: 800,
            color: 'var(--color-text)',
            whiteSpace: 'nowrap',
          }}>
            ВПР <span style={{ color: 'var(--color-accent)' }}>Математика</span>
          </span>
        </button>

        {/* Заголовок раздела (только внутри страниц) */}
        {showBack && title && (
          <span style={{
            flex: 1,
            fontSize: '16px',
            fontWeight: 700,
            color: 'var(--color-text-muted)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            paddingLeft: '4px',
          }}>
            / {title}
          </span>
        )}

        {/* Пружина — сдвигает правые кнопки вправо */}
        {!showBack && <div style={{ flex: 1 }} />}

        {/* Кнопка домика (только на внутренних страницах) */}
        {showBack && (
          <IconButton onClick={() => navigate('/')} ariaLabel="На главную">
            <Home size={18} strokeWidth={2} />
          </IconButton>
        )}

        {/* Переключатель темы */}
        <ThemeToggle />
      </div>
    </header>
  )
}
