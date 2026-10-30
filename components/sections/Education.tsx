import FadeUp from '@/components/FadeUp'
import { education } from '@/data/content'
import { GraduationCap, BookOpen } from 'lucide-react'

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 max-w-5xl mx-auto"
      aria-labelledby="education-heading"
    >
      <div className="hairline mb-16" />

      <FadeUp>
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[1.5px] bg-[#2F5D50] dark:bg-[#3D7A68]" />
          <span className="text-xs uppercase tracking-widest font-semibold text-[#2F5D50] dark:text-[#3D7A68]">
            Academics
          </span>
        </div>
        <h2 id="education-heading" className="section-heading mb-12">
          Education &amp; Coursework
        </h2>
      </FadeUp>

      {/* Main degree card */}
      <FadeUp delay={0.1}>
        <div className="bg-white dark:bg-white/5 border border-[#B7C4BD]/60 dark:border-[#B7C4BD]/20 rounded-xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(47,93,80,0.04)] mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#2F5D50]/10 dark:bg-[#3D7A68]/20 flex items-center justify-center shrink-0">
              <GraduationCap size={24} className="text-[#2F5D50] dark:text-[#3D7A68]" />
            </div>
            <div>
              <h3
                className="text-2xl font-bold text-[#2B2B2B] dark:text-[#ECEAE4] mb-1 leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {education.degree}
              </h3>
              <p
                className="text-base font-semibold text-[#2F5D50] dark:text-[#3D7A68] mb-1"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {education.university}
              </p>
              <p className="text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/60">
                {education.location} · {education.accreditation}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-[#B7C4BD]/40 md:pl-8">
            <div className="px-4 py-2.5 rounded-lg bg-[#FAF8F4] dark:bg-white/5 border border-[#B7C4BD]/40 text-center">
              <span className="block text-[0.68rem] font-bold uppercase tracking-wider text-[#5F5F5F] dark:text-[#ECEAE4]/50 mb-0.5">
                CGPA
              </span>
              <span className="text-base font-extrabold text-[#2F5D50] dark:text-[#3D7A68]">
                {education.cgpa}
              </span>
            </div>

            <div className="px-4 py-2.5 rounded-lg bg-[#FAF8F4] dark:bg-white/5 border border-[#B7C4BD]/40 text-center">
              <span className="block text-[0.68rem] font-bold uppercase tracking-wider text-[#5F5F5F] dark:text-[#ECEAE4]/50 mb-0.5">
                Graduation
              </span>
              <span className="text-base font-extrabold text-[#2B2B2B] dark:text-[#ECEAE4]">
                {education.graduation}
              </span>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Coursework list */}
      <FadeUp delay={0.15}>
        <div>
          <h4
            className="text-xs font-bold tracking-widest uppercase text-[#5F5F5F] dark:text-[#ECEAE4]/60 mb-5 flex items-center gap-2"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <BookOpen size={14} className="text-[#2F5D50]" />
            Relevant University Coursework
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {education.coursework.map(course => (
              <span
                key={course}
                className="px-3.5 py-1.5 rounded-md bg-white dark:bg-white/5 border border-[#B7C4BD]/60 dark:border-[#B7C4BD]/20 text-xs font-semibold text-[#2B2B2B]/85 dark:text-[#ECEAE4]/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#2F5D50] hover:text-[#2F5D50] dark:hover:border-[#3D7A68] dark:hover:text-[#3D7A68] hover:-translate-y-0.5 transition-all duration-200"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
