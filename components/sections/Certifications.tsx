import FadeUp from '@/components/FadeUp'
import { certifications } from '@/data/content'
import { Award, CheckCircle2 } from 'lucide-react'

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 px-6 max-w-5xl mx-auto"
      aria-labelledby="certs-heading"
    >
      <div className="hairline mb-16" />

      <FadeUp>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[1.5px] bg-[#2F5D50] dark:bg-[#3D7A68]" />
          <span className="text-xs uppercase tracking-widest font-semibold text-[#2F5D50] dark:text-[#3D7A68]">
            Credentials
          </span>
        </div>
        <h2 id="certs-heading" className="section-heading mb-12">
          Certifications &amp; Competitions
        </h2>
      </FadeUp>

      <div className="grid sm:grid-cols-3 gap-5">
        {certifications.map((cert, i) => (
          <FadeUp key={cert.name} delay={i * 0.08}>
            <div className="h-full flex items-center gap-4 bg-white dark:bg-white/5 border border-[#B7C4BD]/60 dark:border-[#B7C4BD]/20 rounded-lg p-5 hover:-translate-y-1.5 hover:border-[#2F5D50] dark:hover:border-[#3D7A68] hover:shadow-[0_8px_24px_rgba(47,93,80,0.08)] transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#2F5D50]/10 dark:bg-[#3D7A68]/20 flex items-center justify-center shrink-0">
                <Award
                  size={18}
                  className="text-[#2F5D50] dark:text-[#3D7A68]"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p
                  className="text-sm font-semibold text-[#2B2B2B] dark:text-[#ECEAE4] leading-snug"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {cert.name}
                </p>
                <p
                  className="text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/50 mt-0.5"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {cert.issuer}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
