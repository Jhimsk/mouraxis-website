function TechBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#2F80ED]/20 bg-[#2F80ED]/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#2F80ED]">
      {children}
    </span>
  )
}

export default TechBadge