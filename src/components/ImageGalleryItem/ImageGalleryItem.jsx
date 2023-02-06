export function ImageGalleryItem({item:{webformatURL,tags}}) {
return(  <li className="gallery-item">
    <img src={webformatURL}
        alt={tags} />
</li>)
}