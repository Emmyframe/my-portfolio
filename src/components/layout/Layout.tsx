import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { Footer } from '../shared/Footer'
import { Navbar } from '../shared/Navbar'

type Props = {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
