import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

interface ILayoutProps {
  children: React.ReactNode | React.ReactNode[]
}

const Layout: React.FC<ILayoutProps> = ({children}) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout