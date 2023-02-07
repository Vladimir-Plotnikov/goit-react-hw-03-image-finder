import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { Button } from "./Button/Button";

const API_KEY = '8741960-90c2aa3d050b5b3c6133ae158';
// const API_PAGE = this.state.page;
// const API_QUERY = this.state.query;

export class App extends Component{

  state = {
    page: 1,
    query: '',
    images: [],
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page+1
    }))
  }

handleFormSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim().toLowerCase();

    if (!query) {
      alert('Saerch Empty')
      return;
    }

    this.setState({
     page: 1,
     query,
     images: [],
    })

    e.target.reset();
  }

componentDidUpdate(prevProps, prevState) {

if (
  prevState.page !== this.state.page ||
  prevState.query !== this.state.query
) {
  
  fetch(`https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(res => res.json())
    .then(images => this.setState({ images:[...images.hits] }))
       
  
  }
}
  
render() {

  const { images, page } = this.state;
    
    return (
    <div>
    <Searchbar onSubmit ={this.handleFormSubmit} />
        {images.length > 0 && <ImageGallery items={images} />}
        {images.length>11 && <Button onClick={this.loadMore}/>}
    </div>
  )}
};