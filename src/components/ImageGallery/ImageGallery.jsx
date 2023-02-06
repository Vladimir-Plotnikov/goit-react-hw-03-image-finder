import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export function ImageGallery({items}) {
    return (<ul className="gallery">
        {items.map(item => (
            <ImageGalleryItem key={item.id} item = {item} />
        ))}
</ul>)
}