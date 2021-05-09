import React from 'react';

const Hamsters = (props) => {

    return (
        <li>
            <img src={`https://live.staticflickr.com/${props.hamsterPics[0].server}/${props.hamsterPics[0].id}_${props.hamsterPics[0].secret}_w.jpg`} alt={props.hamsterPics[0].title} />
        </li>
    );
}

export default Hamsters;