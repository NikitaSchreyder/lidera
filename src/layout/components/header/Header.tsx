import HeaderMenu from "./components/header-menu/HeaderMenu"
import HeaderLogo from "./components/header-logo/HeaderLogo"
import HeaderActions from "./components/header-actions/HeaderActions"

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-colored-line"></div>
      <div className="header-content">
        <HeaderMenu />
        <HeaderLogo />
        <HeaderActions />
      </div>
    </header>
  )
}

export default Header