export function ImageGalleryItem({
    item: { webformatURL, largeImageURL, tags },
    onClick,
}) {
return(  
<li
        className="gallery-item"
        onClick={() => onClick(largeImageURL)}>
    
        <img src={webformatURL} alt={tags} />
</li>)
}