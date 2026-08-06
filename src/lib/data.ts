import {
  Palette,
  RefreshCw,
  LayoutTemplate,
  Search,
  Server,
  Wrench,
  CalendarCheck,
  MapPin,
  Mail,
  Store,
  Zap,
  Smartphone,
  ShieldCheck,
  Settings2,
  BadgeCheck,
  Target,
} from 'lucide-react';

export type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

export const services: Service[] = [
  { icon: Palette, title: 'Website Design', desc: 'Modern websites built around your brand.' },
  { icon: RefreshCw, title: 'Mobile Optimization', desc: 'Your website looks perfect on every device.' },
  { icon: LayoutTemplate, title: 'Landing Pages', desc: 'Focused, conversion-optimized pages for campaigns and lead generation.' },
  { icon: Search, title: 'SEO Optimization', desc: 'Rank higher on Google with technical, on-page, and local SEO built in.' },
  { icon: Server, title: 'Website Hosting', desc: 'Fast, secure, managed hosting so your site stays online 24/7.' },
  { icon: Wrench, title: 'Maintenance', desc: 'Ongoing updates, backups, and monitoring for total peace of mind.' },
  { icon: CalendarCheck, title: 'Online Booking', desc: 'Let customers schedule appointments directly from your website.' },
  { icon: Mail, title: 'Contact Forms', desc: 'Capture leads with smart, spam-protected forms that deliver to your inbox.' },
  { icon: Store, title: 'Google Business Profile', desc: 'Get set up and optimized on Google so local customers find you first.' },
];

export type Reason = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

export const reasons: Reason[] = [
  { icon: Palette, title: 'Modern Design', desc: 'Clean, contemporary interfaces that signal credibility instantly.' },
  { icon: Zap, title: 'Fast Performance', desc: 'Lightning-quick load times that keep visitors engaged.' },
  { icon: Smartphone, title: 'Mobile First', desc: 'Flawless on every device, from phone to desktop.' },
  { icon: Search, title: 'SEO Optimized', desc: 'Built to rank from day one with clean, semantic code.' },
  { icon: ShieldCheck, title: 'Secure', desc: 'HTTPS, best practices, and proactive protection baked in.' },
  { icon: Settings2, title: 'Easy to Manage', desc: 'Update content yourself with a simple, intuitive backend.' },
  { icon: BadgeCheck, title: 'Professional Branding', desc: 'A cohesive identity that makes your business memorable.' },
  { icon: Target, title: 'Built to Convert', desc: 'Every element engineered to turn visitors into paying customers.' },
];

export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  accent: string;
};

export const projects: Project[] = [
  { id: 'roofing', name: 'Summit Roofing Co.', category: 'Roofing Company', description: 'A bold, trust-first site with instant quote requests and storm-damage callouts that turn emergency searches into booked inspections.', accent: '#b45309' },
  { id: 'hvac', name: 'Arctic Air HVAC', category: 'HVAC Company', description: 'Seasonal service banners, financing CTAs, and a same-day booking flow that keeps the schedule full year-round.', accent: '#0e7490' },
  { id: 'plumbing', name: 'Reliant Plumbing', category: 'Plumbing Company', description: '24/7 emergency emphasis, transparent service areas, and one-tap calling for urgent leak calls.', accent: '#2563eb' },
  { id: 'landscaping', name: 'Evergreen Landscapes', category: 'Landscaping Company', description: 'A lush visual portfolio with before/after galleries and seasonal package pricing that sells on the spot.', accent: '#15803d' },
  { id: 'barbershop', name: 'Fade & Blade Barbershop', category: 'Barbershop', description: 'A sleek booking-first layout with stylist bios, service menus, and real-time chair availability.', accent: '#9333ea' },
];

export type Step = {
  number: string;
  title: string;
  desc: string;
};

export const steps: Step[] = [
  { number: '01', title: 'Discovery', desc: 'We learn your business, goals, and customers to define a clear strategy.' },
  { number: '02', title: 'Design', desc: 'We craft a custom, on-brand design concept tailored to convert your audience.' },
  { number: '03', title: 'Development', desc: 'We build a fast, responsive, SEO-ready site with clean, modern code.' },
  { number: '04', title: 'Launch', desc: 'We test, optimize, and deploy your site with a seamless go-live process.' },
  { number: '05', title: 'Ongoing Support', desc: 'We maintain, update, and improve your site as your business grows.' },
];

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$300',
    cadence: 'starting at',
    description: 'A clean, professional one-page site to get your business online fast.',
    features: ['1-page custom design', 'Mobile optimized', 'Contact form', 'Basic SEO setup', 'Fast hosting setup'],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: 'Custom Quote',
    cadence: '',
    description: 'A full multi-page website engineered to generate leads and build trust.',
    features: ['Up to 7 custom pages', 'Advanced SEO optimization', 'Online booking integration', 'Google Maps & Business Profile', 'Analytics setup', '1 month free support'],
    featured: true,
    cta: 'Request a Quote',
  },
  {
    name: 'Monthly Maintenance',
    price: '$50',
    cadence: '/month starting at',
    description: 'Keep your existing site fast, secure, and up to date without lifting a finger.',
    features: ['Security updates', 'Daily backups', 'Content updates', 'Uptime monitoring', 'Monthly performance report'],
    cta: 'Start Maintenance',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

