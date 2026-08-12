function CapabilityCard({ icon, title, description, number }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/60 hover:shadow-[0_20px_60px_rgba(8,28,44,0.10)]">

      {/* Subtle blue glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#2F80ED]/0 blur-3xl transition-all duration-500 group-hover:bg-[#2F80ED]/10" />

      {/* Top row */}
      <div className="relative flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-[#F8FAFC] text-[#2F80ED] transition-all duration-300 group-hover:border-[#2F80ED]/40 group-hover:bg-[#2F80ED]/5">
          {icon}
        </div>

        <span className="text-xs font-medium tracking-[0.18em] text-slate-400">
          {number}
        </span>
      </div>

      {/* Copy */}
      <div className="relative mt-8">
        <h3 className="text-2xl font-semibold tracking-tight text-[#081C2C]">
          {title}
        </h3>

        <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
          {description}
        </p>

        <a
          href="#contact"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#081C2C] transition-colors duration-200 group-hover:text-[#2F80ED]"
        >
          Learn More

          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

    </article>
  )
}

export default CapabilityCard
