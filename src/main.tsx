import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './portfolio.css'
/* Hero backdrop template — must stay after portfolio.css */
import './hero-backdrop.css'
/* About studio backgrounds — must stay after portfolio.css */
import './about-studio.css'
import App from './App.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'

const rootEl = document.getElementById('root')
if (!rootEl) {
  throw new Error('Root element #root not found in index.html')
}

createRoot(rootEl).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
