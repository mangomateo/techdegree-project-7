import React from 'react';
import Photo from './Photo';

const PhotoContainer = (props) => {

    const picData = props.photoData;
    const pictures = picData.map( pic => <Photo url={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_w.jpg`} key={pic.id} alt={pic.title}/>);

    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                { pictures }
            </ul>
        </div>
    );
}

export default PhotoContainer;