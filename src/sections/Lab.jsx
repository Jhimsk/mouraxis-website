import FeaturedProject from "../components/FeaturedProject"
import LabCard from "../components/LabCard"

const demonstrations = [
  {
    number: "01",
    category: "Reality Capture",
    title: "Bridge Asset Documentation",
    description:
      "A field demonstration exploring aerial capture, geometric documentation, and digital reconstruction of transportation infrastructure.",
    technologies: ["Drone", "Photogrammetry", "GIS"],
    status: "Planned",
  },
  {
    number: "02",
    category: "Existing Conditions",
    title: "Historic Structure Documentation",
    description:
      "A reality-capture study focused on documenting exterior geometry, visible conditions, and spatial relationships of an existing structure.",
    technologies: ["360 Capture", "3D Model", "GIS"],
    status: "Planned",
  },
  {
    number: "03",
    category: "Spatial Intelligence",
    title: "Urban Asset Mapping",
    description:
      "A GIS demonstration mapping visible public assets and translating field observations into structured spatial intelligence.",
    technologies: ["GIS", "Mapping", "Field Data"],
    status: "Planned",
  },
]

function Lab() {
  return (
    <section
      id="lab"
      className="relative overflow-hidden bg-[#EEF2F5] py-28"
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
              Research.
              <br />
              Validation.
              <br />
              Innovation.
            </h2>
          </div>

          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-xl leading-9 text-slate-600">
              Mouraxis Labs is our field research and technology demonstration
              environment—built to test workflows, validate methods, and show
              how geospatial technology can improve infrastructure decisions.
            </p>
          </div>
        </div>

        {/* Featured Research */}
        <div className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Featured Research
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Upcoming Mouraxis field demonstration
              </p>
            </div>

            <span className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 md:block">
              LAB / 001
            </span>
          </div>

          <FeaturedProject
            label="Field Demonstration"
            title="Infrastructure Digital Twin Study"
            description="A planned field study exploring how aerial imagery, spatial data, and digital reconstruction can be combined into a decision-ready representation of a real infrastructure asset."
            technologies={[
              "Drone",
              "Photogrammetry",
              "GIS",
              "Digital Twin",
            ]}
            status="Upcoming"
          />
        </div>

        {/* Research Library */}
        <div id="lab-projects" className="mt-24">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2F80ED]">
                Research Library
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[#081C2C] md:text-4xl">
                Built in the field.
                <br />
                Documented in the lab.
              </h3>
            </div>

            <p className="max-w-lg text-base leading-7 text-slate-600">
              Each demonstration is designed around a real engineering or
              infrastructure question and documented transparently from
              methodology through findings.
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
                Test
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Explore tools and workflows under real field conditions.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#081C2C]">
                Validate
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Evaluate what works, what does not, and where precision matters.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#081C2C]">
                Share
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Turn the findings into useful knowledge for infrastructure teams.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Lab