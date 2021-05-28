import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component {

    state = {
        flavorOfTheWeek: 'orange'
    }

    // This function recieves an array of pictures fetched 
    // from the API and returns a <Photo /> component for 
    // each item in the array
    getPictures() {
        let pictures = this.props.photoData.map( pic => 
            <Photo 
                url={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_w.jpg`} 
                key={pic.id} 
                alt={pic.title}
            />
        );

        return pictures;
    }

    // Render the photo components created by this.getPictures() or 
    // if the array is empty render <NotFound />
    render() {
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    { (this.props.photoData.length > 0) ? this.getPictures() : <NotFound /> }
                </ul>
            </div>
        );
    }
    
}

export default withRouter(PhotoContainer);