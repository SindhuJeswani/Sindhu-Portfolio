import FadeUp from '@/components/FadeUp'
import { certifications } from '@/data/content'
import { Award } from 'lucide-react'

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 px-6 max-w-5xl mx-auto"
      aria-labelledby="certs-heading"
    >
      <div className="hairline mb-16" />

      <FadeUp>
        <h2 id="certs-heading" className="section-heading mb-12">
          Certifications &amp; Recognition
        </h2>
      </FadeUp>

      <div className="flex flex-wrap gap-4">
        {certifications.map((cert, i) => (
          <FadeUp key={cert.name} delay={i * 0.09}>
            <div className="flex items-center gap-3 border border-[#B7C4BD] dark:border-[#B7C4BD]/20 rounded-sm px-5 py-4 hover:border-[#2F5D5060] dark:hover:border-[#3D7A6860] transition-colors">
              <Award
                size={15}
                style={{ color: '#2F5D50', flexShrink: 0 }}
                aria-hidden="true"
              />
              <div>
                <p
                  className="text-sm font-medium text-[#2B2B2B] dark:text-[#ECEAE4]"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {cert.name}
                </p>
                <p
                  className="text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/45"
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
