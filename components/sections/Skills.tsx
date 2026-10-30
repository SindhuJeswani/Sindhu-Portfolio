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
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[1.5px] bg-[#2F5D50] dark:bg-[#3D7A68]" />
          <span className="text-xs uppercase tracking-widest font-semibold text-[#2F5D50] dark:text-[#3D7A68]">
            Capabilities
          </span>
        </div>
        <h2 id="skills-heading" className="section-heading mb-12">
          Technical Skills
        </h2>
      </FadeUp>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((group, i) => (
          <FadeUp key={group.category} delay={i * 0.06}>
            <div className="h-full p-6 rounded-lg bg-white dark:bg-white/5 border border-[#B7C4BD]/60 dark:border-[#B7C4BD]/20 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#2F5D50] dark:hover:border-[#3D7A68] hover:shadow-[0_8px_24px_rgba(47,93,80,0.06)] transition-all duration-300">
              <div className="flex items-center justify-between border-b border-[#B7C4BD]/30 dark:border-[#B7C4BD]/15 pb-3 mb-4">
                <h3
                  className="text-xs font-bold tracking-widest uppercase text-[#2F5D50] dark:text-[#3D7A68]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {group.category}
                </h3>
                <span className="text-[0.65rem] font-mono text-[#5F5F5F] dark:text-[#ECEAE4]/40 font-semibold">
                  0{i + 1}
                </span>
              </div>

              <ul className="space-y-2.5 list-none m-0 p-0">
                {group.items.map(item => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm font-medium text-[#2B2B2B]/85 dark:text-[#ECEAE4]/80"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#2F5D50] dark:bg-[#3D7A68]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
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
