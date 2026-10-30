import FadeUp from '@/components/FadeUp'
import { aboutParagraphs, facts } from '@/data/content'

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-5xl mx-auto"
      aria-labelledby="about-heading"
    >
      <div className="hairline mb-16" />
      <FadeUp>
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          {/* Left: text content */}
          <div className="flex-1 max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#2F5D50] dark:bg-[#3D7A68]" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#2F5D50] dark:text-[#3D7A68]">
                Background
              </span>
            </div>
            <h2
              id="about-heading"
              className="section-heading mb-8"
            >
              About Me
            </h2>
            <div className="space-y-6">
              {aboutParagraphs.map((para, i) => (
                <p
                  key={i}
                  className={`text-[0.96rem] leading-[1.85] text-[#2B2B2B]/85 dark:text-[#ECEAE4]/80 ${
                    i === 0 ? 'first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-[#2F5D50] dark:first-letter:text-[#3D7A68] first-letter:mr-2 first-letter:float-left' : ''
                  }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right: facts card */}
          <aside
            className="w-full md:w-72 shrink-0 p-6 rounded-lg bg-white dark:bg-white/5 border border-[#B7C4BD]/60 dark:border-[#B7C4BD]/20 shadow-[0_4px_24px_rgba(47,93,80,0.04)]"
            aria-label="Quick facts"
          >
            <div className="flex items-center justify-between border-b border-[#B7C4BD]/40 dark:border-[#B7C4BD]/20 pb-3 mb-5">
              <h3
                className="text-xs font-bold tracking-widest uppercase text-[#2F5D50] dark:text-[#3D7A68]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Quick Facts
              </h3>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2F5D50] dark:bg-[#3D7A68]" />
            </div>

            <dl className="space-y-4">
              {facts.map(fact => (
                <div
                  key={fact.label}
                  className="border-b border-[#B7C4BD]/30 dark:border-[#B7C4BD]/10 pb-3.5 last:border-b-0 last:pb-0"
                >
                  <dt
                    className="text-[0.68rem] uppercase tracking-wider font-semibold text-[#5F5F5F] dark:text-[#ECEAE4]/50 mb-1"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {fact.label}
                  </dt>
                  <dd
                    className="text-sm font-semibold text-[#2B2B2B] dark:text-[#ECEAE4] leading-snug"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </FadeUp>
    </section>
  )
}
