import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import SectionHeading from './SectionHeading';

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-accent-600/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Everything Your Business <span className="text-gradient-blue">Needs to Win Online</span>
            </>
          }
          subtitle="From custom design to ongoing growth, we cover the full spectrum of modern web presence."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group glass rounded-2xl p-6 transition-colors hover:border-accent-500/30"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-accent-600/20 to-accent-800/20 text-accent-300 ring-1 ring-accent-500/20 transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{s.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
