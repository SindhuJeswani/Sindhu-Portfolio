'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { Mail, Download, ArrowDown, MapPin, Sparkles } from 'lucide-react'
import { GithubIcon } from '@/components/GithubIcon'
import { LinkedinIcon } from '@/components/LinkedinIcon'
import { siteConfig } from '@/data/content'

export default function Hero() {
  const shouldReduce = useReducedMotion()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduce ? 0 : 0.1,
        delayChildren: shouldReduce ? 0 : 0.05,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: shouldReduce ? 1 : 0, y: shouldReduce ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
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
      {/* Light-mode subtle warm ambient backdrop */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-gradient-to-b from-[#2F5D50]/6 via-[#2F5D50]/2 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-8 max-w-2xl"
      >
        {/* Availability pulse badge & location */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F5D50]/8 dark:bg-[#3D7A68]/15 border border-[#2F5D50]/20 dark:border-[#3D7A68]/30">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 bg-[#2F5D50] dark:bg-[#3D7A68]"
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2 bg-[#2F5D50] dark:bg-[#3D7A68]"
              />
            </span>
            <span
              className="text-[0.72rem] font-semibold tracking-wider uppercase text-[#2F5D50] dark:text-[#3D7A68]"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Open to Opportunities · 2027
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/60">
            <MapPin size={13} className="text-[#2F5D50]" />
            <span>Karachi, Pakistan</span>
          </div>
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
            className="mt-5 text-base md:text-lg text-[#2B2B2B]/85 dark:text-[#ECEAE4]/80 max-w-xl leading-relaxed font-normal"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {siteConfig.role}
          </p>
        </motion.div>

        {/* Short editorial quote box */}
        <motion.div
          variants={itemVariants}
          className="p-4 sm:p-5 rounded-r-md bg-white dark:bg-white/5 border border-[#B7C4BD]/60 dark:border-[#B7C4BD]/20 border-l-4 border-l-[#2F5D50] dark:border-l-[#3D7A68] shadow-sm max-w-lg"
        >
          <p
            className="text-sm md:text-[0.92rem] text-[#2B2B2B]/90 dark:text-[#ECEAE4]/85 leading-[1.8] font-normal"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Final-year CS student at SZABIST, Karachi. Building reliable backend systems, PostgreSQL schemas, and data tools — currently developing an AI-powered bilingual marketplace for my final year project.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-1">
          <motion.a
            href="#projects"
            className="btn-primary shadow-sm hover:shadow-md transition-all"
            whileHover={shouldReduce ? {} : { y: -2 }}
            whileTap={shouldReduce ? {} : { scale: 0.98 }}
          >
            View Projects
            <ArrowDown size={14} aria-hidden="true" />
          </motion.a>
          <motion.a
            href={siteConfig.cvPath}
            download
            className="btn-outline bg-white/80 dark:bg-transparent shadow-sm hover:bg-white transition-all"
            whileHover={shouldReduce ? {} : { y: -2 }}
            whileTap={shouldReduce ? {} : { scale: 0.98 }}
          >
            <Download size={14} aria-hidden="true" />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social chips with high-contrast pills */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/5 border border-[#B7C4BD]/60 dark:border-[#B7C4BD]/20 text-xs font-medium text-[#2B2B2B] dark:text-[#ECEAE4] hover:border-[#2F5D50] hover:text-[#2F5D50] dark:hover:border-[#3D7A68] dark:hover:text-[#3D7A68] shadow-sm hover:shadow transition-all"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <LinkedinIcon size={13} aria-hidden="true" />
            LinkedIn
          </a>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub profile"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/5 border border-[#B7C4BD]/60 dark:border-[#B7C4BD]/20 text-xs font-medium text-[#2B2B2B] dark:text-[#ECEAE4] hover:border-[#2F5D50] hover:text-[#2F5D50] dark:hover:border-[#3D7A68] dark:hover:text-[#3D7A68] shadow-sm hover:shadow transition-all"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <GithubIcon size={13} aria-hidden="true" />
            GitHub
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            aria-label={`Email ${siteConfig.email}`}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/5 border border-[#B7C4BD]/60 dark:border-[#B7C4BD]/20 text-xs font-medium text-[#2B2B2B] dark:text-[#ECEAE4] hover:border-[#2F5D50] hover:text-[#2F5D50] dark:hover:border-[#3D7A68] dark:hover:text-[#3D7A68] shadow-sm hover:shadow transition-all"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <Mail size={13} aria-hidden="true" />
            {siteConfig.email}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll cue with subtle bob animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#5F5F5F]/40 dark:text-[#ECEAE4]/30"
        aria-hidden="true"
      >
        <span
          className="text-[0.6rem] tracking-[0.22em] uppercase font-semibold"
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
