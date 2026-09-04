import heroVideo from "../assets/video/mouraxis-hero.mp4"

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
            Mouraxis delivers geospatial and infrastructure intelligence through
            reality capture, digital twins, construction monitoring, structural
            documentation, and advanced spatial analysis.
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
<div className="animate-slide-in-right animate-float-panel relative scale-95 origin-center lg:scale-[0.92]">
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
    <div className="relative min-h-[430px] overflow-hidden rounded-2xl border border-white/10 bg-[#071521]">

      {/* Project video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Aerial construction reality capture"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-[#081C2C]/20" />

      {/* Capture */}
      <div className="absolute left-5 top-5 rounded-xl border border-white/10 bg-[#081C2C]/75 px-4 py-3 backdrop-blur-md">
        <p className="text-xs uppercase tracking-wider text-slate-400">
          Capture
        </p>

        <p className="mt-1 text-sm font-semibold text-white">
          Aerial Reality
        </p>
      </div>

      {/* Dataset */}
      <div className="absolute right-5 top-5 rounded-xl border border-white/10 bg-[#081C2C]/75 px-4 py-3 backdrop-blur-md">
        <p className="text-xs uppercase tracking-wider text-slate-400">
          Dataset
        </p>

        <p className="mt-1 text-sm font-semibold text-white">
          High Resolution
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Active Capture
        </p>
      </div>

      {/* Output */}
      <div className="absolute bottom-5 right-5 rounded-xl border border-white/10 bg-[#081C2C]/75 px-4 py-3 backdrop-blur-md">
        <p className="text-xs uppercase tracking-wider text-slate-400">
          Output
        </p>

        <p className="mt-1 text-sm font-semibold text-white">
          Spatial Intelligence
        </p>
      </div>

    </div>

    {/* Bottom Metrics */}
    <div className="grid grid-cols-3 gap-3 pt-4 text-center">

      <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-4">
        <p className="text-sm font-semibold text-white">
          Capture
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Site Reality
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-4">
        <p className="text-sm font-semibold text-white">
          Process
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Spatial Data
        </p>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-4">
        <p className="text-sm font-semibold text-white">
          Deliver
        </p>

        <p className="mt-1 text-xs text-slate-400">
          Intelligence
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