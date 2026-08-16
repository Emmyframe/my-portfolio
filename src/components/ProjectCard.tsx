import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

type Project = {
  title: string
  detail: string
  image: string
  href: string
}

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="group"
    >
      <Card className="flex h-full flex-col overflow-hidden transition hover:border-accent/40">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated/80 to-transparent opacity-60" />
        </div>
        <CardContent className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-text-muted">{project.detail}</p>
          <Badge variant="accent" className="mt-4 w-fit">View Project</Badge>
        </CardContent>
      </Card>
    </motion.a>
  )
}
