import React, { Component } from 'react';
import './Lightbox.css';
import Loader from '../loader/Loader.js';

class Lightbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false
        };
    }

    imageLoaded = () => {
        console.log('loaded')
        return this.setState({
            imageLoaded: true
        });
    }

    render() {
        const props = this.props;
        const imageClass = `${this.state.imageLoaded ? 'Lightbox__wrapper__img--loaded' : ''} Lightbox__wrapper__img`;
        return (
            <div className="Lightbox">
                <div className="Lightbox__wrapper">
                    {props.clickOnCloseButton && 
                    <div onClick={props.clickOnCloseButton} className="Lightbox__wrapper__close">Close</div>}
                    {!this.state.imageLoaded &&
                        <Loader/>}
                    <img onLoad={this.imageLoaded} className={imageClass} src={props.fullSize} alt=""/>
                </div>
                <div onClick={props.clickOnCloseButton && props.clickOnCloseButton} className="Lightbox__overlay"></div>
            </div>
            )
    }
}

export default Lightbox;
