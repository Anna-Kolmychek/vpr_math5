import Layout from '../components/layout/Layout'

export default function TopicsGraph() {
  return (
    <Layout title="Граф знаний" showBack>
      <div style={{
        padding: '48px 0',
        textAlign: 'center',
        color: 'var(--color-text-muted)',
      }}>
        <div style={{ fontSize: '56px', marginBottom: '16px' }}>🕸️</div>
        <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text)', marginBottom: '6px' }}>
          Граф знаний
        </p>
        <p style={{ fontSize: '15px', fontWeight: 600 }}>В разработке — Часть 4</p>
      </div>
    </Layout>
  )
}
