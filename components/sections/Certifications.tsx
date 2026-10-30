import FadeUp from '@/components/FadeUp'
import { certifications } from '@/data/content'
import { Award, ArrowUpRight, CheckCircle2 } from 'lucide-react'

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

      <div className="grid sm:grid-cols-2 gap-5">
        {certifications.map((cert, i) => {
          const CardContent = (
            <div className="h-full flex items-start justify-between gap-4 bg-white dark:bg-white/5 border border-[#B7C4BD]/60 dark:border-[#B7C4BD]/20 rounded-lg p-5 hover:-translate-y-1.5 hover:border-[#2F5D50] dark:hover:border-[#3D7A68] hover:shadow-[0_8px_24px_rgba(47,93,80,0.08)] transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#2F5D50]/10 dark:bg-[#3D7A68]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                  <Award
                    size={18}
                    className="text-[#2F5D50] dark:text-[#3D7A68]"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p
                      className="text-sm font-semibold text-[#2B2B2B] dark:text-[#ECEAE4] leading-snug group-hover:text-[#2F5D50] dark:group-hover:text-[#3D7A68] transition-colors"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {cert.name}
                    </p>
                    {'date' in cert && (
                      <span className="text-[0.68rem] font-mono px-2 py-0.5 rounded bg-[#2F5D50]/8 text-[#2F5D50] dark:text-[#ECEAE4]/80 font-medium border border-[#2F5D50]/15">
                        {cert.date}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/60 font-medium"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {cert.issuer}
                  </p>
                  {'url' in cert && (
                    <span className="inline-flex items-center gap-1 text-[0.72rem] font-semibold text-[#2F5D50] dark:text-[#3D7A68] mt-2 group-hover:underline">
                      <CheckCircle2 size={12} />
                      <span>Verify on Coursera</span>
                      <ArrowUpRight size={11} />
                    </span>
                  )}
                </div>
              </div>

              {'url' in cert && (
                <span className="text-[#5F5F5F]/40 group-hover:text-[#2F5D50] dark:group-hover:text-[#3D7A68] transition-colors shrink-0 pt-0.5">
                  <ArrowUpRight size={16} />
                </span>
              )}
            </div>
          )

          return (
            <FadeUp key={cert.name} delay={i * 0.08}>
              {'url' in cert && cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full focus:outline-none focus:ring-2 focus:ring-[#2F5D50] rounded-lg"
                  aria-label={`Verify ${cert.name} certification on Coursera`}
                >
                  {CardContent}
                </a>
              ) : (
                CardContent
              )}
            </FadeUp>
          )
        })}
      </div>
    </section>
  )
}
