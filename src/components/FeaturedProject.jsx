import TechBadge from "./TechBadge"

function FeaturedProject({
  label,
  title,
  description,
  technologies,
  status,
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0B1F33] shadow-[0_30px_90px_rgba(8,28,44,0.18)]">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

        {/* Visual */}
        <div className="relative min-h-[420px] overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#102E49] via-[#0A2134] to-[#06121E] lg:border-b-0 lg:border-r">

          {/* Technical Grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2F80ED]/15 blur-3xl" />

          {/* Placeholder Structure */}
          <div className="absolute left-1/2 top-1/2 h-60 w-72 -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] border border-[#2F80ED]/70">
            <div className="absolute inset-5 border border-white/30" />
            <div className="absolute inset-10 border border-white/20" />
            <div className="absolute left-1/2 top-[-70px] h-[70px] w-px bg-[#2F80ED]/60" />
            <div className="absolute bottom-[-60px] left-1/2 h-[60px] w-px bg-[#2F80ED]/60" />
          </div>

          {/* Markers */}
          <div className="absolute left-[25%] top-[30%] h-3 w-3 rounded-full bg-[#2F80ED] shadow-[0_0_22px_rgba(47,128,237,0.8)]" />
          <div className="absolute right-[22%] top-[44%] h-3 w-3 rounded-full bg-[#2F80ED] shadow-[0_0_22px_rgba(47,128,237,0.8)]" />
          <div className="absolute bottom-[25%] left-[42%] h-3 w-3 rounded-full bg-[#2F80ED] shadow-[0_0_22px_rgba(47,128,237,0.8)]" />

          {/* Status */}
          <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#081C2C]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-400 backdrop-blur">
            {status}
          </div>

          {/* Future Image Note */}
          <div className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.16em] text-slate-400">
            Field imagery / model preview
          </div>
        </div>

        {/* Project Information */}
        <div className="flex flex-col justify-between p-8 md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2F80ED]">
              {label}
            </p>

            <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {title}
            </h3>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              {description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <TechBadge key={technology}>
                  {technology}
                </TechBadge>
              ))}
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6">
            <a
              href="#lab-projects"
              className="inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-[#2F80ED]"
            >
              Explore Research
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

      </div>
    </article>
  )
}

export default FeaturedProject