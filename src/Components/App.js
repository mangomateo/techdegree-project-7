import React from 'react';

import SearchForm from './SearchForm';
import Navigation from './Navigation';
import PhotoContainer from './PhotoContainer';

const App = () => {
  return (
    <div className="container">
      <SearchForm />
      <Navigation />
      <PhotoContainer />
    </div>
  );
}

export default App;
