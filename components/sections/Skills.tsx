import FadeUp from '@/components/FadeUp'
import { skills } from '@/data/content'

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 max-w-5xl mx-auto"
      aria-labelledby="skills-heading"
    >
      <div className="hairline mb-16" />

      <FadeUp>
        <h2 id="skills-heading" className="section-heading mb-12">
          Skills
        </h2>
      </FadeUp>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10">
        {skills.map((group, i) => (
          <FadeUp key={group.category} delay={i * 0.07}>
            <div>
              <h3
                className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-[#5F5F5F] dark:text-[#ECEAE4]/45 mb-4"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {group.category}
              </h3>
              <ul className="space-y-2 list-none m-0 p-0">
                {group.items.map(item => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-[#2B2B2B]/82 dark:text-[#ECEAE4]/75"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ backgroundColor: '#2F5D50' }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}

