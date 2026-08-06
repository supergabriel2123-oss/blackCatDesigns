import { motion } from 'framer-motion';
import type { Project } from '@/lib/data';

/**
 * Self-contained CSS browser mockups — no external image dependencies.
 * Each industry gets a tailored mini-website preview.
 */
export default function PortfolioMockup({ project }: { project: Project }) {
  return (
    <div className="flex items-end justify-center gap-4 sm:gap-6">
      <DesktopMockup project={project} />
      <MobileMockup project={project} />
    </div>
  );
}

function DesktopMockup({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative flex-1 w-full max-w-[440px] flex-shrink-0"
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-700 shadow-card">
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-ink-600 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-2 flex-1 rounded-md bg-white/5 px-2 py-0.5 text-[9px] text-white/40">
            {project.id}.com
          </span>
        </div>
        
        {/* Site content */}
        <div className="relative h-56 bg-gradient-to-br from-ink-600 to-ink-800 p-4">
          <MiniSite project={project} variant="desktop" />
        </div>
      </div>
    </motion.div>
  );
}

function MobileMockup({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative hidden w-[120px] flex-shrink-0 sm:block"
    >
      <div className="overflow-hidden rounded-[20px] border-[3px] border-ink-500 bg-ink-700 shadow-card">
        <div className="relative h-48 bg-gradient-to-b from-ink-600 to-ink-800 overflow-hidden">
          {/* Notch */}
          <div className="absolute left-1/2 top-0 z-20 h-4 w-12 -translate-x-1/2 rounded-b-xl bg-ink-500" />
          
          {/* Wrapped in an absolute container to isolate the scaling boundary bug */}
          <div className="absolute inset-0 z-10">
            <MiniSite project={project} variant="mobile" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MiniSite({ project, variant }: { project: Project; variant: 'desktop' | 'mobile' }) {
  const isMobile = variant === 'mobile';
  
  const content = (
    <>
      {/* Nav */}
      <div className="flex items-center justify-between px-2 pt-2">
        <div className="flex items-center gap-1">
          <div className="h-2.5 w-2.5 rounded-full" style={{ background: project.accent }} />
          <div className="h-1.5 w-12 rounded bg-white/30" />
        </div>
        {!isMobile && (
          <div className="flex gap-2">
            <div className="h-1.5 w-6 rounded bg-white/15" />
            <div className="h-1.5 w-6 rounded bg-white/15" />
            <div className="h-1.5 w-6 rounded bg-white/15" />
          </div>
        )}
        <div className="h-3 w-12 rounded-full" style={{ background: project.accent }} />
      </div>

      {/* Hero */}
      <div className="px-2 pt-4">
        <div className="h-2 w-3/4 rounded bg-white/80" />
        <div className="mt-1.5 h-2 w-1/2 rounded bg-white/40" />
        {!isMobile && <div className="mt-1.5 h-2 w-2/3 rounded bg-white/20" />}
        <div className="mt-3 flex gap-1.5">
          <div className="h-3.5 w-14 rounded-full" style={{ background: project.accent }} />
          <div className="h-3.5 w-10 rounded-full bg-white/10" />
        </div>
      </div>

      {/* Cards */}
      <div className="mt-3 flex gap-1.5 px-2">
        {[0, 1, 2].slice(0, isMobile ? 2 : 3).map((i) => (
          <div key={i} className="flex-1 rounded-md border border-white/10 bg-white/5 p-1.5">
            <div className="h-6 rounded" style={{ background: `${project.accent}33` }} />
            <div className="mt-1 h-1.5 w-full rounded bg-white/25" />
            <div className="mt-1 h-1.5 w-2/3 rounded bg-white/15" />
          </div>
        ))}
      </div>
    </>
  );

  return isMobile ? (
    /* Fixed scales by declaring explicit layout transform rules */
    <div className="transform scale-[0.42] origin-top-left h-[450px] w-[285px] p-2">
      {content}
    </div>
  ) : (
    content
  );
}
