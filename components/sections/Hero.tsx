'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Mail, Download, ArrowDown } from 'lucide-react'
import { GithubIcon } from '@/components/GithubIcon'
import { LinkedinIcon } from '@/components/LinkedinIcon'
import { siteConfig } from '@/data/content'

export default function Hero() {
  const shouldReduce = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduce ? 0 : 0.12,
        delayChildren: shouldReduce ? 0 : 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-20 px-6 max-w-5xl mx-auto overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle ambient gradient aura in background */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#2F5D50]/5 dark:bg-[#3D7A68]/10 blur-3xl -z-10"
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-8 max-w-2xl"
      >
        {/* Availability pulse badge */}
        <motion.div variants={itemVariants} className="flex items-center gap-2.5 w-fit">
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
            className="text-[0.7rem] font-medium tracking-widest uppercase text-[#5F5F5F] dark:text-[#ECEAE4]/60"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Open to opportunities · 2027
          </span>
        </motion.div>

        {/* Name & Title */}
        <motion.div variants={itemVariants}>
          <h1
            className="text-[clamp(3.2rem,9.5vw,6.5rem)] font-semibold text-[#2B2B2B] dark:text-[#ECEAE4] tracking-tight leading-[1.03]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Sindhu
            <br />
            Jeswani
          </h1>
          <p
            className="mt-5 text-base md:text-lg text-[#5F5F5F] dark:text-[#ECEAE4]/75 max-w-lg leading-relaxed font-normal"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {siteConfig.role}
          </p>
        </motion.div>

        {/* Short editorial quote */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-[0.95rem] text-[#5F5F5F] dark:text-[#ECEAE4]/65 max-w-md leading-[1.85] pl-4 border-l-2 border-[#2F5D50] dark:border-[#3D7A68]"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Final-year CS student at SZABIST, Karachi. Building reliable backend systems and data tools — and currently working on an AI-powered bilingual marketplace for my final year project.
        </motion.p>

        {/* CTA buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
          <motion.a
            href="#projects"
            className="btn-primary shadow-sm hover:shadow-md transition-shadow"
            whileHover={shouldReduce ? {} : { y: -2 }}
            whileTap={shouldReduce ? {} : { scale: 0.98 }}
          >
            View Projects
            <ArrowDown size={14} aria-hidden="true" />
          </motion.a>
          <motion.a
            href={siteConfig.cvPath}
            download
            className="btn-outline transition-colors"
            whileHover={shouldReduce ? {} : { y: -2 }}
            whileTap={shouldReduce ? {} : { scale: 0.98 }}
          >
            <Download size={14} aria-hidden="true" />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social links with LinkedIn */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-2">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center gap-2 text-xs font-medium text-[#5F5F5F] dark:text-[#ECEAE4]/65 hover:text-[#2F5D50] dark:hover:text-[#3D7A68] transition-colors animated-underline"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <LinkedinIcon size={14} aria-hidden="true" />
            linkedin.com/in/sindhu-jeswani
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub profile"
            className="flex items-center gap-2 text-xs font-medium text-[#5F5F5F] dark:text-[#ECEAE4]/65 hover:text-[#2B2B2B] dark:hover:text-[#ECEAE4] transition-colors animated-underline"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <GithubIcon size={14} aria-hidden="true" />
            github.com/sindhujeswani
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            aria-label={`Email ${siteConfig.email}`}
            className="flex items-center gap-2 text-xs font-medium text-[#5F5F5F] dark:text-[#ECEAE4]/65 hover:text-[#2B2B2B] dark:hover:text-[#ECEAE4] transition-colors animated-underline"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <Mail size={14} aria-hidden="true" />
            {siteConfig.email}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue with subtle bob animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#5F5F5F]/40 dark:text-[#ECEAE4]/30"
        aria-hidden="true"
      >
        <span
          className="text-[0.6rem] tracking-[0.22em] uppercase font-medium"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          scroll
        </span>
        <motion.div
          animate={shouldReduce ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="1" height="32" viewBox="0 0 1 32" fill="none">
            <line
              x1="0.5"
              y1="0"
              x2="0.5"
              y2="32"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="3 3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
