import { motion } from 'framer-motion';
import { reasons } from '@/lib/data';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import SectionHeading from './SectionHeading';

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Black Cat Designs"
          title={
            <>
              Built Different. <span className="text-gradient-blue">Built to Convert.</span>
            </>
          }
          subtitle="Every decision we make is focused on one thing: turning your visitors into paying customers."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group glass rounded-2xl p-6 text-center transition-colors hover:border-accent-500/30"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent-600 to-accent-800 text-white shadow-glow-sm transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-white">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{r.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
