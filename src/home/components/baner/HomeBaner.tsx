const HomeBaner: React.FC = () => {
  const title = 'ALL COLLECTIONS'
  const subtitle = 'Elevate Your Everyday'

  return (
    <div className="baner">
      <div className="baner-content">
        <p className="baner-content_title">{title}</p>
        <p className="baner-content_subtitle">{subtitle}</p>
        <button className="baner-content_button">SHOP NOW</button>
      </div>
    </div>
  )
}

export default HomeBaner