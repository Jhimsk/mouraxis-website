function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#081C2C] py-28 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">

        {/* Left side */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2F80ED]">
            Start a Project
          </p>

          <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Let’s turn your project into
            <br />
            decision-ready intelligence.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Tell us what you’re working on, what needs to be understood, and
            what decisions the project team needs to make. Mouraxis will help
            define the right capture, analysis, and delivery workflow.
          </p>

          <div className="mt-10 space-y-4 text-sm text-slate-300">
            <p>
              <span className="font-semibold text-white">Typical inquiries:</span>
            </p>

            <p>Reality capture and digital documentation</p>
            <p>Geospatial mapping and spatial analysis</p>
            <p>Construction monitoring and field intelligence</p>
            <p>Digital twins and asset documentation</p>
          </div>
        </div>

        {/* Right side */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur md:p-10">

          <form className="grid gap-6">

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#2F80ED]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Company
                </label>

                <input
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#2F80ED]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email
              </label>

              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#2F80ED]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Project Type
              </label>

              <select
                className="w-full rounded-xl border border-white/10 bg-[#10283D] px-4 py-3.5 text-white outline-none transition focus:border-[#2F80ED]"
              >
                <option>Reality Capture</option>
                <option>Geospatial Intelligence</option>
                <option>Construction Monitoring</option>
                <option>Digital Twin</option>
                <option>Structural Documentation</option>
                <option>Asset Intelligence</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Project Details
              </label>

              <textarea
                rows="5"
                placeholder="Tell us about the project, location, objectives, and timeline."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#2F80ED]"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-fit items-center gap-3 rounded-md bg-[#2F80ED] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#246FCB]"
            >
              Submit Project Inquiry
              <span>→</span>
            </button>

          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact
