import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
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
        flexShrink: 0,
        padding: '0 10px',
        color: isDark ? '#fbbf24' : '#6366f1',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = 'var(--color-border)'
        e.currentTarget.style.transform = 'scale(1.05)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = 'var(--color-bg)'
        e.currentTarget.style.transform = 'scale(1)'
      }}
    >
      {isDark
        ? <Sun size={18} strokeWidth={2.5} />
        : <Moon size={18} strokeWidth={2.5} />
      }
    </button>
  )
}
