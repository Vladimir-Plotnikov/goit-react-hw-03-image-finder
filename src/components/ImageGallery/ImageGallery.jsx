import PropTypes from 'prop-types'
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryWrapper } from "./ImageGallery.styled"

export function ImageGallery({ items, onClick }) {

return (

<ImageGalleryWrapper>
        {items.map(item => (
            <ImageGalleryItem
                key={item.id}
                item={item}
                onClick={onClick} />
        ))}
</ImageGalleryWrapper>)
}

ImageGallery.propTypes = {
  
items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};