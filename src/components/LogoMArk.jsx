function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="24"
        y="24"
        width="16"
        height="16"
        stroke="currentColor"
        strokeWidth="3"
      />

      <rect
        x="29"
        y="29"
        width="6"
        height="6"
        fill="#2F80ED"
      />

      <path d="M32 4V19" stroke="currentColor" strokeWidth="3" />
      <path d="M32 45V60" stroke="currentColor" strokeWidth="3" />
      <path d="M4 32H19" stroke="currentColor" strokeWidth="3" />
      <path d="M45 32H60" stroke="currentColor" strokeWidth="3" />

      <path
        d="M27 18L32 13L37 18"
        stroke="#2F80ED"
        strokeWidth="3"
        strokeLinecap="square"
      />

      <path d="M10 28V36" stroke="currentColor" strokeWidth="2" />
      <path d="M54 28V36" stroke="currentColor" strokeWidth="2" />
      <path d="M28 10H36" stroke="currentColor" strokeWidth="2" />
      <path d="M28 54H36" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export default LogoMark