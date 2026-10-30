'use client'

import { useState } from 'react'
import FadeUp from '@/components/FadeUp'
import { siteConfig } from '@/data/content'
import { Mail, Phone } from 'lucide-react'
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
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nFrom: ${formData.email}\n\n${formData.message}`
    )
    window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`, '_blank')
    setStatus('sent')
    setTimeout(() => {
      setStatus('idle')
      setFormData({ name: '', email: '', message: '' })
    }, 5000)
  }

  const inputCls =
    'w-full px-4 py-2.5 border border-[#B7C4BD] dark:border-[#B7C4BD]/25 rounded-sm bg-transparent text-sm text-[#2B2B2B] dark:text-[#ECEAE4] placeholder:text-[#5F5F5F]/40 dark:placeholder:text-[#ECEAE4]/28 focus:outline-none focus:border-[#2F5D50] dark:focus:border-[#3D7A68] transition-colors'

  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-5xl mx-auto"
      aria-labelledby="contact-heading"
    >
      <div className="hairline mb-16" />

      <FadeUp>
        <h2 id="contact-heading" className="section-heading mb-4">
          Get in Touch
        </h2>
        <p
          className="text-sm text-[#5F5F5F] dark:text-[#ECEAE4]/58 mb-14 max-w-md leading-relaxed"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          I am currently seeking entry-level roles in software engineering, backend development or data. Feel free to reach out — I would love to talk.
        </p>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact details */}
        <FadeUp>
          <div className="space-y-6">
            {[
              {
                icon: <Mail size={15} aria-hidden="true" />,
                label: 'Email',
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
                ariaLabel: `Send email to ${siteConfig.email}`,
                external: false,
              },
              {
                icon: <Phone size={15} aria-hidden="true" />,
                label: 'Phone',
                value: siteConfig.phone,
                href: `tel:${siteConfig.phone}`,
                ariaLabel: `Call ${siteConfig.phone}`,
                external: false,
              },
              {
                icon: <LinkedinIcon size={15} aria-hidden="true" />,
                label: 'LinkedIn',
                value: 'linkedin.com/in/sindhu-jeswani',
                href: siteConfig.linkedin,
                ariaLabel: 'View LinkedIn profile',
                external: true,
              },
              {
                icon: <GithubIcon size={15} aria-hidden="true" />,
                label: 'GitHub',
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
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-[#B7C4BD] dark:border-[#B7C4BD]/22 rounded-sm flex items-center justify-center shrink-0 group-hover:border-[#2F5D50] dark:group-hover:border-[#3D7A68] transition-colors text-[#5F5F5F] dark:text-[#ECEAE4]/55 group-hover:text-[#2F5D50] dark:group-hover:text-[#3D7A68]">
                  {item.icon}
                </div>
                <div>
                  <p
                    className="text-[0.68rem] text-[#5F5F5F] dark:text-[#ECEAE4]/45 mb-0.5"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-sm text-[#2B2B2B] dark:text-[#ECEAE4] group-hover:text-[#2F5D50] dark:group-hover:text-[#3D7A68] transition-colors"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </FadeUp>

        {/* Contact form */}
        <FadeUp delay={0.1}>
          <form onSubmit={handleSubmit} noValidate aria-label="Send a message">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium text-[#5F5F5F] dark:text-[#ECEAE4]/55 mb-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Name
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
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium text-[#5F5F5F] dark:text-[#ECEAE4]/55 mb-2"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Email
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
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-[#5F5F5F] dark:text-[#ECEAE4]/55 mb-2"
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
                  placeholder="What&apos;s on your mind?"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center"
                disabled={status === 'sent'}
              >
                {status === 'sent'
                  ? 'Opening your email client…'
                  : 'Send Message'}
              </button>
            </div>
          </form>
        </FadeUp>
      </div>
    </section>
  )
}
