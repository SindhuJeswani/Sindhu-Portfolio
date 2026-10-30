'use client'

import { useState } from 'react'
import FadeUp from '@/components/FadeUp'
import { siteConfig } from '@/data/content'
import { Mail, Phone, Send, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/GithubIcon'
import { LinkedinIcon } from '@/components/LinkedinIcon'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`, '_blank')
    setStatus('sent')
    setTimeout(() => {
      setStatus('idle')
      setFormData({ name: '', email: '', message: '' })
    }, 5000)
  }

  const inputCls =
    'w-full px-4 py-3 border border-[#B7C4BD]/70 dark:border-[#B7C4BD]/30 rounded-md bg-[#FAF8F4]/60 dark:bg-white/5 text-sm text-[#2B2B2B] dark:text-[#ECEAE4] placeholder:text-[#5F5F5F]/50 focus:bg-white dark:focus:bg-white/10 focus:outline-none focus:border-[#2F5D50] dark:focus:border-[#3D7A68] focus:ring-1 focus:ring-[#2F5D50] transition-all'

  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-5xl mx-auto"
      aria-labelledby="contact-heading"
    >
      <div className="hairline mb-16" />

      <FadeUp>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[1.5px] bg-[#2F5D50] dark:bg-[#3D7A68]" />
          <span className="text-xs uppercase tracking-widest font-semibold text-[#2F5D50] dark:text-[#3D7A68]">
            Communication
          </span>
        </div>
        <h2 id="contact-heading" className="section-heading mb-4">
          Get in Touch
        </h2>
        <p
          className="text-sm md:text-base text-[#5F5F5F] dark:text-[#ECEAE4]/70 mb-14 max-w-xl leading-relaxed"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Currently open to entry-level software engineering, backend systems, and data-focused roles. Whether you have an opportunity or a question about MeethaCart, my inbox is open.
        </p>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact direct channel cards */}
        <FadeUp>
          <div className="space-y-4">
            {[
              {
                icon: <Mail size={16} aria-hidden="true" />,
                label: 'Direct Email',
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
                ariaLabel: `Send email to ${siteConfig.email}`,
                external: false,
              },
              {
                icon: <Phone size={16} aria-hidden="true" />,
                label: 'Phone (Call / WhatsApp)',
                value: siteConfig.phone,
                href: `tel:${siteConfig.phone}`,
                ariaLabel: `Call ${siteConfig.phone}`,
                external: false,
              },
              {
                icon: <LinkedinIcon size={16} aria-hidden="true" />,
                label: 'LinkedIn Profile',
                value: 'linkedin.com/in/sindhu-jeswani',
                href: siteConfig.linkedin,
                ariaLabel: 'View LinkedIn profile',
                external: true,
              },
              {
                icon: <GithubIcon size={16} aria-hidden="true" />,
                label: 'GitHub Codebase',
                value: 'github.com/sindhujeswani',
                href: siteConfig.github,
                ariaLabel: 'View GitHub profile',
                external: true,
              },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                aria-label={item.ariaLabel}
                className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-white/5 border border-[#B7C4BD]/60 dark:border-[#B7C4BD]/20 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#2F5D50] dark:hover:border-[#3D7A68] hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-md bg-[#2F5D50]/10 dark:bg-[#3D7A68]/20 flex items-center justify-center shrink-0 text-[#2F5D50] dark:text-[#3D7A68] group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-[0.68rem] uppercase font-bold tracking-wider text-[#5F5F5F] dark:text-[#ECEAE4]/50 mb-0.5"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm font-semibold text-[#2B2B2B] dark:text-[#ECEAE4] group-hover:text-[#2F5D50] dark:group-hover:text-[#3D7A68] transition-colors"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={15}
                  className="text-[#5F5F5F]/40 group-hover:text-[#2F5D50] dark:group-hover:text-[#3D7A68] transition-colors"
                />
              </a>
            ))}
          </div>
        </FadeUp>

        {/* Contact interactive message form */}
        <FadeUp delay={0.1}>
          <div className="bg-white dark:bg-white/5 border border-[#B7C4BD]/70 dark:border-[#B7C4BD]/20 rounded-xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(47,93,80,0.04)]">
            <h3
              className="text-base font-bold text-[#2B2B2B] dark:text-[#ECEAE4] mb-2"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Send a Direct Note
            </h3>
            <p className="text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/60 mb-6">
              Fills and triggers your default mail client directly.
            </p>

            <form onSubmit={handleSubmit} noValidate aria-label="Send a message">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-[#2B2B2B] dark:text-[#ECEAE4]/80 mb-1.5"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                    className={inputCls}
                    style={{ fontFamily: 'var(--font-sans)' }}
                    placeholder="e.g. Alex Chen"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-[#2B2B2B] dark:text-[#ECEAE4]/80 mb-1.5"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                    className={inputCls}
                    style={{ fontFamily: 'var(--font-sans)' }}
                    placeholder="alex@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[#2B2B2B] dark:text-[#ECEAE4]/80 mb-1.5"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                    className={`${inputCls} resize-none`}
                    style={{ fontFamily: 'var(--font-sans)' }}
                    placeholder="Hi Sindhu, we came across your work on MeethaCart..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center py-3 text-sm font-bold shadow-md hover:shadow-lg transition-all"
                  disabled={status === 'sent'}
                >
                  <Send size={14} />
                  <span>
                    {status === 'sent' ? 'Opening Email Client…' : 'Send Message'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
