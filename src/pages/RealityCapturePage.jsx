import { useEffect } from "react"
import realityCaptureImage from "../assets/images/reality-capture-construction.jpeg"
import bridge001Image from "../assets/images/bridge-001-viewer.jpg"

function RealityCapturePage() {
  useEffect(() => {
    document.title = "Reality Capture Services | Mouraxis"

    const description = document.querySelector('meta[name="description"]')
    const canonical = document.querySelector('link[rel="canonical"]')

    if (description) {
      description.setAttribute(
        "content",
        "Reality capture for construction and infrastructure using aerial imagery, photogrammetry, LiDAR, 360° documentation, and advanced spatial workflows."
      )
    }

    if (canonical) {
      canonical.setAttribute(
        "href",
        "https://mouraxis.com/reality-capture/"
      )
    }

    return () => {
      document.title = "Mouraxis | Geospatial & Infrastructure Intelligence"

      if (description) {
        description.setAttribute(
          "content",
          "Mouraxis provides geospatial intelligence, reality capture, digital twins, construction monitoring, and infrastructure documentation for the built environment."
        )
      }

      if (canonical) {
        canonical.setAttribute(
          "href",
          "https://mouraxis.com/"
        )
      }
    }
  }, [])

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

                <div className="absolute left-5 top-5 rounded-xl border border-white/10 bg-[#081C2C]/80 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Capture Type
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Aerial Oblique
                  </p>
                </div>

                <div className="absolute right-5 top-5 rounded-xl border border-white/10 bg-[#081C2C]/80 px-4 py-3 text-right backdrop-blur-md">
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Dataset
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    High Resolution
                  </p>
                </div>

                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3 md:grid-cols-3">

                  <div className="rounded-xl border border-white/10 bg-[#081C2C]/80 px-4 py-3 backdrop-blur-md">
                    <p className="text-xs text-slate-400">
                      Coverage
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Site + Structure
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#081C2C]/80 px-4 py-3 backdrop-blur-md">
                    <p className="text-xs text-slate-400">
                      Capture
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Aerial Imagery
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#081C2C]/80 px-4 py-3 backdrop-blur-md">
                    <p className="text-xs text-slate-400">
                      Output
                    </p>
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

      {/* FEATURED CASE STUDY */}
      <section className="bg-[#081C2C] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* LEFT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2F80ED]">
                Featured Case Study
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                Bridge 001
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                A bridge infrastructure reality-capture demonstration
                transformed from aerial imagery into an interactive textured
                3D reconstruction and dense geospatial point cloud.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6">

                <div>
                  <p className="text-3xl font-semibold text-white">
                    122
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Images Processed
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-semibold text-white">
                    10.0M
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Reconstructed Points
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-semibold text-white">
                    0.82 cm
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Average GSD
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-semibold text-white">
                    2.76 ha
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Reconstructed Area
                  </p>
                </div>

              </div>

              <a
                href="/projects/bridge-001/"
                className="mt-10 inline-flex items-center gap-3 rounded-md bg-[#2F80ED] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#246FCB]"
              >
                Explore Bridge 001 →
              </a>
            </div>

            {/* RIGHT */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 md:p-6">

              <div className="mb-5 px-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2F80ED]">
                  Interactive Reality Model
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  Infrastructure made explorable.
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                  Explore the reconstructed bridge directly in the browser with
                  rotation, zoom, pan, fullscreen viewing, and controlled model
                  presentation.
                </p>
              </div>

              <a
                href="/projects/bridge-001/"
                className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#06111d]"
              >
                <div className="relative overflow-hidden">

                  <img
                    src={bridge001Image}
                    alt="Bridge 001 interactive photogrammetric reality model"
                    className="w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06111d]/65 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Bridge 001
                      </p>

                      <p className="mt-1 text-xs text-slate-300">
                        Interactive 3D Reconstruction
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#081C2C]/80 text-white backdrop-blur-md transition group-hover:border-[#2F80ED] group-hover:bg-[#2F80ED]">
                      →
                    </div>

                  </div>

                </div>
              </a>

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
              [
                "01",
                "Aerial Capture",
                "High-resolution aerial imagery for site documentation, mapping, progress capture, and spatial context.",
              ],
              [
                "02",
                "Photogrammetry",
                "Image-based reconstruction workflows that transform overlapping photography into measurable digital models.",
              ],
              [
                "03",
                "LiDAR Capture",
                "Dense spatial datasets for documenting complex geometry, structures, terrain, and existing conditions.",
              ],
              [
                "04",
                "360° Documentation",
                "Immersive visual documentation for construction progress, condition assessment, and remote project review.",
              ],
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

      {/* DELIVERABLES */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2F80ED]">
                Reality Capture Deliverables
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#081C2C] md:text-5xl">
                Field data transformed
                <br />
                into usable outputs.
              </h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Capture is only the beginning. Mouraxis processes field data into
              organized visual and spatial deliverables that help project teams
              document conditions, understand context, coordinate work, and
              communicate complex information.
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "3D Reality Models",
                description:
                  "Digital representations of sites and structures created from coordinated capture datasets.",
              },
              {
                title: "Point Clouds",
                description:
                  "Dense spatial datasets that preserve visible geometry and provide a foundation for analysis and modeling.",
              },
              {
                title: "Orthomosaic Imagery",
                description:
                  "Corrected aerial imagery assembled into detailed plan-view representations of project areas.",
              },
              {
                title: "Existing-Condition Records",
                description:
                  "Organized visual documentation of site, structural, façade, and infrastructure conditions.",
              },
              {
                title: "Progress Documentation",
                description:
                  "Repeatable field capture that creates a visual record of construction and site development over time.",
              },
              {
                title: "Spatial Project Data",
                description:
                  "Structured geospatial information prepared for visualization, GIS integration, coordination, and project review.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-[#F8F7F3] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/40 hover:shadow-lg"
              >
                <div className="h-1 w-10 bg-[#2F80ED] transition-all duration-300 group-hover:w-16" />

                <h3 className="mt-8 text-xl font-semibold text-[#081C2C]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="relative overflow-hidden bg-[#EEF2F5] py-28">

        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#081C2C 1px, transparent 1px), linear-gradient(90deg, #081C2C 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2F80ED]">
            Applications
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#081C2C] md:text-5xl">
            One capture workflow.
            <br />
            Multiple project uses.
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-slate-300 bg-slate-300 md:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "Construction",
                "Progress documentation, coordination, existing conditions, and visual project records.",
              ],
              [
                "Existing Buildings",
                "Digital documentation of façades, roofs, structures, interiors, and surrounding conditions.",
              ],
              [
                "Infrastructure",
                "Capture of transportation, utility, civil, and other physical assets requiring spatial context.",
              ],
              [
                "Asset Documentation",
                "Repeatable digital records that support maintenance, planning, visualization, and long-term asset intelligence.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="bg-[#F5F3EE] p-8 transition hover:bg-white"
              >
                <h3 className="text-xl font-semibold text-[#081C2C]">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="bg-[#081C2C] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2F80ED]">
                Reality Capture Workflow
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                From field conditions
                <br />
                to project intelligence.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-slate-300">
              Each workflow is selected around what needs to be documented,
              understood, analyzed, or communicated—not around a single piece
              of technology.
            </p>

          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-4">

            {[
              [
                "01",
                "Define",
                "Establish the project objective, capture area, required detail, and intended use of the dataset.",
              ],
              [
                "02",
                "Capture",
                "Collect coordinated aerial, terrestrial, 360°, or other field imagery and spatial data.",
              ],
              [
                "03",
                "Process",
                "Transform raw capture data into organized imagery, models, spatial datasets, and documentation.",
              ],
              [
                "04",
                "Deliver",
                "Provide clear project outputs structured around how the client and project team need to use the information.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/50 hover:bg-white/[0.06]"
              >
                <p className="text-xs font-semibold tracking-[0.2em] text-[#2F80ED]">
                  {number}
                </p>

                <h3 className="mt-10 text-2xl font-semibold">
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