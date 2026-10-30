import FadeUp from '@/components/FadeUp'
import { projects } from '@/data/content'
import { ExternalLink, ArrowUpRight, Code, BarChart2, Server } from 'lucide-react'
import { GithubIcon } from '@/components/GithubIcon'

// ── Typographic/code mock previews per project type ────────
function ProjectPreview({ type }: { type: string }) {
  if (type === 'api') {
    return (
      <div className="w-full" aria-hidden="true">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#B7C4BD]/30">
          <div className="flex items-center gap-1.5">
            <Server size={11} className="text-[#2F5D50]" />
            <span className="text-[0.65rem] font-mono text-[#5F5F5F] font-semibold">FastAPI · v1.4.0</span>
          </div>
          <span className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded bg-[#2F5D50]/10 text-[#2F5D50] font-semibold">
            200 OK
          </span>
        </div>
        <div className="font-mono text-[10.5px] leading-[1.65] text-[#2B2B2B]/90 dark:text-[#ECEAE4]/85">
          <div>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">POST</span>{' '}
            <span className="text-[#5F5F5F]">/api/auth/jwt/login</span>
          </div>
          <div>
            <span className="text-sky-700 dark:text-sky-400 font-bold">GET{' '}</span>{' '}
            <span className="text-[#5F5F5F]">/api/expenses?page=1</span>
          </div>
          <div>
            <span className="text-sky-700 dark:text-sky-400 font-bold">GET{' '}</span>{' '}
            <span className="text-[#5F5F5F]">/api/reports/monthly</span>
          </div>
        </div>
      </div>
    )
  }
  if (type === 'data') {
    return (
      <div className="w-full" aria-hidden="true">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#B7C4BD]/30">
          <div className="flex items-center gap-1.5">
            <BarChart2 size={11} className="text-[#2F5D50]" />
            <span className="text-[0.65rem] font-mono text-[#5F5F5F] font-semibold">Streamlit · Plotly</span>
          </div>
          <span className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded bg-[#2F5D50]/10 text-[#2F5D50] font-semibold">
            10k+ rows
          </span>
        </div>
        <div className="flex items-end gap-1.5 h-12 w-full pt-1">
          {[45, 75, 38, 92, 60, 50, 85, 68, 96, 74, 52, 80].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm transition-all duration-300 group-hover:brightness-110"
              style={{
                height: `${h}%`,
                background: i % 2 === 0 ? '#2F5D50' : 'rgba(47,93,80,0.4)',
              }}
            />
          ))}
        </div>
      </div>
    )
  }
  // web / ASP.NET
  return (
    <div className="w-full" aria-hidden="true">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#B7C4BD]/30">
        <div className="flex items-center gap-1.5">
          <Code size={11} className="text-[#2F5D50]" />
          <span className="text-[0.65rem] font-mono text-[#5F5F5F] font-semibold">ASP.NET Razor MVC</span>
        </div>
        <span className="text-[0.6rem] font-mono px-1.5 py-0.5 rounded bg-[#2F5D50]/10 text-[#2F5D50] font-semibold">
          C#
        </span>
      </div>
      <div className="font-mono text-[10.5px] leading-[1.65] text-[#2B2B2B]/90 dark:text-[#ECEAE4]/85">
        <div className="text-[#2F5D50] dark:text-[#3D7A68] font-bold">public IActionResult Index()</div>
        <div className="pl-3 text-[#5F5F5F]">{'{ return View(events); }'}</div>
        <div className="text-amber-800 dark:text-amber-400 font-semibold">[HttpPost] ValidateAntiForgeryToken</div>
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
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-[1.5px] bg-[#2F5D50] dark:bg-[#3D7A68]" />
          <span className="text-xs uppercase tracking-widest font-semibold text-[#2F5D50] dark:text-[#3D7A68]">
            Portfolio
          </span>
        </div>
        <h2 id="projects-heading" className="section-heading mb-12">
          Other Projects
        </h2>
      </FadeUp>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <FadeUp key={project.title} delay={i * 0.08}>
            <article className="group flex flex-col h-full bg-white dark:bg-[#161816] border border-[#B7C4BD]/60 dark:border-[#B7C4BD]/20 rounded-lg hover:border-[#2F5D50] dark:hover:border-[#3D7A68] hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(47,93,80,0.08)] transition-all duration-300 overflow-hidden">
              {/* Code/visual preview header */}
              <div className="bg-[#FAF8F4] dark:bg-white/[0.02] border-b border-[#B7C4BD]/40 dark:border-[#B7C4BD]/20 p-5 min-h-[96px] flex items-center">
                <ProjectPreview type={project.type} />
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="text-lg font-semibold text-[#2B2B2B] dark:text-[#ECEAE4] mb-3 leading-snug group-hover:text-[#2F5D50] dark:group-hover:text-[#3D7A68] transition-colors"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm text-[#5F5F5F] dark:text-[#ECEAE4]/70 leading-relaxed mb-6 flex-1"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {project.description}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map(s => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 rounded bg-[#2F5D50]/8 text-[#2F5D50] dark:bg-[#3D7A68]/15 dark:text-[#3D7A68] border border-[#2F5D50]/15 dark:border-[#3D7A68]/20 text-[0.68rem] font-semibold"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Action links */}
                <div className="flex items-center gap-3 pt-3 border-t border-[#B7C4BD]/30 dark:border-[#B7C4BD]/15">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source on GitHub`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#FAF8F4] dark:bg-white/5 border border-[#B7C4BD]/60 dark:border-[#B7C4BD]/20 text-xs font-semibold text-[#2B2B2B] dark:text-[#ECEAE4] hover:border-[#2F5D50] hover:text-[#2F5D50] transition-colors"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      <GithubIcon size={12} aria-hidden="true" />
                      <span>View GitHub</span>
                      <ArrowUpRight size={11} className="opacity-60" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#2F5D50] text-[#FAF8F4] text-xs font-semibold hover:opacity-90 transition-opacity"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      <ExternalLink size={12} aria-hidden="true" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <span
                      className="text-xs text-[#5F5F5F]/60 dark:text-[#ECEAE4]/30 italic font-medium"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      Private academic repository
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
