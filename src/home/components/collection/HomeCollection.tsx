import HomeCollectionItem from "./components/HomeCollectionItem/HomeCollectionItem"

const HomeCollection: React.FC = () => {
  const title = 'Maple Board Collection'
  const priceFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

  const collectionItems = [
    {
      name: 'Maple Board - Short',
      price: 98,
      photoUrl: '/collection/short.jpg'
    },
    {
      name: 'Maple Board - Long',
      price: 125,
      photoUrl: '/collection/long.jpg'
    },
    {
      name: 'Maple Board - Wide',
      price: 158,
      photoUrl: '/collection/wide.jpg'
    }
  ]

  const renderCollectionItems = collectionItems.map(item => <HomeCollectionItem {...item} price={priceFormat.format(item.price)} />)

  return (
    <div className="collection">
      <p className="collection-title">{title}</p>
      <div className="collection-items">
        {renderCollectionItems}
      </div>
    </div>
  )
}

export default HomeCollection