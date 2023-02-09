import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export function ImageGallery({items, onClick}) {
    return (<ul className="gallery">
        {items.map(item => (
            <ImageGalleryItem key={item.id} item = {item} onClick={onClick} />
        ))}
</ul>)
}