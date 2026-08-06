import { navLinks } from '@/lib/data';
import Logo from './Logo';

const services = [
  'Custom Website Design',
  'Website Redesign',
  'Landing Pages',
  'SEO Optimization',
  'Maintenance',
];

export default function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/10 bg-ink-900 pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-600/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm text-white/50">
              Premium websites that help local businesses grow, build trust, and win more
              customers.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-sm text-white/55 transition-colors hover:text-accent-300"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-left text-sm text-white/55 transition-colors hover:text-accent-300"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/55">
              <li>hello@blackcatdesigns.com</li>
              <li>(555) 123-4567</li>
              <li>United States (Remote)</li>
            </ul>
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-primary mt-5 w-full"
            >
              Get a Free Quote
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 sm:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Black Cat Designs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-sm text-white/40 transition-colors hover:text-white/70">
              Privacy Policy
            </button>
            <button className="text-sm text-white/40 transition-colors hover:text-white/70">
              Terms
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
