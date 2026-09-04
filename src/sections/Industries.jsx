function ConstructionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M4 20V8l8-4 8 4v12" />
      <path d="M8 20v-7h8v7" />
      <path d="M3 20h18" />
    </svg>
  )
}

function EngineeringIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
      <path d="m4.9 4.9 2.1 2.1" />
      <path d="m17 17 2.1 2.1" />
      <path d="m19.1 4.9-2.1 2.1" />
      <path d="m7 17-2.1 2.1" />
    </svg>
  )
}

function InfrastructureIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M3 18h18" />
      <path d="M5 18V9" />
      <path d="M19 18V9" />
      <path d="M5 9h14" />
      <path d="M8 9 10 5h4l2 4" />
    </svg>
  )
}

function RealEstateIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M4 21V4h10v17" />
      <path d="M14 9h6v12" />
      <path d="M8 8h2" />
      <path d="M8 12h2" />
      <path d="M8 16h2" />
      <path d="M17 13h1" />
      <path d="M17 17h1" />
    </svg>
  )
}

function PublicAgencyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M3 9h18" />
      <path d="M5 9v9" />
      <path d="M9 9v9" />
      <path d="M15 9v9" />
      <path d="M19 9v9" />
      <path d="M2 18h20" />
      <path d="m12 3 9 4H3l9-4Z" />
    </svg>
  )
}

function IndustrialIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M3 21V10l6 3v-3l6 3V6h4v15" />
      <path d="M3 21h18" />
      <path d="M7 17h2" />
      <path d="M12 17h2" />
      <path d="M17 17h2" />
    </svg>
  )
}

const industries = [
  {
    title: "Construction & Development",
    description:
      "Reality capture, progress documentation, site intelligence, and digital records that help project teams understand conditions and track change.",
    icon: <ConstructionIcon />,
  },
  {
    title: "Engineering & Design",
    description:
      "Spatial data, existing-condition documentation, 3D models, and geospatial datasets that support technical evaluation and project planning.",
    icon: <EngineeringIcon />,
  },
  {
    title: "Transportation & Infrastructure",
    description:
      "Digital documentation of bridges, roadways, structures, and public assets for visualization, condition records, and long-term asset intelligence.",
    icon: <InfrastructureIcon />,
  },
  {
    title: "Real Estate & Property",
    description:
      "Aerial mapping, site documentation, digital models, and visual intelligence for development, redevelopment, due diligence, and property planning.",
    icon: <RealEstateIcon />,
  },
  {
    title: "Public Agencies & Asset Owners",
    description:
      "Structured spatial records, infrastructure documentation, and digital deliverables that improve access to information across the asset lifecycle.",
    icon: <PublicAgencyIcon />,
  },
  {
    title: "Industrial & Utility Projects",
    description:
      "Reality capture, mapping, and asset documentation for complex facilities, utility corridors, equipment areas, and operational infrastructure.",
    icon: <IndustrialIcon />,
  },
]

function Industries() {
  return (
    <section
      id="industries"
      className="relative scroll-mt-24 overflow-hidden bg-[#081C2C] py-28 text-white"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2F80ED]">
              Industries
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Built for the
              <br />
              physical world.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-xl leading-9 text-slate-300">
              Mouraxis supports teams responsible for planning, building,
              documenting, and managing real-world infrastructure by turning
              field conditions into accessible digital intelligence.
            </p>
          </div>
        </div>

        {/* Industry grid */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="group bg-[#0B1F33] p-8 transition-colors duration-300 hover:bg-[#10283D]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#2F80ED]">
                {industry.icon}
              </div>

              <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">
                {industry.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {industry.description}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="max-w-2xl text-base leading-7 text-slate-400">
            Every project is different. Mouraxis tailors the capture,
            processing, and digital delivery workflow around the asset,
            project stage, and information required.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors duration-200 hover:text-[#2F80ED]"
          >
            Discuss Your Project
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Industries