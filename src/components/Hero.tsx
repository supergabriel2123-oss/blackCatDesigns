import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const badges = ['Mobile Optimized', 'Lightning Fast', 'SEO Ready', 'Built to Convert'];

export default function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Animated background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent-600/25 blur-[140px]"
        />
        <motion.div
          animate={{ opacity: [0.25, 0.5, 0.25], x: [-40, 40, -40] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-accent-500/20 blur-[120px]"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-800 to-transparent" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div variants={fadeUp} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-600/10 px-4 py-1.5 text-sm font-medium text-accent-200">
            <Sparkles className="h-4 w-4" />
            Premium Web Design for Local Businesses
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Websites That Turn<br className="hidden sm:block" />
          <span className="text-gradient-blue">Visitors Into Customers.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/65 sm:text-xl"
        >
          We create fast, modern websites that build trust, generate more leads, and help
          businesses stand out from the competition.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button onClick={() => scrollTo('#contact')} className="btn-primary w-full sm:w-auto">
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={() => scrollTo('#portfolio')} className="btn-ghost w-full sm:w-auto">
            View Portfolio
          </button>
        </motion.div>

        <motion.ul
          variants={fadeUp}
          className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {badges.map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm font-medium text-white/70">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-600/20 text-accent-300">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              {b}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
