interface IFloatImageProps {
  title: string
  text: string
  image: string
  squareImage?: boolean
  imagePosition?: 'left' | 'right'
}

const FloatImage: React.FC<IFloatImageProps> = ({ imagePosition = 'left', text, title, image, squareImage }) => {
  return (
    <div className="float-image">
      <div className="float-image_content">
        <img className={`float-image_content-image ${imagePosition == 'left' ? 'float-image_content-image--left' : 'float-image_content-image--right'} ${squareImage && 'float-image_content-image--square' || ''}`} src={image} />
        <div className={`float-image_content-text ${imagePosition == 'left' ? 'float-image_content-text--right' : 'float-image_content-text--left'}`}>
          <p className="float-image_content-text_title">{title}</p>
          <span className="float-image_content-text_separator"></span>
          <p className="float-image_content-text_subtitle">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default FloatImage