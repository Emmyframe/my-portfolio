import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export function ProtectedRoute() {
  const { session, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="auth-loading" role="status" aria-live="polite">
        <p>Loading…</p>
      </div>
    )
  }

  if (!session) {
    return <Navigate to="/auth" replace state={{ from: location }} />
  }

  return <Outlet />
}
