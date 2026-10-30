import { Mail, Download, ArrowDown } from 'lucide-react'
import { GithubIcon } from '@/components/GithubIcon'
import { siteConfig } from '@/data/content'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-6 max-w-5xl mx-auto"
      aria-label="Introduction"
    >
      <div className="flex flex-col gap-8 max-w-2xl">
        {/* Availability pulse badge */}
        <div className="flex items-center gap-2.5 w-fit">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
              style={{ backgroundColor: '#2F5D50' }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ backgroundColor: '#2F5D50' }}
            />
          </span>
          <span
            className="text-[0.7rem] tracking-widest uppercase text-[#5F5F5F] dark:text-[#ECEAE4]/55"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Open to opportunities · 2027
          </span>
        </div>

        {/* Name */}
        <div>
          <h1
            className="text-[clamp(3rem,9vw,6rem)] font-semibold text-[#2B2B2B] dark:text-[#ECEAE4] tracking-tight leading-[1.04]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Sindhu
            <br />
            Jeswani
          </h1>
          <p
            className="mt-5 text-base md:text-lg text-[#5F5F5F] dark:text-[#ECEAE4]/68 max-w-lg leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {siteConfig.role}
          </p>
        </div>

        {/* Short intro block */}
        <p
          className="text-sm md:text-[0.95rem] text-[#5F5F5F] dark:text-[#ECEAE4]/58 max-w-md leading-[1.85] pl-4"
          style={{
            fontFamily: 'var(--font-sans)',
            borderLeft: '2px solid #2F5D50',
          }}
        >
          Final-year CS student at SZABIST, Karachi. Building reliable backend systems and data tools — and currently working on an AI-powered bilingual marketplace for my final year project.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a href="#projects" className="btn-primary">
            View Projects
            <ArrowDown size={14} aria-hidden="true" />
          </a>
          <a href={siteConfig.cvPath} download className="btn-outline">
            <Download size={14} aria-hidden="true" />
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div className="flex flex-wrap items-center gap-6 pt-1">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub profile"
            className="flex items-center gap-2 text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/55 hover:text-[#2B2B2B] dark:hover:text-[#ECEAE4] transition-colors animated-underline"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <GithubIcon size={14} aria-hidden="true" />
            github.com/sindhujeswani
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label={`Email ${siteConfig.email}`}
            className="flex items-center gap-2 text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/55 hover:text-[#2B2B2B] dark:hover:text-[#ECEAE4] transition-colors animated-underline"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <Mail size={14} aria-hidden="true" />
            {siteConfig.email}
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        style={{ color: 'rgba(95,95,95,0.35)' }}
        aria-hidden="true"
      >
        <span
          className="text-[0.6rem] tracking-[0.2em] uppercase"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          scroll
        </span>
        <svg width="1" height="36" viewBox="0 0 1 36" fill="none">
          <line
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="36"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        </svg>
      </div>
    </section>
  )
}
