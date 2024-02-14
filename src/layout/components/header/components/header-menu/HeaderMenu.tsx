import Link from "next/link"
import { useState } from "react"

const HeaderMenu: React.FC = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false)
  const mobileMenuClassName = mobileMenuVisible && 'header-menu--visible' || ''

  const toggleMobileMenu = () => setMobileMenuVisible(!mobileMenuVisible)

  return (
    <>
      <button className="header-menu_button" onClick={toggleMobileMenu}>
        <span className="header-menu_button-line" />
        <span className="header-menu_button-line" />
        <span className="header-menu_button-line" />
      </button>
      <ul className={`header-menu ${mobileMenuClassName}`}>
        <button className="header-menu_close-button" onClick={toggleMobileMenu}>
          <span className="header-menu_close-button-line" />
          <span className="header-menu_close-button-line" />
        </button>
        <li className="header-menu_item">
          <Link className="header-menu_item-link" href={'/'}>shop</Link>
        </li>
        <li className="header-menu_item">
          <Link className="header-menu_item-link" href={'/'}>Style Quiz</Link>
        </li>
        <li className="header-menu_item">
          <Link className="header-menu_item-link" href={'/'}>About Us</Link>
        </li>
        <li className="header-menu_item">
          <Link className="header-menu_item-link" href={'/'}>Stories</Link>
        </li>
      </ul>
    </>
  )
}

export default HeaderMenu