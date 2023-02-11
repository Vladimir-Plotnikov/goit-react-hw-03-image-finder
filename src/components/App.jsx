import { Component } from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { Button } from "./Button/Button";
import { Hearts } from "react-loader-spinner";
import { Modal } from "./Modal/Modal";
import { searchImages } from "services/API";

import { Wrapper, HeartsWrapper, ShitySearch } from "./App.styled";

// const API_KEY = '8741960-90c2aa3d050b5b3c6133ae158';

export class App extends Component{

state = {
    page: 1,
    query: '',
    images: [],
    loading: false,
    largeImage: '',
    total:0,
    status:'empty'
}
  

loadMore = () => {
    this.setState(
      prevState => ({
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

  this.setState({loading:true})
  searchImages({ query: this.state.query, page: this.state.page })
    .then(({ totalHits, hits }) => {
      if (totalHits) {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          total: totalHits,
          status: 'wellDone',
        }))
      } else {
        this.setState(
          {status: 'fail'}
        )
      }
    }).then(() => this.setState({ loading: false }))
    .catch(error => this.setState({ error, status: 'fail' }))
       
  }
}

openModal = image => {
this.setState({largeImage: image})  
}
  
closeModal = () => {
this.setState({largeImage: ''})  
}
  
render() {
  const { images, loading, largeImage, total, status, query, page } = this.state;
  const totalPage = total / (page * images.length); 
  if (status==='empty') {
    return (
      <Wrapper>
      <Searchbar onSubmit={this.handleFormSubmit} />
      <h1>TRY TO <ShitySearch>SEARCH</ShitySearch> SOMETHING!</h1>
      </Wrapper>
  )
  }
  if (status === 'fail') {
    return (
      <Wrapper>
      <Searchbar onSubmit={this.handleFormSubmit} />
      <h1>Nothing with <ShitySearch>{query}</ShitySearch> i could find!</h1>
      </Wrapper> )
  }
  if (status === 'wellDone') {
    return (
      <Wrapper>
    <Searchbar onSubmit={this.handleFormSubmit} />
       <HeartsWrapper>
        {loading &&
            <Hearts 
            height="300"
            width="300"
            color="#3f51b5"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />}
        </HeartsWrapper> 
        {images.length > 0 && <ImageGallery items={images} onClick={this.openModal} />}
        {totalPage>1 && <Button onClick={this.loadMore} />}
        {largeImage.length > 0 && ( <Modal image ={largeImage} onClose={this.closeModal} />)}
    </Wrapper>)
    
  }
}
};
 