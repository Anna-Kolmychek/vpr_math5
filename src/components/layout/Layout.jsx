import Header from './Header'

export default function Layout({ children, title, showBack = false }) {
  return (
    <div
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--color-bg)',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Header title={title} showBack={showBack} />

      <main
        style={{
          flex: 1,
          maxWidth: '680px',   /* совпадает с шапкой */
          width: '100%',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        {children}
      </main>
    </div>
  )
}
