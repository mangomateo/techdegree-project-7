import React, { Component } from 'react';
// eslint-disable-next-line
import Photo from './Photo';

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
                </ul>            
            </div>
        );
    }
}

export default PhotoContainer;