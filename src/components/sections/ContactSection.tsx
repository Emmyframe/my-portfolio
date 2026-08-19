import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!supabase) {
      setStatus('error')
      setErrorMsg('Database is not configured. Please try again later.')
      return
    }

    setStatus('submitting')
    setErrorMsg('')

    const { error } = await supabase
      .from('contact_messages')
      .insert({ name, email, message })

    if (error) {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or email me directly.')
      return
    }

    setStatus('success')
    setName('')
    setEmail('')
    setMessage('')
  }

  if (status === 'success') {
    return (
      <section id="contact" className="border-t border-border/20 bg-bg py-20 sm:py-24">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <Card>
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15">
                  <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Message sent!</h3>
                <p className="mt-3 text-sm text-text-muted">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setStatus('idle')}
                >
                  Send another message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="border-t border-border/20 bg-bg py-20 sm:py-24">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="mt-2 w-full rounded-2xl border border-border/30 bg-bg/80 px-4 py-3 text-sm text-text placeholder:text-text-muted/50 transition focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-2xl border border-border/30 bg-bg/80 px-4 py-3 text-sm text-text placeholder:text-text-muted/50 transition focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, timeline, and goals..."
                    className="mt-2 w-full resize-none rounded-2xl border border-border/30 bg-bg/80 px-4 py-3 text-sm text-text placeholder:text-text-muted/50 transition focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                {status === 'error' && (
                  <p className="rounded-2xl bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {errorMsg}
                  </p>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
