import { useParams } from 'react-router-dom'
import Layout from '../components/layout/Layout'

export default function TopicDetail() {
  const { id } = useParams()

  return (
    <Layout title="Прохождение темы" showBack>
      <div style={{
        padding: '48px 0',
        textAlign: 'center',
        color: 'var(--color-text-muted)',
      }}>
        <div style={{ fontSize: '56px', marginBottom: '16px' }}>✏️</div>
        <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text)', marginBottom: '6px' }}>
          Тема: {id}
        </p>
        <p style={{ fontSize: '15px', fontWeight: 600 }}>В разработке — Часть 3</p>
      </div>
    </Layout>
  )
}
