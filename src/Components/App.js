import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// App component imports
import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';
// import apiKey from '../config';

class App extends Component {

  state = {
    photoData: []
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm />
          <Navigation />
          <Route exact path="/" component={ PhotoContainer } />
          <Route path="/error" component={ NotFound } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
