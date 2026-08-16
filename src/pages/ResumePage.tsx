import { motion } from 'framer-motion'
import { PageHero } from '../components/ui/PageHero'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Award, GraduationCap, Briefcase, Sparkles } from 'lucide-react'

const skills = {
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  'Backend': ['Node.js', 'Express', 'Python', 'REST API', 'GraphQL', 'WebSocket'],
  'Database': ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase'],
  'AI & Cloud': ['OpenAI', 'LangChain', 'TensorFlow', 'Docker', 'AWS', 'Vercel']
}

const experience = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'Freelance',
    period: '2023 — Present',
    description:
      'Leading end-to-end development of scalable web applications. Architected RESTful APIs, integrated AI-powered features, and delivered high-converting digital products.'
  },
  {
    role: 'Backend Engineer',
    company: 'Tech Startup',
    period: '2021 — 2023',
    description:
      'Designed backend systems powering web and mobile apps. Built secure authentication, payment integrations, and real-time features for thousands of concurrent users.'
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency',
    period: '2020 — 2021',
    description:
      'Developed responsive, accessible interfaces for client projects. Collaborated with designers to deliver pixel-perfect, high-performance experiences.'
  },
  {
    role: 'Junior Developer',
    company: 'Web Studio',
    period: '2019 — 2020',
    description:
      'Built websites and learned full-stack fundamentals. Worked on landing pages, CMS integrations, and front-end bug fixes.'
  }
]

const education = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'University of Lagos',
    period: '2016 — 2019',
    description: 'Graduated with honors. Focus on software engineering, algorithms, and database systems.'
  },
  {
    degree: 'Full-Stack Development Bootcamp',
    institution: 'Tech Academy',
    period: '2019',
    description: 'Intensive program covering modern web development with React, Node.js, and database design.'
  }
]

const certifications = [
  'AWS Certified Developer Associate',
  'Meta Front-End Developer Certificate',
  'Google Professional Cloud Architect',
  'OpenAI API Integration Specialist'
]

export function ResumePage() {
  return (
    <>
      <PageHero
        eyebrow="Professional Profile"
        title="My Resume"
        description="A comprehensive overview of my skills, experience, education, and certifications."
      />

      <section className="border-t border-border/20 bg-bg py-20 sm:py-24">
        <div className="container mx-auto max-w-4xl space-y-16">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <p className="text-sm uppercase tracking-[0.28em] text-accent">Summary</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-8 text-text-muted">
                  Results-driven software developer with 5+ years of experience specializing in backend engineering, fullstack development, and AI-powered solutions. I excel in designing scalable web applications, architecting RESTful APIs, and delivering end-to-end solutions for seamless user experiences. Passionate about building impactful solutions that drive business growth.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <div>
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-accent">Skills</p>
                <h2 className="mt-1 text-2xl font-semibold text-white">Technical Expertise</h2>
              </div>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {Object.entries(skills).map(([category, items], idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.06 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-sm font-semibold text-white">{category}</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {items.map((item) => (
                          <Badge key={item} variant="outline">{item}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3">
              <Briefcase className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-accent">Experience</p>
                <h2 className="mt-1 text-2xl font-semibold text-white">Work History</h2>
              </div>
            </div>
            <div className="mt-8 space-y-5">
              {experience.map((exp, idx) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.06 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                          <p className="text-sm text-text-muted">{exp.company}</p>
                        </div>
                        <Badge variant="accent">{exp.period}</Badge>
                      </div>
                      <Separator className="my-4" />
                      <p className="text-sm leading-7 text-text-muted">{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-accent">Education</p>
                <h2 className="mt-1 text-2xl font-semibold text-white">Academic Background</h2>
              </div>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {education.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.06 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <Badge variant="accent">{edu.period}</Badge>
                      <h3 className="mt-3 text-lg font-semibold text-white">{edu.degree}</h3>
                      <p className="mt-1 text-sm text-text-muted">{edu.institution}</p>
                      <Separator className="my-4" />
                      <p className="text-sm leading-7 text-text-muted">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3">
              <Award className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-accent">Certifications</p>
                <h2 className="mt-1 text-2xl font-semibold text-white">Professional Credentials</h2>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: idx * 0.05 }}
                >
                  <Card>
                    <CardContent className="flex items-center gap-3 p-5">
                      <Award className="h-5 w-5 shrink-0 text-accent" />
                      <p className="text-sm font-medium text-white">{cert}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-lg font-semibold text-white">Want to work together?</p>
              <p className="mt-3 text-sm text-text-muted">
                Let's build your ideas, online presence quickly and efficiently.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <Link to="/#contact">Contact Me</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/experience">View Experience</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}
