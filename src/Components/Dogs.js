import React from 'react';

const Dogs = (props) => {

    let photo = props.dogPics[0];

    return (
        <li>
            <img src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_w.jpg`} alt="" />
        </li>
    );
}

export default Dogs;