import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { ProtectedRoute } from './components/ProtectedRoute'
import { ScrollToTop } from './components/ScrollToTop'
import AboutPage from './pages/AboutPage'
import AuthPage from './pages/AuthPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import TestimonialsPage from './pages/TestimonialsPage'
import { applyTheme, getStoredTheme, type Theme } from './theme'

function AppLayout({
  theme,
  onThemeChange,
}: {
  theme: Theme
  onThemeChange: (t: Theme) => void
}) {
  return (
    <>
      <Header theme={theme} onThemeChange={onThemeChange} />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Emmy Stack. Full stack mobile &amp; web.</p>
      </footer>
    </>
  )
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/*"
          element={<AppLayout theme={theme} onThemeChange={setTheme} />}
        />
      </Route>
    </Routes>
  )
}
