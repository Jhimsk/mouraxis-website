function Hero() {
  return (
    <section className="overflow-hidden bg-[#F5F3EE]">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-20 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">

        {/* LEFT CONTENT */}
        <div>
          <p className="animate-fade-up mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F80ED]">
            Infrastructure Intelligence
          </p>

          <h1 className="animate-fade-up-delay max-w-2xl text-5xl font-semibold leading-[1.02] tracking-tight text-[#081C2C] md:text-7xl">
            Engineering Reality.
            <br />
            <span className="text-[#2F80ED]">
              Digitized with Precision.
            </span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-7 max-w-xl text-lg leading-8 text-slate-600">
            Mouraxis transforms reality into actionable infrastructure
            intelligence through geospatial engineering, reality capture,
            structural documentation, and advanced spatial analytics.
          </p>

          <div className="animate-fade-up-delay-2 mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-md bg-[#081C2C] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#123B5D]"
            >
              Start a Project
            </a>

            <a
              href="#solutions"
              className="rounded-md border border-slate-300 bg-white/50 px-6 py-3.5 text-sm font-semibold text-[#081C2C] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2F80ED] hover:text-[#2F80ED]"
            >
              Explore Solutions
            </a>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="animate-slide-in-right animate-float-panel relative scale-95 lg:scale-90 origin-center">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-[#0B1F33] p-5 shadow-2xl shadow-slate-900/15">

            {/* Header */}
            <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.18em]">
              <span className="text-slate-400">
                Project Intelligence
              </span>

              <span className="flex items-center gap-2 text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                Live
              </span>
            </div>

            {/* Main visualization */}
            <div className="relative min-h-[430px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#112D46] via-[#0D2438] to-[#071521]">

              {/* Technical grid */}
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
                  backgroundSize: "38px 38px",
                }}
              />

              {/* Decorative glow */}
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2F80ED]/10 blur-3xl" />

              {/* Abstract digital twin */}
              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rotate-12 border border-[#2F80ED]/80">
                <div className="absolute inset-5 border border-white/30" />
                <div className="absolute inset-10 border border-white/20" />

                <div className="absolute -left-8 top-12 h-px w-16 bg-[#2F80ED]/70" />
                <div className="absolute -right-8 bottom-12 h-px w-16 bg-[#2F80ED]/70" />
                <div className="absolute bottom-[-32px] left-1/2 h-16 w-px -translate-x-1/2 bg-[#2F80ED]/70" />
              </div>

              {/* Control points */}
              <div className="animate-soft-pulse absolute left-[28%] top-[35%] h-3 w-3 rounded-full bg-[#2F80ED] shadow-[0_0_20px_rgba(47,128,237,0.8)]" />

              <div className="animate-soft-pulse absolute right-[27%] top-[48%] h-3 w-3 rounded-full bg-[#2F80ED] shadow-[0_0_20px_rgba(47,128,237,0.8)]" />

              <div className="animate-soft-pulse absolute bottom-[24%] left-[44%] h-3 w-3 rounded-full bg-[#2F80ED] shadow-[0_0_20px_rgba(47,128,237,0.8)]" />

              {/* Progress card */}
              <div className="absolute left-5 top-5 rounded-xl border border-white/10 bg-[#081C2C]/80 px-4 py-3 backdrop-blur">
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Progress
                </p>

                <p className="mt-1 text-2xl font-semibold text-white">
                  82%
                </p>
              </div>

              {/* Coordinate card */}
              <div className="absolute right-5 top-5 rounded-xl border border-white/10 bg-[#081C2C]/80 px-4 py-3 backdrop-blur">
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Control Point
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  CP-14
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Verified
                </p>
              </div>

              {/* Accuracy card */}
              <div className="absolute bottom-5 right-5 rounded-xl border border-white/10 bg-[#081C2C]/80 px-4 py-3 backdrop-blur">
                <p className="text-xs uppercase tracking-wider text-slate-400">
                  Accuracy
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  ±0.03'
                </p>
              </div>

            </div>

            {/* Bottom Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-4 text-center">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-4">
                <p className="text-xl font-semibold text-white">
                  14
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Control Points
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-4">
                <p className="text-xl font-semibold text-white">
                  ±0.03'
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Tolerance
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-4">
                <p className="text-xl font-semibold text-white">
                  Live
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Project Status
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero