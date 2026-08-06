import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/data';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import SectionHeading from './SectionHeading';
import PortfolioMockup from './PortfolioMockup';

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Work That Speaks <span className="text-gradient-blue">for Itself</span>
            </>
          }
          subtitle="A glimpse of the premium websites we craft for local businesses. Every project is built to be replaced with your real brand and content."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-6 lg:grid-cols-2"
        >
          {projects.map((project) => {
            // Ensures safety if the hex code doesn't start with '#'
            const baseHex = project.accent.startsWith('#') ? project.accent : `#${project.accent}`;
            const transparentBg = `${baseHex}22`;

            return (
              <motion.article
                key={project.id}
                variants={fadeUp}
                whileHover="hover"
                className="group glass relative overflow-hidden rounded-3xl p-6 sm:p-8 transition-colors hover:border-accent-500/30"
              >
                {/* hover glow */}
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: baseHex }}
                />

                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-xs">
                    <span
                      className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ background: transparentBg, color: baseHex }}
                    >
                      {project.category}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-white">{project.name}</h3>
                    <p className="mt-2 text-sm text-white/55">{project.description}</p>
                    
                    {/* Changed to an anchor tag for better semantic web standards */}
                    <a 
                      href={`/projects/${project.id}`} // Replace with your routing logic
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 transition-colors hover:text-accent-200"
                    >
                      View Project
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>

                  <div className="flex-shrink-0">
                    {/* Added project id key for safe re-renders */}
                    <PortfolioMockup key={project.id} project={project} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
