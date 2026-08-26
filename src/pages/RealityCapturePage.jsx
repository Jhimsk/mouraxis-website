import realityCaptureImage from "../assets/images/reality-capture-construction.jpeg"

function RealityCapturePage() {
  return (
    <main className="bg-[#F5F3EE]">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">

          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2F80ED]">
              Reality Capture
            </p>

            <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-tight text-[#081C2C] md:text-7xl">
              Physical environments.
              <br />
              <span className="text-[#2F80ED]">
                Captured digitally.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Mouraxis transforms complex sites and structures into
              high-resolution digital records using aerial imagery,
              photogrammetry, LiDAR, and advanced reality modeling workflows.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded-md bg-[#081C2C] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#123B5D]"
              >
                Start a Project
              </a>

              <a
                href="#capabilities"
                className="rounded-md border border-slate-300 bg-white/50 px-6 py-3.5 text-sm font-semibold text-[#081C2C] transition hover:border-[#2F80ED] hover:text-[#2F80ED]"
              >
                Explore Capabilities
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-[#081C2C] p-4 shadow-2xl shadow-slate-900/20">

              <div className="mb-4 flex items-center justify-between px-2 text-xs uppercase tracking-[0.18em]">
                <span className="text-slate-400">
                  Captured Reality
                </span>

                <span className="flex items-center gap-2 text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Dataset Active
                </span>
              </div>

              <div className="relative min-h-[500px] overflow-hidden rounded-2xl">

                <img
                  src={realityCaptureImage}
                  alt="Aerial reality capture of an active construction project"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#081C2C]/60 via-transparent to-[#081C2C]/10" />

                {/* Capture type */}
                <div className="absolute left-5 top-5 rounded-xl border border-white/10 bg-[#081C2C]/80 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Capture Type
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Aerial Oblique
                  </p>
                </div>

                {/* Dataset */}
                <div className="absolute right-5 top-5 rounded-xl border border-white/10 bg-[#081C2C]/80 px-4 py-3 text-right backdrop-blur-md">
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Dataset
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    High Resolution
                  </p>
                </div>

                {/* Bottom data */}
                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3 md:grid-cols-3">

                  <div className="rounded-xl border border-white/10 bg-[#081C2C]/80 px-4 py-3 backdrop-blur-md">
                    <p className="text-xs text-slate-400">Coverage</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Site + Structure
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#081C2C]/80 px-4 py-3 backdrop-blur-md">
                    <p className="text-xs text-slate-400">Capture</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Aerial Imagery
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#081C2C]/80 px-4 py-3 backdrop-blur-md">
                    <p className="text-xs text-slate-400">Output</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Reality Model
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section
        id="capabilities"
        className="border-t border-slate-200 bg-white py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2F80ED]">
                Capture Once. Use Everywhere.
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#081C2C] md:text-5xl">
                A measurable digital record of the physical world.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-600">
                Reality capture provides project teams with a detailed visual
                and spatial record of existing conditions, construction
                progress, infrastructure, and built assets.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Mouraxis combines multiple capture technologies and
                geospatial workflows to create datasets that can support
                documentation, analysis, coordination, visualization, and
                long-term asset intelligence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-[#081C2C] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2F80ED]">
            Reality Capture Capabilities
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            Capture technology selected around the project.
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-2 lg:grid-cols-4">

            {[
              ["01", "Aerial Capture", "High-resolution aerial imagery for site documentation, mapping, progress capture, and spatial context."],
              ["02", "Photogrammetry", "Image-based reconstruction workflows that transform overlapping photography into measurable digital models."],
              ["03", "LiDAR Capture", "Dense spatial datasets for documenting complex geometry, structures, terrain, and existing conditions."],
              ["04", "360° Documentation", "Immersive visual documentation for construction progress, condition assessment, and remote project review."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="bg-[#081C2C] p-8 transition hover:bg-[#0D2940]"
              >
                <p className="text-sm font-semibold text-[#2F80ED]">
                  {number}
                </p>

                <h3 className="mt-8 text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F3EE] py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2F80ED]">
            Start With Reality
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#081C2C] md:text-6xl">
            Capture the site.
            <br />
            Understand the project.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Tell us what needs to be documented, measured, monitored, or
            understood. Mouraxis will help define the appropriate capture and
            delivery workflow.
          </p>

          <a
            href="/#contact"
            className="mt-9 inline-flex rounded-md bg-[#2F80ED] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#246FCB]"
          >
            Discuss Your Project →
          </a>

        </div>
      </section>

    </main>
  )
}

export default RealityCapturePage