import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: '14px' }}>
        This page doesn't exist — or hasn't been built yet.
      </p>
      <Link to="/" className="nav__cta" style={{ marginTop: '20px' }}>
        ← Back home
      </Link>
    </div>
  )
}
