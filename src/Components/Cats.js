import React, { Component } from 'react';

class Cats extends Component {

    state = {
        catPics: this.props.catPics
    }

    componentDidMount() {
        const setImage = () => {
            let image = <img src={`https://live.staticflickr.com/${this.props.catPics[0].server}/${this.props.catPics[0].id}_${this.props.catPics[0].secret}_w.jpg`} alt="" />
            return image;
        }
        setImage();
    }

    render() {
        return (
            <li>
                { this.setImage }
            </li>
        );
    }
    
}

export default Cats;