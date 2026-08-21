import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "Reality Capture",
    details: "",
  })

  const [status, setStatus] = useState("idle")
  const [message, setMessage] = useState("")

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setMessage("")

    if (!formData.name.trim()) {
      setStatus("error")
      setMessage("Please enter your name.")
      return
    }

    if (!formData.email.trim()) {
      setStatus("error")
      setMessage("Please enter your email address.")
      return
    }

    if (!formData.details.trim()) {
      setStatus("error")
      setMessage("Please tell us a little about your project.")
      return
    }

    setStatus("loading")

    try {
      // Temporary front-end simulation.
      // We will replace this with the real Mouraxis form endpoint.
      await new Promise((resolve) => setTimeout(resolve, 900))

      setStatus("success")
      setMessage(
        "Thanks — your project inquiry has been received. We’ll be in touch soon."
      )

      setFormData({
        name: "",
        company: "",
        email: "",
        projectType: "Reality Capture",
        details: "",
      })
    } catch {
      setStatus("error")
      setMessage(
        "Something went wrong. Please try again or contact Mouraxis directly."
      )
    }
  }

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
              <span className="font-semibold text-white">
                Typical inquiries:
              </span>
            </p>

            <p>Reality capture and digital documentation</p>
            <p>Geospatial mapping and spatial analysis</p>
            <p>Construction monitoring and field intelligence</p>
            <p>Digital twins and asset documentation</p>
          </div>
        </div>

        {/* Right side */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur md:p-10">

          <form onSubmit={handleSubmit} className="grid gap-6">

            <div className="grid gap-6 md:grid-cols-2">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#2F80ED]"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Company
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company name"
                  autoComplete="organization"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#2F80ED]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                autoComplete="email"
                className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#2F80ED]"
              />
            </div>

            {/* Project Type */}
            <div>
              <label
                htmlFor="projectType"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Project Type
              </label>

              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
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

            {/* Project Details */}
            <div>
              <label
                htmlFor="details"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Project Details
              </label>

              <textarea
                id="details"
                name="details"
                rows="5"
                value={formData.details}
                onChange={handleChange}
                placeholder="Tell us about the project, location, objectives, and timeline."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-[#2F80ED]"
              />
            </div>

            {/* Status message */}
            {message && (
              <div
                className={`rounded-xl border px-4 py-3 text-sm ${
                  status === "success"
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                    : "border-red-400/30 bg-red-400/10 text-red-300"
                }`}
              >
                {message}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 inline-flex w-fit items-center gap-3 rounded-md bg-[#2F80ED] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#246FCB] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === "loading"
                ? "Submitting..."
                : "Submit Project Inquiry"}

              {status !== "loading" && <span>→</span>}
            </button>

          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact