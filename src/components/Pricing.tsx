import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { plans } from '@/lib/data';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import SectionHeading from './SectionHeading';

export default function Pricing() {
  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Simple, Transparent <span className="text-gradient-blue">Pricing</span>
            </>
          }
          subtitle="No hidden fees. No surprises. Just clear options that scale with your business."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 flex flex-wrap justify-center gap-10"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`relative flex flex-col rounded-3xl p-6 transition-colors w-full sm:w-[280px] ${
                plan.featured
                ? 'glass-strong border-accent-500/40 ring-1 ring-accent-500/30'
                : 'glass hover:border-accent-500/30'
            }`}
          >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-accent-600 to-accent-500 px-4 py-1 text-xs font-semibold text-white shadow-glow-sm">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>

              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                {plan.cadence && (
                  <span className="text-sm text-white/45">{plan.cadence}</span>
                )}
              </div>

              <p className="mt-3 text-sm text-white/55">{plan.description}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                    <span className="mt-0.5 grid h-4 w-4 flex-shrink-0 place-items-center rounded-full bg-accent-600/20 text-accent-300">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`mt-6 w-full ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-sm text-white/40">
          All projects include a free consultation. Custom quotes tailored to your exact needs.
        </p>
      </div>
    </section>
  );
}
