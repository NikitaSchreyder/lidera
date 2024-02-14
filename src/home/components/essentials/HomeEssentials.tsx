const HomeEssentials: React.FC = () => {
  const title = 'THE ESSENTIALS'
  const subtitle = 'We believe minimalism means more. More space, more time, more meaningful moments.'

  return (
    <div className="essentials">
      <div className="essentials-content">
        <p className="essentials-content_title">{title}</p>
        <p className="essentials-content_subtitle">{subtitle}</p>
      </div>
    </div>
  )
}

export default HomeEssentials