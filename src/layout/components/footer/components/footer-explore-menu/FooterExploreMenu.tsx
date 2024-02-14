const FooterExploreMenu: React.FC = () => {
  return (
    <div className="footer-explore-menu">
      <p className="footer-explore-menu_title">Explore</p>
      <span className="footer-explore-menu_separator" />
      <ul className="footer-explore-menu-list">
        <li className="footer-explore-menu-list_item">
          <a className="footer-explore-menu-list_item--link" href="#">shop</a>
        </li>
        <li className="footer-explore-menu-list_item">
          <a className="footer-explore-menu-list_item--link" href="#">style quiz</a>
        </li>
        <li className="footer-explore-menu-list_item">
          <a className="footer-explore-menu-list_item--link" href="#">about us</a>
        </li>
        <li className="footer-explore-menu-list_item">
          <a className="footer-explore-menu-list_item--link" href="#">stories</a>
        </li>
      </ul>
    </div>
  )
}

export default FooterExploreMenu