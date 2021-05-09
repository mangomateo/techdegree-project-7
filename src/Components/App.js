import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

// App component imports
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';
import apiKey from '../config';

class App extends Component {

  state = {
    catPics: [],
    dogPics: [],
    hamsterPics: []
  }

  componentDidMount() {

    // Request cat pics
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&is_getty=true&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ catPics: response.data.photos.photo })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

    // Request dog pics
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&is_getty=true&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ dogPics: response.data.photos.photo })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

    // Request hamster pics
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=hamster&is_getty=true&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ hamsterPics: response.data.photos.photo })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Navigation />
          <Route exact path="/" render={ () => <PhotoContainer pics={ this.state } /> } />
          <Route path="/error" component={ NotFound } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
