// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailImageDetails, updateStateValue, isActive} = props

  const {id, thumbnailUrl, thumbnailAltText} = thumbnailImageDetails

  const onClickBtn = () => {
    updateStateValue(id)
  }
  const className = isActive ? '' : 'thumbnail'

  return (
    <li className="list-item">
      <button className="btn" type="button">
        <img
          className={className}
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onClickBtn}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
