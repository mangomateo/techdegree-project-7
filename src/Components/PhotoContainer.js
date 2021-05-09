import React, { Component } from 'react';

import Cats from './Cats';
// import NotFound from './NotFound';

class PhotoContainer extends Component {

    state = {
        searchQuery: ''
    };

    render() {
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                {/* PHOTO COMPONENTS GO HERE */}
                <Cats catPics={ this.props.pics.catPics }/>
    
                {/* IF NO PHOTOS, RETURN THE NOTFOUND COMPONENT */}
                {/* <NotFound /> */}
                </ul>            
            </div>
        );
    }
}

export default PhotoContainer;