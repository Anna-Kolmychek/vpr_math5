import { useParams } from 'react-router-dom'
import Layout from '../components/layout/Layout'

export default function VPR() {
  const { part } = useParams()
  const partLabel = part === '1' ? 'Часть 1 · задания 1–11' : 'Часть 2 · задания 12–17'

  return (
    <Layout title={`ВПР · ${partLabel}`} showBack>
      <div style={{
        padding: '48px 0',
        textAlign: 'center',
        color: 'var(--color-text-muted)',
      }}>
        <div style={{ fontSize: '56px', marginBottom: '16px' }}>📊</div>
        <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text)', marginBottom: '6px' }}>
          ВПР · {partLabel}
        </p>
        <p style={{ fontSize: '15px', fontWeight: 600 }}>В разработке — Часть 5</p>
      </div>
    </Layout>
  )
}
