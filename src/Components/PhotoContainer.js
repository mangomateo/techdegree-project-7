import React from 'react';

import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = () => {
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
            {/* PHOTO COMPONENTS GO HERE */}
            <Photo />

            {/* IF NO PHOTOS, RETURN THE NOTFOUND COMPONENT */}
            <NotFound />
            </ul>            
        </div>
    );
}

export default PhotoContainer;