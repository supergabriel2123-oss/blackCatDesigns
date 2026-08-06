import { motion } from 'framer-motion';
import { fadeUp, stagger, viewport } from '@/lib/motion';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      <motion.span
        variants={fadeUp}
        className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-400"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="mt-4 text-lg text-white/60">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
