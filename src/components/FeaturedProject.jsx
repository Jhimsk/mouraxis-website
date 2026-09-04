import TechBadge from "./TechBadge"

function FeaturedProject({
  label,
  title,
  description,
  technologies = [],
  status,
  image,
  imageAlt = "",
  href = "/projects/bridge-001/",
  ctaLabel = "View Project",
  stats = [],
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0B1F33] shadow-[0_30px_90px_rgba(8,28,44,0.18)]">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        {/* Project Visual */}
        <div className="relative min-h-[420px] overflow-hidden border-b border-white/10 bg-[#06121E] lg:border-b-0 lg:border-r">
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <>
              {/* Technical Grid Fallback */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />

              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2F80ED]/15 blur-3xl" />
            </>
          )}

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#06121E]/80 via-transparent to-[#06121E]/20" />

          {/* Status */}
          {status && (
            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#081C2C]/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-400 backdrop-blur">
              {status}
            </div>
          )}

          {/* Visual Label */}
          <div className="absolute bottom-5 left-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
              Reality Capture / 3D Reconstruction
            </p>
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

            {/* Project Stats */}
            {stats.length > 0 && (
              <div className="mt-8 grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4"
                  >
                    <p className="text-lg font-semibold text-white">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Technologies */}
            {technologies.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <TechBadge key={technology}>
                    {technology}
                  </TechBadge>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="mt-12 border-t border-white/10 pt-6">
            <a
              href={href}
              className="inline-flex items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-[#2F80ED]"
            >
              {ctaLabel}

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