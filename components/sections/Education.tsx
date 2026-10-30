import FadeUp from '@/components/FadeUp'
import { education } from '@/data/content'

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 max-w-5xl mx-auto"
      aria-labelledby="education-heading"
    >
      <div className="hairline mb-16" />

      <FadeUp>
        <h2 id="education-heading" className="section-heading mb-12">
          Education
        </h2>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-20 mb-14">
          {/* Left: institution */}
          <div className="flex-1">
            <h3
              className="text-2xl font-semibold text-[#2B2B2B] dark:text-[#ECEAE4] mb-1"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {education.degree}
            </h3>
            <p
              className="text-base font-medium mb-1"
              style={{ fontFamily: 'var(--font-sans)', color: '#2F5D50' }}
            >
              {education.university}
            </p>
            <p
              className="text-sm text-[#5F5F5F] dark:text-[#ECEAE4]/55"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {education.location}
            </p>
          </div>

          {/* Right: meta */}
          <dl className="shrink-0 space-y-3 md:text-right">
            <div>
              <dt
                className="text-[0.68rem] text-[#5F5F5F] dark:text-[#ECEAE4]/45"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                CGPA
              </dt>
              <dd
                className="text-sm font-semibold text-[#2B2B2B] dark:text-[#ECEAE4]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {education.cgpa}
              </dd>
            </div>
            <div>
              <dt
                className="text-[0.68rem] text-[#5F5F5F] dark:text-[#ECEAE4]/45"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Expected Graduation
              </dt>
              <dd
                className="text-sm font-semibold text-[#2B2B2B] dark:text-[#ECEAE4]"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {education.graduation}
              </dd>
            </div>
            <div>
              <dt
                className="text-[0.68rem] text-[#5F5F5F] dark:text-[#ECEAE4]/45"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Accreditation
              </dt>
              <dd
                className="text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/55"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {education.accreditation}
              </dd>
            </div>
          </dl>
        </div>
      </FadeUp>

      <FadeUp delay={0.15}>
        <div>
          <h4
            className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-[#5F5F5F] dark:text-[#ECEAE4]/45 mb-5"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Relevant Coursework
          </h4>
          <div className="flex flex-wrap gap-2">
            {education.coursework.map(course => (
              <span
                key={course}
                className="text-xs px-3 py-1.5 border border-[#B7C4BD] dark:border-[#B7C4BD]/25 rounded-sm text-[#2B2B2B]/72 dark:text-[#ECEAE4]/62 hover:border-[#2F5D5050] dark:hover:border-[#3D7A6850] transition-colors"
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

