import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F5F3EE]">
        <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-6 lg:px-8">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F80ED]">
              Infrastructure Intelligence
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-[#081C2C] md:text-7xl">
              See every project with complete confidence.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
              Mouraxis transforms complex field data into clear, actionable
              infrastructure intelligence for owners, contractors, and project teams.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default App