import FooterInfo from "./components/footer-info/FooterInfo"
import FooterExploreMenu from "./components/footer-explore-menu/FooterExploreMenu"
import FooterHelpMenu from "./components/footer-help-menu/FooterHelpMenu"
import FooterSocial from "./components/footer-social/FooterSocial"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <FooterInfo />
        <FooterExploreMenu />
        <FooterHelpMenu />
        <FooterSocial />
      </div>
    </footer>
  )
}

export default Footer