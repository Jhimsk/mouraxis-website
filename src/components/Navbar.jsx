import LogoMark from "./LogoMark.jsx"

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#F5F3EE]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Primary Mouraxis Logo */}
        <a href="/" className="flex items-center">
  <LogoMark className="h-14 w-auto md:h-24" />
</a>

        {/* Navigation */}
        <div className="hidden items-center gap-9 text-sm font-medium text-slate-700 md:flex">
          <a
            href="#solutions"
            className="transition-colors duration-200 hover:text-[#2F80ED]"
          >
            Solutions
          </a>

          <a
            href="#industries"
            className="transition-colors duration-200 hover:text-[#2F80ED]"
          >
            Industries
          </a>

          <a
            href="#projects"
            className="transition-colors duration-200 hover:text-[#2F80ED]"
          >
            Projects
          </a>

          <a
            href="#technology"
            className="transition-colors duration-200 hover:text-[#2F80ED]"
          >
            Technology
          </a>

          <a
            href="#about"
            className="transition-colors duration-200 hover:text-[#2F80ED]"
          >
            About
          </a>

          <a
            href="#contact"
            className="transition-colors duration-200 hover:text-[#2F80ED]"
          >
            Contact
          </a>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="rounded-full bg-[#081C2C] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#123B5D]"
        >
          Start a Project
        </a>

      </nav>
    </header>
  )
}

export default Navbar
