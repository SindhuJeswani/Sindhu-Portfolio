import FadeUp from '@/components/FadeUp'
import { projects } from '@/data/content'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/GithubIcon'

// ── Typographic/code mock previews per project type ────────
function ProjectPreview({ type }: { type: string }) {
  if (type === 'api') {
    return (
      <div
        className="font-mono text-[10px] leading-[1.7] overflow-hidden"
        style={{ color: '#2F5D5099' }}
        aria-hidden="true"
      >
        <div>
          <span style={{ color: '#B7C4BD' }}>POST</span>{'  '}/api/expenses
        </div>
        <div>
          <span style={{ color: '#B7C4BD' }}>GET{'   '}</span>/api/expenses?page=1
        </div>
        <div>
          <span style={{ color: '#B7C4BD' }}>GET{'   '}</span>/api/reports/monthly
        </div>
        <div>
          <span style={{ color: '#B7C4BD' }}>DELETE</span> /api/expenses/:id
        </div>
        <div className="mt-2" style={{ color: '#B7C4BD80' }}>
          # 15+ endpoints · JWT · Docker
        </div>
      </div>
    )
  }
  if (type === 'data') {
    return (
      <div className="flex items-end gap-1 h-14 w-full" aria-hidden="true">
        {[58, 78, 44, 92, 68, 54, 84, 62, 88, 72, 50, 76].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${h}%`,
              background: `rgba(47,93,80,${0.18 + (i % 3) * 0.08})`,
            }}
          />
        ))}
      </div>
    )
  }
  // web / ASP.NET
  return (
    <div
      className="font-mono text-[10px] leading-[1.7] overflow-hidden"
      style={{ color: '#5F5F5F88' }}
      aria-hidden="true"
    >
      <div style={{ color: '#2F5D5099' }}>EventsController.cs</div>
      <div>public IActionResult Index()</div>
      <div className="pl-4">{'{ return View(events); }'}</div>
      <div>public IActionResult Create()</div>
      <div className="pl-4" style={{ color: '#B7C4BD80' }}>
        {'// CRUD · Razor Views · Validation'}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-5xl mx-auto"
      aria-labelledby="projects-heading"
    >
      <div className="hairline mb-16" />

      <FadeUp>
        <h2 id="projects-heading" className="section-heading mb-12">
          Other Projects
        </h2>
      </FadeUp>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <FadeUp key={project.title} delay={i * 0.09}>
            <article className="group flex flex-col h-full border border-[#B7C4BD] dark:border-[#B7C4BD]/20 rounded-sm hover:border-[#2F5D50] dark:hover:border-[#3D7A68] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#2F5D50]/5 dark:hover:shadow-[#3D7A68]/10 transition-all duration-300 overflow-hidden bg-[#FAF8F4] dark:bg-[#161816]">
              {/* Code/visual preview */}
              <div
                className="border-b border-[#B7C4BD] dark:border-[#B7C4BD]/20 px-5 py-5 min-h-[88px] flex items-center"
                style={{ background: 'rgba(47,93,80,0.04)' }}
              >
                <ProjectPreview type={project.type} />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="text-lg font-semibold text-[#2B2B2B] dark:text-[#ECEAE4] mb-3 leading-snug"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm text-[#5F5F5F] dark:text-[#ECEAE4]/62 leading-relaxed mb-5 flex-1"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {project.description}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map(s => (
                    <span
                      key={s}
                      className="tag"
                      style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source on GitHub`}
                      className="flex items-center gap-1.5 text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/55 hover:text-[#2B2B2B] dark:hover:text-[#ECEAE4] transition-colors animated-underline"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      <GithubIcon size={12} aria-hidden="true" />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      className="flex items-center gap-1.5 text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/55 hover:text-[#2B2B2B] dark:hover:text-[#ECEAE4] transition-colors animated-underline"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      <ExternalLink size={12} aria-hidden="true" />
                      Demo
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <span
                      className="text-xs text-[#5F5F5F]/50 dark:text-[#ECEAE4]/28 italic"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      Source not public
                    </span>
                  )}
                </div>
              </div>
            </article>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
