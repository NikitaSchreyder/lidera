import Link from "next/link"

const HeaderLogo: React.FC = () => {
  return (
    <div className="header-logo">
      <Link href={'/'}>
        <img className="header-logo_image" src="/logo/logo.png" alt="logo" />
      </Link>
    </div>
  )
}

export default HeaderLogo