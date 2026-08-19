function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#061521] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="text-xl font-semibold tracking-[0.22em]">
              MOURA<span className="text-[#2F80ED]">X</span>IS
            </p>

            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Infrastructure Intelligence
            </p>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              Geospatial technology, reality capture, monitoring, and spatial
              intelligence designed to help infrastructure teams understand
              physical conditions and make confident decisions.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-sm font-semibold text-white">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <a href="#solutions" className="transition hover:text-[#2F80ED]">
                Capabilities
              </a>

              <a href="#lab" className="transition hover:text-[#2F80ED]">
                Mouraxis Labs
              </a>

              <a href="#technology" className="transition hover:text-[#2F80ED]">
                Technology
              </a>

              <a href="#process" className="transition hover:text-[#2F80ED]">
                How We Work
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold text-white">
              Connect
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <a href="#contact" className="transition hover:text-[#2F80ED]">
                Start a Project
              </a>

              <span>South Florida</span>
              <span>Serving projects nationwide</span>
            </div>
          </div>

        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Mouraxis. All rights reserved.
          </p>

          <p>
            Engineering reality. Digitized with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer