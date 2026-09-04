import CapabilityCard from "../components/CapabilityCard"

function RealityCaptureIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M4 8h4l2-2h4l2 2h4v10H4V8Z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}

function GeospatialIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3 4 6 4 9s-1 6-4 9" />
      <path d="M12 3c-3 3-4 6-4 9s1 6 4 9" />
    </svg>
  )
}

function MonitoringIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M4 20V9l8-5 8 5v11" />
      <path d="M8 20v-6h8v6" />
      <path d="M3 20h18" />
      <path d="M5 7l2 2 2-2" />
    </svg>
  )
}

function DigitalTwinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="m12 3 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 17 8 4 8-4" />
    </svg>
  )
}

function DocumentationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M6 3h9l3 3v15H6V3Z" />
      <path d="M15 3v4h4" />
      <path d="M9 11h6" />
      <path d="M9 15h6" />
    </svg>
  )
}

function AssetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M4 20V10" />
      <path d="M10 20V5" />
      <path d="M16 20v-8" />
      <path d="M22 20V3" />
      <path d="M2 20h21" />
    </svg>
  )
}

const capabilities = [
  {
    number: "01",
    title: "Reality Capture",
    description:
      "Georeferenced 3D models, orthomosaics, point clouds, aerial imagery, and existing-condition datasets created from drone and ground-based capture.",
    icon: <RealityCaptureIcon />,
    href: "/reality-capture/",
  },
  {
    number: "02",
    title: "Geospatial Mapping",
    description:
      "Aerial maps, surface models, site measurements, volumetric analysis, GIS-ready datasets, and spatial products built for project planning and decision-making.",
    icon: <GeospatialIcon />,
    href: "#contact",
  },
  {
    number: "03",
    title: "Construction Monitoring",
    description:
      "Progress documentation, recurring site capture, movement and condition records, visual comparisons, and field datasets that document change over time.",
    icon: <MonitoringIcon />,
    href: "#contact",
  },
  {
    number: "04",
    title: "Digital Twins",
    description:
      "Interactive 3D environments that organize site geometry, imagery, asset information, and project data into a single accessible digital representation.",
    icon: <DigitalTwinIcon />,
    href: "#contact",
  },
  {
    number: "05",
    title: "Structural Documentation",
    description:
      "Existing-condition models, mapped observations, photographic records, dimensional documentation, and organized datasets for infrastructure and building assessments.",
    icon: <DocumentationIcon />,
    href: "#contact",
  },
  {
    number: "06",
    title: "Asset Intelligence",
    description:
      "Project and infrastructure data organized into interactive viewers, condition records, spatial databases, and decision-ready digital deliverables.",
    icon: <AssetIcon />,
    href: "#contact",
  },
]

function Capabilities() {
  return (
    <section
      id="solutions"
      className="relative scroll-mt-24 overflow-hidden bg-[#F5F3EE] py-28"
    >
      {/* Background technical detail */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#081C2C 1px, transparent 1px), linear-gradient(90deg, #081C2C 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2F80ED]">
            What We Deliver
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#081C2C] md:text-6xl">
            Real-world data.
            <br />
            Decision-ready deliverables.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Mouraxis captures physical infrastructure and transforms it into
            measurable digital information that project teams can visualize,
            analyze, document, and use.
          </p>
        </div>

        {/* Capability grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {capabilities.map((capability) => (
            <CapabilityCard
              key={capability.number}
              number={capability.number}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
              href={capability.href}
            />
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-slate-300/70 pt-8 md:flex-row md:items-center">
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            From field capture to final digital delivery, Mouraxis creates
            consistent project intelligence that helps teams understand
            existing conditions, document progress, and make better-informed
            decisions.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm font-semibold text-[#081C2C] transition-colors duration-200 hover:text-[#2F80ED]"
          >
            Discuss Your Project
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Capabilities