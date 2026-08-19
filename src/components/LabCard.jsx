import TechBadge from "./TechBadge"

function LabCard({
  number,
  category,
  title,
  description,
  technologies,
  status,
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/50 hover:shadow-[0_20px_60px_rgba(8,28,44,0.10)]">

      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#2F80ED]/0 blur-3xl transition-all duration-500 group-hover:bg-[#2F80ED]/10" />

      <div className="relative">
        <div className="flex items-start justify-between gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2F80ED]">
            {number}
          </span>

          <span className="rounded-full border border-slate-200 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
            {status}
          </span>
        </div>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {category}
        </p>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#081C2C]">
          {title}
        </h3>

        <p className="mt-4 text-base leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <TechBadge key={technology}>
              {technology}
            </TechBadge>
          ))}
        </div>

        <a
          href="#lab-projects"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#081C2C] transition-colors duration-200 group-hover:text-[#2F80ED]"
        >
          Explore Demonstration

          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

    </article>
  )
}

export default LabCard