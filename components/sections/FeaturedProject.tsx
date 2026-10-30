import FadeUp from '@/components/FadeUp'
import { featuredProject } from '@/data/content'

// ── Architecture diagram (inline SVG, hard-coded colors for SVG compat) ──
function ArchitectureDiagram() {
  const BOX_FILL = '#2F5D5014'          // accent/8
  const BOX_STROKE = '#2F5D5055'        // accent/33
  const BOX_LABEL = '#2F5D50'
  const BOX_SUB = '#5F5F5F'
  const SERVICE_FILL = '#2F5D500A'
  const SERVICE_STROKE = '#B7C4BD66'
  const SERVICE_LABEL = '#5F5F5F'
  const SERVICE_SUB = '#9BA9A5'
  const ARROW = '#B7C4BD'

  return (
    <figure aria-label="MeethaCart system architecture" className="my-6 overflow-x-auto">
      <svg
        viewBox="0 0 760 230"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-3xl mx-auto"
        role="img"
        aria-describedby="arch-desc"
        style={{ minWidth: 440 }}
      >
        <desc id="arch-desc">
          React Frontend connects to Node/Express API. The API connects to
          MongoDB, a Translation Service (NLP, EN↔UR), a Forecasting Service
          (Python/scikit-learn), and a Socket.IO real-time chat server.
        </desc>

        {/* ── React Frontend ── */}
        <rect x="16" y="82" width="128" height="62" rx="3" fill={BOX_FILL} stroke={BOX_STROKE} strokeWidth="1" />
        <text x="80" y="108" textAnchor="middle" fill={BOX_LABEL} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">React</text>
        <text x="80" y="124" textAnchor="middle" fill={BOX_SUB} fontSize="9" fontFamily="system-ui,sans-serif">Frontend</text>

        {/* Arrow: Frontend → API */}
        <line x1="144" y1="113" x2="198" y2="113" stroke={ARROW} strokeWidth="1" strokeDasharray="4 2.5" />
        <polygon points="198,109 207,113 198,117" fill={ARROW} />

        {/* ── Node/Express API (center) ── */}
        <rect x="207" y="68" width="148" height="90" rx="3" fill={BOX_FILL} stroke={BOX_STROKE} strokeWidth="1" />
        <text x="281" y="98" textAnchor="middle" fill={BOX_LABEL} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">Node / Express</text>
        <text x="281" y="114" textAnchor="middle" fill={BOX_SUB} fontSize="9" fontFamily="system-ui,sans-serif">REST API · JWT Auth</text>
        <text x="281" y="129" textAnchor="middle" fill={BOX_SUB} fontSize="9" fontFamily="system-ui,sans-serif">Bid Engine · Routing</text>
        <text x="281" y="144" textAnchor="middle" fill={BOX_SUB} fontSize="9" fontFamily="system-ui,sans-serif">Role-based Access</text>

        {/* Arrow: API → MongoDB */}
        <line x1="355" y1="113" x2="409" y2="113" stroke={ARROW} strokeWidth="1" strokeDasharray="4 2.5" />
        <polygon points="409,109 418,113 409,117" fill={ARROW} />

        {/* ── MongoDB ── */}
        <rect x="418" y="82" width="118" height="62" rx="3" fill={BOX_FILL} stroke={BOX_STROKE} strokeWidth="1" />
        <text x="477" y="108" textAnchor="middle" fill={BOX_LABEL} fontSize="11" fontFamily="system-ui,sans-serif" fontWeight="600">MongoDB</text>
        <text x="477" y="124" textAnchor="middle" fill={BOX_SUB} fontSize="9" fontFamily="system-ui,sans-serif">Database</text>

        {/* Arrow: API ↑ Translation */}
        <line x1="281" y1="68" x2="281" y2="28" stroke={ARROW} strokeWidth="1" strokeDasharray="4 2.5" />
        <polygon points="277,28 281,19 285,28" fill={ARROW} />

        {/* ── Translation Service ── */}
        <rect x="190" y="2" width="182" height="46" rx="3" fill={SERVICE_FILL} stroke={SERVICE_STROKE} strokeWidth="1" />
        <text x="281" y="22" textAnchor="middle" fill={SERVICE_LABEL} fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">Translation Service</text>
        <text x="281" y="38" textAnchor="middle" fill={SERVICE_SUB} fontSize="8.5" fontFamily="system-ui,sans-serif">Open-source NLP · EN ↔ UR</text>

        {/* Arrow: API ↓ Forecasting */}
        <line x1="281" y1="158" x2="281" y2="198" stroke={ARROW} strokeWidth="1" strokeDasharray="4 2.5" />
        <polygon points="277,198 281,207 285,198" fill={ARROW} />

        {/* ── Forecasting Service ── */}
        <rect x="178" y="182" width="206" height="46" rx="3" fill={SERVICE_FILL} stroke={SERVICE_STROKE} strokeWidth="1" />
        <text x="281" y="202" textAnchor="middle" fill={SERVICE_LABEL} fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">Forecasting Service</text>
        <text x="281" y="218" textAnchor="middle" fill={SERVICE_SUB} fontSize="8.5" fontFamily="system-ui,sans-serif">Python · scikit-learn · Random Forest</text>

        {/* Arrow: API → Socket.IO */}
        <line x1="536" y1="113" x2="578" y2="113" stroke={ARROW} strokeWidth="1" strokeDasharray="4 2.5" />
        <polygon points="578,109 587,113 578,117" fill={ARROW} />

        {/* ── Socket.IO ── */}
        <rect x="587" y="82" width="150" height="62" rx="3" fill={SERVICE_FILL} stroke={SERVICE_STROKE} strokeWidth="1" />
        <text x="662" y="108" textAnchor="middle" fill={SERVICE_LABEL} fontSize="10" fontFamily="system-ui,sans-serif" fontWeight="600">Socket.IO</text>
        <text x="662" y="124" textAnchor="middle" fill={SERVICE_SUB} fontSize="9" fontFamily="system-ui,sans-serif">Real-time Chat</text>
      </svg>
      <figcaption
        className="text-center text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/45 mt-3"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        MeethaCart — system architecture overview
      </figcaption>
    </figure>
  )
}

export default function FeaturedProject() {
  return (
    <section
      id="featured"
      className="py-24 px-6 max-w-5xl mx-auto"
      aria-labelledby="featured-heading"
    >
      <div className="hairline mb-16" />

      <FadeUp>
        {/* Header row */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span
            className="text-[0.68rem] font-semibold tracking-[0.16em] uppercase text-[#2F5D50] dark:text-[#3D7A68]"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Featured Project
          </span>
          <span className="tag">{featuredProject.badge}</span>
          <span
            className="text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/45"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {featuredProject.period}
          </span>
        </div>

        <h2
          id="featured-heading"
          className="section-heading mb-2"
        >
          {featuredProject.title}
        </h2>
        <p
          className="text-xl md:text-2xl text-[#5F5F5F] dark:text-[#ECEAE4]/55 italic mb-2"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {featuredProject.subtitle}
        </p>
        <p
          className="text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/40 mb-10"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {featuredProject.team}
        </p>
      </FadeUp>

      {/* Case study card */}
      <div className="border border-[#B7C4BD] dark:border-[#B7C4BD]/20 rounded-sm overflow-hidden">
        {/* Architecture visual */}
        <div
          className="border-b border-[#B7C4BD] dark:border-[#B7C4BD]/20 px-6 py-10"
          style={{ background: 'rgba(47,93,80,0.04)' }}
        >
          <ArchitectureDiagram />
        </div>

        <div className="p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Problem */}
            <FadeUp>
              <div>
                <h3 className="label-heading">Problem</h3>
                <p className="body-sm">{featuredProject.problem}</p>
              </div>
            </FadeUp>

            {/* Solution */}
            <FadeUp delay={0.08}>
              <div>
                <h3 className="label-heading">Solution</h3>
                <p className="body-sm">{featuredProject.solution}</p>
              </div>
            </FadeUp>

            {/* Key Features */}
            <FadeUp>
              <div className="md:col-span-2">
                <h3 className="label-heading">Key Features</h3>
                <ul className="grid sm:grid-cols-2 gap-2.5 list-none m-0 p-0">
                  {featuredProject.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-[#2B2B2B]/78 dark:text-[#ECEAE4]/72"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      <span
                        className="shrink-0 mt-0.5 font-medium"
                        style={{ color: '#2F5D50' }}
                        aria-hidden="true"
                      >
                        —
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Stack */}
            <FadeUp>
              <div>
                <h3 className="label-heading">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.stack.map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Role + Status */}
            <FadeUp delay={0.08}>
              <div>
                <h3 className="label-heading">My Role</h3>
                <p className="body-sm mb-5">{featuredProject.myRole}</p>
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-55"
                      style={{ backgroundColor: '#D97706' }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-2 w-2"
                      style={{ backgroundColor: '#D97706' }}
                    />
                  </span>
                  <span
                    className="text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/55"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {featuredProject.status}
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      <style>{`
        .label-heading {
          font-family: var(--font-sans);
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #5F5F5F;
          margin-bottom: 1rem;
        }
        html.dark .label-heading { color: rgba(236,234,228,0.45); }
        .body-sm {
          font-family: var(--font-sans);
          font-size: 0.875rem;
          line-height: 1.75;
          color: rgba(43,43,43,0.78);
        }
        html.dark .body-sm { color: rgba(236,234,228,0.72); }
      `}</style>
    </section>
  )
}
