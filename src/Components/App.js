import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';
import apiKey from '../config';

class App extends Component {

  state = {
    catPhotoData: [],
    dogPhotoData: [],
    birdPhotoData: [],
    searchPhotoData: []
  }

  componentDidMount() {

    // Fetch cat pictures
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          catPhotoData: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

      // Fetch dog pictures
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&page=1&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            dogPhotoData: response.data.photos.photo
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });

      // Fetch bird pictures
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=birds&per_page=24&page=1&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            birdPhotoData: response.data.photos.photo
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
  }

  performSearch(query) {
    // Fetch search results
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => {
      
      // TESTING TO SEE IF GET REQUEST SUCCESSFULLY RETURNS DATA
      console.log(response.data.photos.photo)

      // THIS CURRENTLY DOES NOT UPDATE STATE
      this.setState({ searchPhotoData: response.data.photos.photo });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={ this.performSearch }/>
          <Navigation />
          <Switch>
            <Route exact path="/" render={ () => <PhotoContainer photoData={this.state.catPhotoData} />} />
            <Route path="/cats" render={ () => <PhotoContainer photoData={this.state.catPhotoData} /> } />
            <Route path="/dogs" render={ () => <PhotoContainer photoData={this.state.dogPhotoData} /> } />
            <Route path="/birds" render={ () => <PhotoContainer photoData={this.state.birdPhotoData} /> } />
            <Route component={ NotFound }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
