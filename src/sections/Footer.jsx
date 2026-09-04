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
              Mouraxis transforms real-world infrastructure into measurable
              digital information through reality capture, geospatial mapping,
              3D modeling, and spatial intelligence.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 hover:text-[#2F80ED]"
            >
              Start a Project
              <span>→</span>
            </a>
          </div>

          {/* Explore */}
          <div>
            <p className="text-sm font-semibold text-white">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <a
                href="#solutions"
                className="transition hover:text-[#2F80ED]"
              >
                Solutions
              </a>

              <a
                href="#industries"
                className="transition hover:text-[#2F80ED]"
              >
                Industries
              </a>

              <a
                href="#projects"
                className="transition hover:text-[#2F80ED]"
              >
                Projects
              </a>

              <a
                href="#technology"
                className="transition hover:text-[#2F80ED]"
              >
                Technology
              </a>
            </div>
          </div>

          {/* Projects + Contact */}
          <div>
            <p className="text-sm font-semibold text-white">
              Connect
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <a
                href="/projects/bridge-001/"
                className="transition hover:text-[#2F80ED]"
              >
                Bridge 001
              </a>

              <a
                href="#contact"
                className="transition hover:text-[#2F80ED]"
              >
                Project Inquiry
              </a>

              <span>South Florida</span>

              <span>
                Serving projects nationwide
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
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