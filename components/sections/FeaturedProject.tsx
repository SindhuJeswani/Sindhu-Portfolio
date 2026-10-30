import FadeUp from '@/components/FadeUp'
import { featuredProject } from '@/data/content'
import { Check, Layers, Cpu, Database, Network } from 'lucide-react'

// ── Architecture diagram (inline SVG, high-contrast crisp vector) ──
function ArchitectureDiagram() {
  return (
    <figure aria-label="MeethaCart system architecture" className="my-4 overflow-x-auto">
      <div className="flex items-center justify-between mb-3 px-2">
        <span className="text-[0.68rem] uppercase tracking-wider font-bold text-[#2F5D50] dark:text-[#3D7A68] flex items-center gap-1.5">
          <Network size={12} />
          Distributed System Flow
        </span>
        <span className="text-[0.65rem] text-[#5F5F5F] dark:text-[#ECEAE4]/50 font-mono">
          React ↔ Express ↔ MongoDB + Microservices
        </span>
      </div>

      <svg
        viewBox="0 0 760 230"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-3xl mx-auto rounded-lg"
        role="img"
        aria-describedby="arch-desc"
        style={{ minWidth: 460 }}
      >
        <desc id="arch-desc">
          React Frontend connects to Node/Express API. The API connects to
          MongoDB, an open-source NLP Translation Service, a Python/scikit-learn
          Forecasting Service, and Socket.IO for real-time chat.
        </desc>

        <defs>
          <filter id="card-shadow" x="-5%" y="-5%" width="110%" height="115%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#2F5D50" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* ── React Frontend ── */}
        <rect x="16" y="80" width="132" height="66" rx="6" fill="#FFFFFF" stroke="#2F5D50" strokeWidth="1.5" filter="url(#card-shadow)" />
        <rect x="16" y="80" width="132" height="6" rx="3" fill="#2F5D50" />
        <text x="82" y="108" textAnchor="middle" fill="#2F5D50" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700">React Frontend</text>
        <text x="82" y="125" textAnchor="middle" fill="#5F5F5F" fontSize="9.5" fontFamily="system-ui,sans-serif">Bilingual Web Client</text>
        <text x="82" y="137" textAnchor="middle" fill="#2F5D50" fontSize="8.5" fontFamily="system-ui,sans-serif" fontWeight="600">EN / UR UI</text>

        {/* Arrow: Frontend → API */}
        <line x1="148" y1="113" x2="204" y2="113" stroke="#2F5D50" strokeWidth="1.5" strokeDasharray="4 3" />
        <polygon points="204,109 213,113 204,117" fill="#2F5D50" />

        {/* ── Node/Express API (center) ── */}
        <rect x="213" y="64" width="154" height="98" rx="6" fill="#FFFFFF" stroke="#2F5D50" strokeWidth="2" filter="url(#card-shadow)" />
        <rect x="213" y="64" width="154" height="6" rx="3" fill="#2F5D50" />
        <text x="290" y="94" textAnchor="middle" fill="#2F5D50" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700">Node / Express API</text>
        <text x="290" y="111" textAnchor="middle" fill="#2B2B2B" fontSize="9.5" fontFamily="system-ui,sans-serif" fontWeight="600">JWT Authentication</text>
        <text x="290" y="127" textAnchor="middle" fill="#5F5F5F" fontSize="9" fontFamily="system-ui,sans-serif">Custom Order Bidding Engine</text>
        <text x="290" y="142" textAnchor="middle" fill="#5F5F5F" fontSize="9" fontFamily="system-ui,sans-serif">Class Scheduling &amp; Donations</text>

        {/* Arrow: API → MongoDB */}
        <line x1="367" y1="113" x2="415" y2="113" stroke="#2F5D50" strokeWidth="1.5" strokeDasharray="4 3" />
        <polygon points="415,109 424,113 415,117" fill="#2F5D50" />

        {/* ── MongoDB ── */}
        <rect x="424" y="80" width="122" height="66" rx="6" fill="#FFFFFF" stroke="#2F5D50" strokeWidth="1.5" filter="url(#card-shadow)" />
        <rect x="424" y="80" width="122" height="6" rx="3" fill="#2F5D50" />
        <text x="485" y="108" textAnchor="middle" fill="#2F5D50" fontSize="12" fontFamily="system-ui,sans-serif" fontWeight="700">MongoDB</text>
        <text x="485" y="125" textAnchor="middle" fill="#5F5F5F" fontSize="9.5" fontFamily="system-ui,sans-serif">Primary Database</text>
        <text x="485" y="137" textAnchor="middle" fill="#5F5F5F" fontSize="8.5" fontFamily="system-ui,sans-serif">Users · Orders · Bids</text>

        {/* Arrow: API ↑ Translation */}
        <line x1="290" y1="64" x2="290" y2="34" stroke="#B7C4BD" strokeWidth="1.5" strokeDasharray="4 3" />
        <polygon points="286,34 290,25 294,34" fill="#B7C4BD" />

        {/* ── Translation Service ── */}
        <rect x="198" y="4" width="184" height="48" rx="6" fill="#F7FAF9" stroke="#B7C4BD" strokeWidth="1.2" filter="url(#card-shadow)" />
        <text x="290" y="24" textAnchor="middle" fill="#2F5D50" fontSize="10.5" fontFamily="system-ui,sans-serif" fontWeight="700">NLP Translation Service</text>
        <text x="290" y="40" textAnchor="middle" fill="#5F5F5F" fontSize="8.5" fontFamily="system-ui,sans-serif">Open-Source Model · EN ↔ UR Chat &amp; Bids</text>

        {/* Arrow: API ↓ Forecasting */}
        <line x1="290" y1="162" x2="290" y2="192" stroke="#B7C4BD" strokeWidth="1.5" strokeDasharray="4 3" />
        <polygon points="286,192 290,201 294,192" fill="#B7C4BD" />

        {/* ── Forecasting Service ── */}
        <rect x="180" y="180" width="220" height="48" rx="6" fill="#F7FAF9" stroke="#B7C4BD" strokeWidth="1.2" filter="url(#card-shadow)" />
        <text x="290" y="200" textAnchor="middle" fill="#2F5D50" fontSize="10.5" fontFamily="system-ui,sans-serif" fontWeight="700">Demand Forecasting Service</text>
        <text x="290" y="216" textAnchor="middle" fill="#5F5F5F" fontSize="8.5" fontFamily="system-ui,sans-serif">Python · scikit-learn · Random Forest</text>

        {/* Arrow: API → Socket.IO */}
        <line x1="546" y1="113" x2="588" y2="113" stroke="#B7C4BD" strokeWidth="1.5" strokeDasharray="4 3" />
        <polygon points="588,109 597,113 588,117" fill="#B7C4BD" />

        {/* ── Socket.IO ── */}
        <rect x="597" y="80" width="144" height="66" rx="6" fill="#F7FAF9" stroke="#B7C4BD" strokeWidth="1.2" filter="url(#card-shadow)" />
        <text x="669" y="108" textAnchor="middle" fill="#2F5D50" fontSize="11.5" fontFamily="system-ui,sans-serif" fontWeight="700">Socket.IO</text>
        <text x="669" y="125" textAnchor="middle" fill="#5F5F5F" fontSize="9.5" fontFamily="system-ui,sans-serif">Real-time Chat Server</text>
        <text x="669" y="137" textAnchor="middle" fill="#5F5F5F" fontSize="8.5" fontFamily="system-ui,sans-serif">Live Bid Notifications</text>
      </svg>
      <figcaption
        className="text-center text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/50 mt-3"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        MeethaCart — high-level system architecture &amp; bilingual pipeline
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
        {/* Header pill row */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span
            className="text-[0.72rem] font-bold tracking-widest uppercase text-[#2F5D50] dark:text-[#3D7A68] px-2.5 py-1 rounded bg-[#2F5D50]/10 dark:bg-[#3D7A68]/15 border border-[#2F5D50]/20"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Featured Case Study
          </span>
          <span className="tag font-semibold">{featuredProject.badge}</span>
          <span
            className="text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/50 font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {featuredProject.period}
          </span>
        </div>

        <h2
          id="featured-heading"
          className="section-heading mb-2 text-[#2B2B2B] dark:text-[#ECEAE4]"
        >
          {featuredProject.title}
        </h2>
        <p
          className="text-xl md:text-2xl text-[#2F5D50] dark:text-[#3D7A68] italic font-serif mb-2"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {featuredProject.subtitle}
        </p>
        <p
          className="text-xs text-[#5F5F5F] dark:text-[#ECEAE4]/50 font-medium mb-10"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          {featuredProject.team}
        </p>
      </FadeUp>

      {/* Case study card container */}
      <div className="bg-white dark:bg-[#161816] border border-[#B7C4BD]/70 dark:border-[#B7C4BD]/20 rounded-xl shadow-[0_8px_30px_rgba(47,93,80,0.06)] dark:shadow-none overflow-hidden transition-all duration-300">
        {/* Architecture visual header */}
        <div className="bg-[#FAF8F4]/80 dark:bg-white/[0.02] border-b border-[#B7C4BD]/50 dark:border-[#B7C4BD]/20 px-6 py-8">
          <ArchitectureDiagram />
        </div>

        <div className="p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Problem card */}
            <FadeUp>
              <div className="h-full p-6 rounded-lg bg-[#FAF8F4] dark:bg-white/[0.03] border border-[#B7C4BD]/40 dark:border-[#B7C4BD]/10 border-l-4 border-l-amber-600/80">
                <h3 className="text-xs font-bold tracking-widest uppercase text-amber-700 dark:text-amber-500 mb-3">
                  Problem Context
                </h3>
                <p className="text-sm leading-relaxed text-[#2B2B2B]/85 dark:text-[#ECEAE4]/80">
                  {featuredProject.problem}
                </p>
              </div>
            </FadeUp>

            {/* Solution card */}
            <FadeUp delay={0.08}>
              <div className="h-full p-6 rounded-lg bg-[#FAF8F4] dark:bg-white/[0.03] border border-[#B7C4BD]/40 dark:border-[#B7C4BD]/10 border-l-4 border-l-[#2F5D50] dark:border-l-[#3D7A68]">
                <h3 className="text-xs font-bold tracking-widest uppercase text-[#2F5D50] dark:text-[#3D7A68] mb-3">
                  Engineering Solution
                </h3>
                <p className="text-sm leading-relaxed text-[#2B2B2B]/85 dark:text-[#ECEAE4]/80">
                  {featuredProject.solution}
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Key Features grid */}
          <FadeUp>
            <div className="mb-10">
              <h3 className="text-xs font-bold tracking-widest uppercase text-[#5F5F5F] dark:text-[#ECEAE4]/60 mb-5 flex items-center gap-2">
                <Layers size={14} className="text-[#2F5D50]" />
                Key Capabilities &amp; Workflows
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3 list-none m-0 p-0">
                {featuredProject.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-md bg-[#FAF8F4]/70 dark:bg-white/[0.02] border border-[#B7C4BD]/30 dark:border-[#B7C4BD]/10 text-sm text-[#2B2B2B]/85 dark:text-[#ECEAE4]/80"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <span
                      className="w-5 h-5 rounded-full bg-[#2F5D50]/10 dark:bg-[#3D7A68]/20 flex items-center justify-center shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <Check size={12} className="text-[#2F5D50] dark:text-[#3D7A68]" />
                    </span>
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Bottom row: Stack & Role */}
          <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-[#B7C4BD]/40 dark:border-[#B7C4BD]/20">
            {/* Tech Stack */}
            <FadeUp>
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-[#5F5F5F] dark:text-[#ECEAE4]/60 mb-3.5 flex items-center gap-2">
                  <Cpu size={14} className="text-[#2F5D50]" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.stack.map(s => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-[#2F5D50]/8 text-[#2F5D50] dark:bg-[#3D7A68]/15 dark:text-[#ECEAE4] border border-[#2F5D50]/20 dark:border-[#3D7A68]/30 rounded text-xs font-semibold"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Role & Status */}
            <FadeUp delay={0.08}>
              <div>
                <h3 className="text-xs font-bold tracking-widest uppercase text-[#5F5F5F] dark:text-[#ECEAE4]/60 mb-3.5">
                  Project Role &amp; Timeline
                </h3>
                <p className="text-sm text-[#2B2B2B]/85 dark:text-[#ECEAE4]/75 mb-4 leading-relaxed">
                  {featuredProject.myRole}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 bg-amber-500"
                    />
                    <span
                      className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"
                    />
                  </span>
                  <span
                    className="text-xs font-semibold text-amber-800 dark:text-amber-400"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    Status: {featuredProject.status}
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
