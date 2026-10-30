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
        <div className="flex flex-col md:flex-row gap-14 md:gap-20">
          {/* Left: text content */}
          <div className="flex-1 max-w-xl">
            <h2
              id="about-heading"
              className="section-heading mb-8"
            >
              About
            </h2>
            <div className="space-y-5">
              {aboutParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-[0.95rem] leading-[1.85] text-[#2B2B2B]/80 dark:text-[#ECEAE4]/72"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right: facts */}
          <aside
            className="shrink-0 md:w-56"
            aria-label="Quick facts"
          >
            <h3
              className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-[#5F5F5F] dark:text-[#ECEAE4]/45 mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Quick Facts
            </h3>
            <dl className="space-y-4">
              {facts.map(fact => (
                <div
                  key={fact.label}
                  className="border-b border-[#B7C4BD] dark:border-[#B7C4BD]/20 pb-4"
                >
                  <dt
                    className="text-[0.7rem] text-[#5F5F5F] dark:text-[#ECEAE4]/45 mb-0.5"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {fact.label}
                  </dt>
                  <dd
                    className="text-sm font-medium text-[#2B2B2B] dark:text-[#ECEAE4] leading-snug"
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

