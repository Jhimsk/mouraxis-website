import LogoMark from "./LogoMark.jsx"

function Navbar() {
  const navLinks = [
    { label: "Solutions", href: "#solutions" },
    { label: "Industries", href: "#industries" },
    { label: "Projects", href: "#projects" },
    { label: "Technology", href: "#technology" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#F5F3EE]/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        {/* Mouraxis Logo */}
        <a
          href="/"
          className="flex items-center"
          aria-label="Mouraxis home"
        >
          <LogoMark className="h-14 w-auto md:h-24" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-200 hover:text-[#2F80ED]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <a
          href="#contact"
          className="rounded-full bg-[#081C2C] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#123B5D] md:px-6"
        >
          Start a Project
        </a>
      </nav>
    </header>
  )
}

export default Navbar