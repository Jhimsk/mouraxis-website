const processSteps = [
  {
    number: "01",
    title: "Define",
    description:
      "We start with the project question, site conditions, required accuracy, and the decisions the data needs to support.",
  },
  {
    number: "02",
    title: "Capture",
    description:
      "Field information is collected using the appropriate combination of aerial, terrestrial, imaging, and spatial technologies.",
  },
  {
    number: "03",
    title: "Process",
    description:
      "Raw field data is transformed into structured spatial information, models, measurements, and project documentation.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Results are organized into clear, decision-ready deliverables built around how the project team will actually use them.",
  },
]

function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#F5F3EE] py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2F80ED]">
              How We Work
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#081C2C] md:text-6xl">
              Start with the question.
              <br />
              Build the right answer.
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Every project is different. Mouraxis selects the capture,
              processing, and analytical workflow around the information
              the project actually needs.
            </p>
          </div>

        </div>

        {/* Process Steps */}
        <div className="mt-20 grid gap-0 border-y border-slate-300 lg:grid-cols-4">

          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`group relative py-10 lg:px-8 ${
                index !== 0 ? "border-t border-slate-300 lg:border-l lg:border-t-0" : ""
              }`}
            >
              <span className="text-xs font-semibold tracking-[0.2em] text-[#2F80ED]">
                {step.number}
              </span>

              <h3 className="mt-10 text-2xl font-semibold text-[#081C2C]">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {step.description}
              </p>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#2F80ED] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}

        </div>

        {/* Closing statement */}
        <div className="mt-14 flex flex-col gap-6 border-b border-slate-300 pb-14 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              The Objective
            </p>

            <p className="mt-3 max-w-2xl text-xl font-medium leading-8 text-[#081C2C]">
              Less time interpreting disconnected project data.
              More confidence acting on it.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-3 rounded-md bg-[#081C2C] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123B5D]"
          >
            Discuss a Project
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  )
}

export default Process