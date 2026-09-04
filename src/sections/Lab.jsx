import FeaturedProject from "../components/FeaturedProject"
import LabCard from "../components/LabCard"
import bridge001Preview from "../assets/images/bridge-001-preview.png"

const demonstrations = [
  {
    number: "01",
    category: "Reality Capture",
    title: "Bridge 001 — Infrastructure Reality Capture",
    description:
      "A completed field demonstration documenting a transportation asset through aerial capture, photogrammetry, point-cloud processing, mesh optimization, and interactive 3D delivery.",
    technologies: ["Drone", "Photogrammetry", "Point Cloud", "3D Model"],
    status: "Complete",
  },
  {
    number: "02",
    category: "Existing Conditions",
    title: "Historic Structure Documentation",
    description:
      "A planned reality-capture study focused on documenting exterior geometry, visible conditions, and spatial relationships of an existing structure.",
    technologies: ["360 Capture", "3D Model", "GIS"],
    status: "Planned",
  },
  {
    number: "03",
    category: "Spatial Intelligence",
    title: "Urban Asset Mapping",
    description:
      "A planned GIS demonstration mapping visible public assets and translating field observations into structured spatial intelligence.",
    technologies: ["GIS", "Mapping", "Field Data"],
    status: "Planned",
  },
]

function Lab() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden bg-[#EEF2F5] py-28"
    >
      {/* Background Technical Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#081C2C 1px, transparent 1px), linear-gradient(90deg, #081C2C 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#2F80ED]">
              Mouraxis Labs
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#081C2C] md:text-6xl">
              Captured.
              <br />
              Processed.
              <br />
              Proven.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-xl leading-9 text-slate-600">
              Mouraxis Labs is where we test real-world capture workflows,
              validate processing methods, and turn infrastructure into
              measurable digital environments.
            </p>
          </div>
        </div>

        {/* Featured Project */}
        <div className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Featured Project
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Completed Mouraxis field demonstration
              </p>
            </div>

            <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 md:block">
              BRIDGE / 001
            </span>
          </div>

          <FeaturedProject
  label="Reality Capture Demonstration"
  title="Bridge 001"
  description="A completed infrastructure reality-capture demonstration transforming aerial imagery into a processed 3D model and interactive digital viewer. The workflow was developed to test how efficiently real-world transportation assets can be captured, reconstructed, optimized, and delivered online."
  technologies={[
    "Drone",
    "WebODM",
    "CloudCompare",
    "Blender",
    "Three.js",
  ]}
  status="Complete"
  image={bridge001Preview}
  imageAlt="Bridge 001 reality capture and 3D reconstruction"
  href="/projects/bridge-001/"
  ctaLabel="View Bridge 001"
  stats={[
    { value: "122", label: "Images" },
    { value: "10.0M", label: "Reconstructed Points" },
    { value: "0.82 cm", label: "Average GSD" },
    { value: "2.76 ha", label: "Captured Area" },
  ]}
/>
        </div>

        {/* Demonstration Library */}
        <div id="lab-projects" className="mt-24 scroll-mt-24">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2F80ED]">
                Demonstration Library
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#081C2C] md:text-4xl">
                Built in the field.
                <br />
                Documented digitally.
              </h3>
            </div>

            <p className="max-w-lg text-base leading-7 text-slate-600">
              Each Mouraxis demonstration tests a real capture, processing, or
              spatial-intelligence workflow and documents the resulting digital
              deliverables.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {demonstrations.map((demonstration) => (
              <LabCard
                key={demonstration.number}
                {...demonstration}
              />
            ))}
          </div>
        </div>

        {/* Lab Philosophy */}
        <div className="mt-20 border-t border-slate-300/70 pt-9">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-[#081C2C]">
                Capture
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Collect high-quality imagery and spatial data under real field
                conditions.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#081C2C]">
                Process
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Reconstruct, clean, optimize, and validate the resulting
                digital dataset.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#081C2C]">
                Deliver
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Transform processed data into accessible models, maps, and
                interactive project intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lab