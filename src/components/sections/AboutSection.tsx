import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/20 bg-bg py-20 sm:py-24">
      <div className="container mx-auto grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <SectionHeading
            id="about"
            title="About Me"
            description="I'm Ajani Emmanuel (Emmydev), a results-driven software developer specializing in backend engineering, fullstack development, and AI-powered solutions."
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="space-y-5 rounded-[1.5rem] border border-border/30 bg-bg-elevated/90 p-8 shadow-soft"
          >
            <p className="text-base leading-8 text-text-muted">
              With over 5 years of experience, I excel in designing and implementing scalable web applications, architecting RESTful APIs, developing secure smart contracts, and creating decentralized platforms.
            </p>
            <p className="text-sm text-text-muted">
              My technical expertise spans Python, JavaScript, Node.js, Solidity, Ethereum, Phoenix, and database management systems like MongoDB and MySQL. I have a strong focus on performance optimization, code maintainability, and delivering end-to-end solutions for seamless user experiences.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="grid gap-5 sm:grid-cols-2"
        >
          <div className="rounded-[1.5rem] bg-bg/70 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">Creative Design</p>
            <p className="mt-3 text-sm text-text-muted">Crafting unique, responsive websites that perfectly blend aesthetics with functionality.</p>
          </div>
          <div className="rounded-[1.5rem] bg-bg/70 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">Rapid Development</p>
            <p className="mt-3 text-sm text-text-muted">Swift and efficient development process without compromising on quality or attention to detail.</p>
          </div>
          <div className="rounded-[1.5rem] bg-bg/70 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">High Performance</p>
            <p className="mt-3 text-sm text-text-muted">Optimized code and efficient hosting ensuring lightning-fast page loads and smooth user experience.</p>
          </div>
          <div className="rounded-[1.5rem] bg-bg/70 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">Scalable Architecture</p>
            <p className="mt-3 text-sm text-text-muted">Future-proof solutions built to grow with your needs, utilizing modern development practices.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
