import React, { Component } from 'react';

import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
import apiKey from '../config';

class App extends Component {

  state = {
    photoData: []
  }

  render() {
    return (
      <div className="container">
        <SearchForm />
        <Navigation />
        <PhotoContainer />
      </div>
    );
  }
}

export default App;
