import { motion } from 'framer-motion';
import { steps } from '@/lib/data';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import SectionHeading from './SectionHeading';

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Our Process"
          title={
            <>
              From Idea to Launch in <span className="text-gradient-blue">Five Steps</span>
            </>
          }
          subtitle="A proven, transparent process that keeps you informed at every stage."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative mt-16"
        >
          {/* vertical line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-accent-600 via-accent-600/40 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className={`relative flex items-start gap-6 sm:w-1/2 ${
                  i % 2 === 0 ? 'sm:ml-auto sm:flex-row sm:pl-12' : 'sm:mr-auto sm:flex-row-reverse sm:pr-12 sm:text-right'
                }`}
              >
                <div className="relative z-10 grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl border border-accent-500/30 bg-ink-700 text-lg font-bold text-accent-300 shadow-glow-sm">
                  {step.number}
                </div>
                <div className="glass rounded-2xl p-5 flex-1">
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-white/55">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
