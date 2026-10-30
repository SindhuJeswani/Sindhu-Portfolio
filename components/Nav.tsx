'use client'

import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'
import { Moon, Sun } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#featured', label: 'Case Study' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F4]/85 dark:bg-[#161816]/85 backdrop-blur-md border-b border-[#B7C4BD]/50 dark:border-[#B7C4BD]/20 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'py-6'
      }`}
    >
      <nav
        className="max-w-5xl mx-auto px-6 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Monogram logo stamp */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5"
          aria-label="Sindhu Jeswani — back to top"
        >
          <span className="w-8 h-8 rounded-sm bg-[#2F5D50] text-[#FAF8F4] dark:bg-[#3D7A68] dark:text-[#161816] flex items-center justify-center font-serif text-sm font-bold tracking-wider shadow-sm group-hover:scale-105 transition-transform">
            SJ
          </span>
          <span
            className="font-serif text-base font-semibold text-[#2B2B2B] dark:text-[#ECEAE4] tracking-tight hidden sm:inline"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Sindhu Jeswani
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs uppercase tracking-wider font-semibold text-[#2B2B2B]/85 dark:text-[#ECEAE4]/80 hover:text-[#2F5D50] dark:hover:text-[#3D7A68] transition-colors duration-200 animated-underline"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className="w-8 h-8 rounded-full border border-[#B7C4BD]/60 dark:border-[#B7C4BD]/20 bg-white/70 dark:bg-white/5 flex items-center justify-center text-[#5F5F5F] dark:text-[#ECEAE4]/75 hover:border-[#2F5D50] dark:hover:border-[#3D7A68] hover:text-[#2F5D50] dark:hover:text-[#ECEAE4] shadow-sm transition-all"
          >
            {theme === 'light' ? <Moon size={14} aria-hidden="true" /> : <Sun size={14} aria-hidden="true" />}
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#5F5F5F] dark:text-[#ECEAE4]/70 hover:text-[#2B2B2B] dark:hover:text-[#ECEAE4]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
              {menuOpen ? (
                <>
                  <line x1="1" y1="1" x2="19" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="19" y1="1" x2="1" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="0" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="0" y1="13" x2="20" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[#B7C4BD]/40 dark:border-[#B7C4BD]/20 bg-[#FAF8F4]/98 dark:bg-[#161816]/98 backdrop-blur-lg px-6 py-5 shadow-lg"
        >
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[#2B2B2B] dark:text-[#ECEAE4] hover:text-[#2F5D50] dark:hover:text-[#3D7A68] transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
