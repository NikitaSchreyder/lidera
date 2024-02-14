import Link from "next/link"

interface IHomeCollectionItemProps {
  name: string,
  price: string,
  photoUrl: string
}

const HomeCollectionItem: React.FC<IHomeCollectionItemProps> = ({name, photoUrl, price}) => {
  return (
    <Link className="collection-items_item" href={'#'} >
      <img className="collection-items_item-photo" src={photoUrl} alt={name} />
      <p className="collection-items_item-name">{name}</p>
      <p className="collection-items_item-price">{price}</p>
    </Link>
  )
}

export default HomeCollectionItem