import PropTypes from 'prop-types'

const API_KEY = '8741960-90c2aa3d050b5b3c6133ae158';
const BASE_URL = 'https://pixabay.com/api/'

export async function searchImages({ query, page }) {
    const response = await fetch(`${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    if (response.ok) {
        return response.json()
    }
    return await Promise.reject(
        new Error(
            `Nothing with ${query} i could find`
        )
    );
}

searchImages.PropTypes = {
    query: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired
}