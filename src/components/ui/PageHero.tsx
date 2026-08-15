import { motion } from 'framer-motion'

type Props = {
  eyebrow: string
  title: string
  description: string
}

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(108,208,255,0.08),_transparent_22%),_radial-gradient(circle_at_80%_10%,_rgba(75,166,255,0.05),_transparent_26%),_rgba(7,14,30,1)] py-20 sm:py-28">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-accent">{eyebrow}</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">{title}</h1>
          <p className="text-lg text-text-muted">{description}</p>
        </motion.div>
      </div>
    </section>
  )
}
