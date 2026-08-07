function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#F5F3EE]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        <a
          href="/"
          className="text-xl font-semibold tracking-[0.22em] text-[#081C2C]"
        >
          MOURA<span className="text-[#2F80ED]">X</span>IS
        </a>

        <div className="hidden items-center gap-9 text-sm font-medium text-slate-700 md:flex">
          <a href="#solutions" className="transition hover:text-[#2F80ED]">
            Solutions
          </a>

          <a href="#industries" className="transition hover:text-[#2F80ED]">
            Industries
          </a>

          <a href="#projects" className="transition hover:text-[#2F80ED]">
            Projects
          </a>

          <a href="#technology" className="transition hover:text-[#2F80ED]">
            Technology
          </a>

          <a href="#contact" className="transition hover:text-[#2F80ED]">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-md bg-[#081C2C] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#123B5D]"
        >
          Start a Project
        </a>

      </nav>
    </header>
  )
}

export default Navbar