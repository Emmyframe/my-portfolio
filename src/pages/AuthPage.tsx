import { useState, type FormEvent } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import '../auth.css'

type Mode = 'sign-in' | 'sign-up'

export default function AuthPage() {
  const { session, loading, configured, signIn, signUp } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: { pathname: string } } | null)?.from?.pathname ?? '/'

  const [mode, setMode] = useState<Mode>('sign-in')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  if (!loading && session) {
    return <Navigate to={from} replace />
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setMessage(null)

    const trimmedEmail = email.trim()
    if (!trimmedEmail || !password) {
      setError('Email and password are required.')
      return
    }

    if (mode === 'sign-up' && password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    setSubmitting(true)

    if (mode === 'sign-in') {
      const { error: signInError } = await signIn(trimmedEmail, password)
      setSubmitting(false)
      if (signInError) {
        setError(signInError)
        return
      }
      navigate(from, { replace: true })
      return
    }

    const { error: signUpError, needsConfirmation } = await signUp(trimmedEmail, password)
    setSubmitting(false)

    if (signUpError) {
      setError(signUpError)
      return
    }

    if (needsConfirmation) {
      setMessage('Account created. Check your email to confirm, then sign in.')
      setMode('sign-in')
      setPassword('')
      setConfirmPassword('')
      return
    }

    navigate(from, { replace: true })
  }

  return (
    <div className="auth-page">
      <div className="auth-card card">
        <Link className="auth-card__logo logo-link" to="/">
          <span className="logo-mark" aria-hidden="true">
            ES
          </span>
          <span>Emmy Stack</span>
        </Link>

        <h1 className="auth-card__title">
          {mode === 'sign-in' ? 'Sign in' : 'Create account'}
        </h1>
        <p className="auth-card__lead">
          {mode === 'sign-in'
            ? 'Sign in to view the portfolio.'
            : 'Create an account to get access.'}
        </p>

        {!configured && (
          <p className="auth-card__error" role="alert">
            Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your
            environment.
          </p>
        )}

        <div className="auth-tabs" role="tablist" aria-label="Authentication mode">
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'sign-in'}
            className={mode === 'sign-in' ? 'auth-tabs__btn auth-tabs__btn--active' : 'auth-tabs__btn'}
            onClick={() => {
              setMode('sign-in')
              setError(null)
              setMessage(null)
            }}
          >
            Sign in
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'sign-up'}
            className={mode === 'sign-up' ? 'auth-tabs__btn auth-tabs__btn--active' : 'auth-tabs__btn'}
            onClick={() => {
              setMode('sign-up')
              setError(null)
              setMessage(null)
            }}
          >
            Sign up
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="auth-email">Email</label>
          <input
            id="auth-email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={!configured || submitting}
          />

          <label htmlFor="auth-password">Password</label>
          <input
            id="auth-password"
            type="password"
            autoComplete={mode === 'sign-in' ? 'current-password' : 'new-password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            disabled={!configured || submitting}
          />

          {mode === 'sign-up' && (
            <>
              <label htmlFor="auth-confirm">Confirm password</label>
              <input
                id="auth-confirm"
                type="password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                disabled={!configured || submitting}
              />
            </>
          )}

          {error && (
            <p className="auth-card__error" role="alert">
              {error}
            </p>
          )}
          {message && (
            <p className="auth-card__message" role="status">
              {message}
            </p>
          )}

          <button
            className="btn btn--primary auth-form__submit"
            type="submit"
            disabled={!configured || submitting}
          >
            {submitting ? 'Please wait…' : mode === 'sign-in' ? 'Sign in' : 'Sign up'}
          </button>
        </form>
      </div>
    </div>
  )
}
