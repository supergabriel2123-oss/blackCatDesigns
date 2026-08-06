import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Heart } from 'lucide-react';
import { fadeUp, stagger, viewport } from '@/lib/motion';

const stats = [
  { icon: TrendingUp, value: '2x', label: 'Avg. lead increase' },
  { icon: Users, value: '50+', label: 'Local businesses served' },
  { icon: Award, value: '100%', label: 'Custom designs' },
  { icon: Heart, value: '5★', label: 'Client satisfaction' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-accent-600/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.span
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400"
            >
              About Us
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Your Local Partner for <span className="text-gradient-blue">Digital Growth</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-lg text-white/60">
              Black Cat Designs helps local businesses establish a professional online presence
              with modern websites focused on growth, trust, and customer acquisition.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 text-base text-white/50">
              We believe a website should be more than a digital business card — it should be
              your hardest-working employee, available 24/7, turning searches into customers.
              That's why every site we build is fast, beautiful, and engineered to convert.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="glass rounded-2xl p-4 text-center">
                    <Icon className="mx-auto h-5 w-5 text-accent-400" />
                    <div className="mt-2 text-2xl font-bold text-white">{s.value}</div>
                    <div className="mt-0.5 text-xs text-white/50">{s.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative"
          >
            <div className="glass-strong relative overflow-hidden rounded-3xl p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-600/20 blur-[60px]" />
              <div className="relative space-y-4">
                {[
                  { t: 'Discovery-driven', d: 'We learn your business before we design.' },
                  { t: 'Conversion-focused', d: 'Every element earns its place on the page.' },
                  { t: 'Locally rooted', d: 'We understand what makes local customers click.' },
                  { t: 'Long-term partners', d: 'We stick around to maintain and grow your site.' },
                ].map((item) => (
                  <div key={item.t} className="flex items-start gap-3 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <div className="mt-1 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-accent-600/20 text-accent-300">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{item.t}</div>
                      <div className="text-sm text-white/50">{item.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
