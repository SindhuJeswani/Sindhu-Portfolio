'use client'

import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'
import { Moon, Sun } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
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
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = scrolled
    ? 'bg-[#FAF8F4]/90 dark:bg-[#161816]/90 backdrop-blur-sm border-b border-[#B7C4BD] dark:border-[#B7C4BD]/20 py-3'
    : 'py-6'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <nav
        className="max-w-5xl mx-auto px-6 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo / monogram */}
        <a
          href="#hero"
          className="font-serif text-xl font-semibold text-[#2B2B2B] dark:text-[#ECEAE4] tracking-tight animated-underline"
          aria-label="Sindhu Jeswani — back to top"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          SJ
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#5F5F5F] dark:text-[#ECEAE4]/70 hover:text-[#2B2B2B] dark:hover:text-[#ECEAE4] transition-colors duration-200 animated-underline"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            className="p-2 rounded-sm text-[#5F5F5F] dark:text-[#ECEAE4]/70 hover:text-[#2B2B2B] dark:hover:text-[#ECEAE4] transition-colors"
          >
            {theme === 'light' ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
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
          className="md:hidden border-t border-[#B7C4BD] dark:border-[#B7C4BD]/20 bg-[#FAF8F4] dark:bg-[#161816] px-6 py-5"
        >
          <ul className="flex flex-col gap-5 list-none m-0 p-0">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[#2B2B2B] dark:text-[#ECEAE4] hover:text-[#2F5D50] dark:hover:text-[#3D7A68] transition-colors"
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

