import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import SearchForm from './SearchForm';
import Navigation from './Navigation';
import NotFound from './NotFound';
// eslint-disable-next-line
import apiKey from '../config';
// eslint-disable-next-line
import PhotoContainer from './PhotoContainer';

import Cats from './Results/Cats';
import Dogs from './Results/Dogs';
import Birds from './Results/Birds';
import SearchResults from './Results/SearchResults';

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
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/cats" /> } />
            <Route path="/cats" component={ Cats } />
            <Route path="/dogs" component={ Dogs } />
            <Route path="/birds" component={ Birds } />
            <Route path="/search" component={ SearchResults } />
            <Route component={ NotFound }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
