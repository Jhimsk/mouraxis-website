import mouraxisLogo from "../assets/logo/mouraxis-logo-horizontal.png"

function LogoMark({ className = "h-12 w-auto" }) {
  return (
    <img
      src={mouraxisLogo}
      alt="Mouraxis Infrastructure Intelligence"
      className={className}
    />
  )
}

export default LogoMark