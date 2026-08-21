import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type Project = {
  title: string
  detail: string
  image: string
  href: string
  repo?: string
  category?: string
}

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="group h-full"
    >
      <Card className="flex h-full flex-col overflow-hidden transition hover:border-accent/40">
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} — open live demo`}
          className="relative block aspect-video overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated/80 to-transparent opacity-60" />
        </a>
        <CardContent className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-text-muted">{project.detail}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-accent/90"
            >
              🚀 Live Demo
            </a>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border/30 bg-bg-elevated px-4 py-1.5 text-xs font-semibold text-text-muted transition hover:border-accent hover:text-white"
              >
                ⌨ View Code
              </a>
            )}
            {project.category && (
              <Badge variant="accent" className="ml-auto">{project.category}</Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.article>
  )
}
