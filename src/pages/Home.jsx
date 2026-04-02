import { useNavigate } from 'react-router-dom'
import { ClipboardList, BookOpen, Network } from 'lucide-react'
import Layout from '../components/layout/Layout'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

// У каждого режима свой цвет иконки и фона — не конкурируют с индиго-кнопками
const modes = [
  {
    id: 'vpr',
    Icon: ClipboardList,
    iconColor: '#f59e0b',          // янтарный
    iconBg: 'rgba(245,158,11,0.12)',
    title: 'ВПР',
    description: 'Пройти проверочную работу в условиях, приближённых к настоящим',
    parts: [
      { label: 'Часть 1', sub: 'задания 1–11', path: '/vpr/1', pad: '\u00a0\u00a0' },
      { label: 'Часть 2', sub: 'задания 12–17', path: '/vpr/2' },
    ],
  },
  {
    id: 'topics',
    Icon: BookOpen,
    iconColor: '#22c55e',          // зелёный
    iconBg: 'rgba(34,197,94,0.12)',
    title: 'Темы',
    description: 'Изучать темы по шагам и отслеживать прогресс по каждому уровню',
    path: '/topics',
  },
  {
    id: 'graph',
    Icon: Network,
    iconColor: '#a855f7',          // фиолетовый
    iconBg: 'rgba(168,85,247,0.12)',
    title: 'Граф знаний',
    description: 'Визуально увидеть, какие темы пройдены и что изучить дальше',
    path: '/graph',
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <Layout>
      <div style={{ paddingTop: '32px', paddingBottom: '32px' }}>

        {/* Заголовок блока */}
        <div className="animate-fade-in" style={{ marginBottom: '24px' }}>
          <h2 style={{
            margin: '0 0 6px',
            fontSize: '22px',
            fontWeight: 800,
            color: 'var(--color-text)',
          }}>
            Выбери режим
          </h2>
          <p style={{
            margin: 0,
            color: 'var(--color-text-muted)',
            fontSize: '16px',
            fontWeight: 600,
          }}>
            Статистика появится после первого прохождения
          </p>
        </div>

        {/* Карточки режимов */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {modes.map((mode, i) => {
            const { Icon } = mode
            return (
              <div
                key={mode.id}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <Card style={{ padding: '20px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>

                    {/* Иконка — без подложки и рамки */}
                    <div style={{
                      width: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      paddingTop: '2px',
                      color: mode.iconColor,
                    }}>
                      <Icon size={42} strokeWidth={1.5} />
                    </div>

                    {/* Текст и кнопки */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{
                        margin: '0 0 5px',
                        fontSize: '18px',
                        fontWeight: 800,
                        color: 'var(--color-text)',
                      }}>
                        {mode.title}
                      </h3>
                      <p style={{
                        margin: '0 0 16px',
                        fontSize: '15px',
                        color: 'var(--color-text-muted)',
                        fontWeight: 600,
                        lineHeight: 1.5,
                      }}>
                        {mode.description}
                      </p>

                      {/* ВПР — две кнопки */}
                      {mode.parts ? (
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                          {mode.parts.map(part => (
                            <Button
                              key={part.path}
                              onClick={() => navigate(part.path)}
                              size="sm"
                            >
                              {part.label}
                              <span style={{
                                fontSize: '13px',
                                opacity: 0.8,
                                fontWeight: 600,
                                marginLeft: '2px',
                              }}>
                                ({part.sub}){part.pad || ''}
                              </span>
                            </Button>
                          ))}
                        </div>
                      ) : (
                        <Button onClick={() => navigate(mode.path)} size="sm">
                          Перейти →
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Сброс прогресса */}
        <div style={{ textAlign: 'center', marginTop: '28px' }}>
          <Button variant="ghost" size="sm" disabled>
            Сбросить прогресс
          </Button>
        </div>

      </div>
    </Layout>
  )
}
