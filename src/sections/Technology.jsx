const steps = [
  {
    number: "01",
    title: "Capture",
    subtitle: "Reality Capture",
    description:
      "Collect high-quality field imagery and spatial data using aerial and ground-based capture methods.",
  },
  {
    number: "02",
    title: "Process",
    subtitle: "Photogrammetry + Spatial Data",
    description:
      "Transform raw field observations into organized, measurable, and georeferenced digital datasets.",
  },
  {
    number: "03",
    title: "Model",
    subtitle: "Point Clouds + 3D Environments",
    description:
      "Build digital representations of sites, structures, and infrastructure from processed spatial data.",
  },
  {
    number: "04",
    title: "Analyze",
    subtitle: "Spatial Intelligence",
    description:
      "Extract measurements, relationships, change, and useful project information from the digital dataset.",
  },
  {
    number: "05",
    title: "Deliver",
    subtitle: "Decision-Ready Outputs",
    description:
      "Package the results into accessible models, maps, documentation, and interactive project intelligence.",
  },
]

function Technology() {
  return (
    <section
      id="technology"
      className="relative scroll-mt-24 overflow-hidden bg-[#081C2C] py-28 text-white"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2F80ED]">
            Technology Workflow
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            From field reality
            <br />
            to digital intelligence.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Mouraxis connects field capture, spatial processing, 3D
            reconstruction, analysis, and digital delivery into one continuous
            workflow.
          </p>
        </div>

        {/* Workflow */}
        <div className="mt-16 grid gap-4 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/60 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.18em] text-slate-500">
                  {step.number}
                </span>

                {index < steps.length - 1 && (
                  <span className="hidden text-[#2F80ED] lg:block">
                    →
                  </span>
                )}
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#2F80ED]">
                {step.subtitle}
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                {step.description}
              </p>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-[#2F80ED]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="max-w-3xl text-base leading-7 text-slate-400">
            Technology is only valuable when the output is usable. Mouraxis
            focuses on turning complex physical conditions into digital
            information that project teams can understand, access, and apply.
          </p>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-white transition-colors duration-200 hover:text-[#2F80ED]"
          >
            Start a Project
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Technology