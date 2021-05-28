import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import axios from 'axios';

import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';
import apiKey from '../config';

class App extends Component {

  // Initial application state
  state = {

    // Get request on component mount will populate these three arrays with photo data
    catPhotoData: [],
    dogPhotoData: [],
    birdPhotoData: [],

    // Search related states (will update when user submits a search query)
    searchQuery: '',
    searchPhotoData: [],

    // Boolean state to show/hide loading text between get requests
    isLoading: true
  }

  componentDidMount() {

    // Fetch cat pictures
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&page=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          catPhotoData: response.data.photos.photo,
          isLoading: false
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

  performSearch = (query) => {

    // Set isLoading boolean to true to show Loading... text before results are populated
    this.setState({ isLoading: true});
    
    // Fetch search results, hide Loading test by changing isLoading boolean to false
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({ searchPhotoData: response.data.photos.photo, 
                      searchQuery: query,
                      isLoading: false });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={ this.performSearch } searchData={this.state.searchQuery} />
          <Navigation />
          {
            // Show Loading text if isLoading === true, 
            // otherwise show proper <PhotoContainer /> component
            (this.state.isLoading) 
              ? <p>Loading...</p>
              :  <Switch>
                  <Route exact path="/" render={ () => <Redirect to="/cats" /> } />
                  <Route path="/cats" render={ () => <PhotoContainer photoData={this.state.catPhotoData} /> } />
                  <Route path="/dogs" render={ () => <PhotoContainer photoData={this.state.dogPhotoData} /> } />
                  <Route path="/birds" render={ () => <PhotoContainer photoData={this.state.birdPhotoData} /> } />
                  <Route path="/search/:query" render={ () => <PhotoContainer 
                                                                photoData={this.state.searchPhotoData} 
                                                                searchQuery={this.state.searchQuery} 
                                                                newSearch={this.performSearch}
                                                              /> } />
                  <Route component={ NotFound }/>
                </Switch>
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
