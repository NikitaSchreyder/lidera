const HomeMoments: React.FC = () => {
  const title = '#KinnMoments'
  const photos = [
    "/moments/apples.jpg",
    "/moments/food.jpg",
    "/moments/kitchen.jpg",
    "/moments/table.jpg"
  ]

  const renderPhotos = photos.map(item => <img className="moments-photo" src={item} />)
  
  return (
    <div className="moments">
      <p className="moments-title">{title}</p>
      <div className="moments-photos">
        {renderPhotos}
      </div>
    </div>
  )
}

export default HomeMoments