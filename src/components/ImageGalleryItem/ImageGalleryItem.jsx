import PropTypes from 'prop-types'
import { func } from 'prop-types'
import { ImageGalleryItemWrapper } from "./ImmageGalleryItem.styled"

export function ImageGalleryItem({
    item: { webformatURL, largeImageURL, tags },
    onClick,
}) {

return(  

<ImageGalleryItemWrapper
        
    onClick={() => onClick(largeImageURL)}>
    <img
        src={webformatURL}
        alt={tags} />
        
</ImageGalleryItemWrapper>)
}

ImageGalleryItem.protoTypes = {
    src: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: func.isRequired
}