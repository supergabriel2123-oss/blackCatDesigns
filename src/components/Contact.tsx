import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2, Mail, Phone, MapPin } from 'lucide-react';
import { fadeUp, stagger, viewport } from '@/lib/motion';
import SectionHeading from './SectionHeading';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus('success');
    setForm({ name: '', business: '', email: '', phone: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/35 outline-none transition-colors focus:border-accent-500/60 focus:bg-white/[0.07]';

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-600/12 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's Build Your <span className="text-gradient-blue">Website</span>
            </>
          }
          subtitle="Tell us about your business and we'll get back to you within 24 hours with a free quote."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.4fr]"
        >
          {/* info side */}
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white">Get in touch</h3>
              <p className="mt-2 text-sm text-white/55">
                Ready to stand out online? We're ready to help you get there.
              </p>
              <div className="mt-6 space-y-4">
                <ContactRow icon={Mail} label="Email" value="hello@blackcatdesigns.com" />
                <ContactRow icon={Phone} label="Phone" value="(555) 123-4567" />
                <ContactRow icon={MapPin} label="Service Area" value="United States (Remote)" />
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 text-accent-300">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-semibold">Free, no-obligation quote</span>
              </div>
              <p className="mt-2 text-sm text-white/50">
                No pressure, no jargon. Just a clear plan and fair price for your project.
              </p>
            </div>
          </motion.div>

          {/* form side */}
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="glass-strong rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" required>
                <input className={inputClass} type="text" required value={form.name} onChange={update('name')} placeholder="Jane Smith" />
              </Field>
              <Field label="Business Name">
                <input className={inputClass} type="text" value={form.business} onChange={update('business')} placeholder="Smith & Co." />
              </Field>
              <Field label="Email" required>
                <input className={inputClass} type="email" required value={form.email} onChange={update('email')} placeholder="jane@business.com" />
              </Field>
              <Field label="Phone">
                <input className={inputClass} type="tel" value={form.phone} onChange={update('phone')} placeholder="(555) 000-0000" />
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Message" required>
                <textarea
                  className={`${inputClass} min-h-[120px] resize-y`}
                  required
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={status !== 'idle'}
              className="btn-primary mt-6 w-full disabled:opacity-70"
            >
              <AnimatePresence mode="wait">
                {status === 'loading' ? (
                  <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </motion.span>
                ) : status === 'success' ? (
                  <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Request Sent!
                  </motion.span>
                ) : (
                  <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    Request Your Free Website Audit
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <AnimatePresence>
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  Something went wrong sending your request. Please try again or email us directly.
                </motion.p>
              )}
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-300"
                >
                  Thanks! We've received your request and will reach out within 24 hours.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-white/70">
        {label} {required && <span className="text-accent-400">*</span>}
      </span>
      {children}
    </label>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-accent-600/15 text-accent-300">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs text-white/40">{label}</div>
        <div className="text-sm font-medium text-white">{value}</div>
      </div>
    </div>
  );
}
