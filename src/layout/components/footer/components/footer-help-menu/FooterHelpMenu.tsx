const FooterHelpMenu: React.FC = () => {
  return (
    <div className="footer-help-menu">
      <p className="footer-help-menu_title">Help</p>
      <span className="footer-help-menu_separator" />
      <ul className="footer-help-menu-list">
        <li className="footer-help-menu-list_item">
          <a className="footer-help-menu-list_item--link" href="#">FAQs + Shipping</a>
        </li>
        <li className="footer-help-menu-list_item">
          <a className="footer-help-menu-list_item--link" href="#">Contact</a>
        </li>
        <li className="footer-help-menu-list_item">
          <a className="footer-help-menu-list_item--link" href="#">Terms</a>
        </li>
        <li className="footer-help-menu-list_item">
          <a className="footer-help-menu-list_item--link" href="#">Trade</a>
        </li>
      </ul>
    </div>
  )
}

export default FooterHelpMenu