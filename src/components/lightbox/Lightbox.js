import React, { Component } from 'react';
import './Lightbox.css';
import Loader from '../loader/Loader.js';
import TouchWrapper from '../TouchWrapper.js';

class Lightbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLoaded: false
        };
    }

    componentWillReceiveProps(props) {
        if(props.fullSize !== this.props.fullSize) {
            this.setState({
                imageLoaded: false
            });
        } 
    }

    imageLoaded = () => {
        return this.setState({
            imageLoaded: true
        });
    }

    toggleFullScreen = () => {
        const newFullScreenState = !this.state.fullScreen;
        this.props.toggleFullScreen(newFullScreenState);
        this.setState({
            fullScreen: newFullScreenState
        });
    }

    render() {
        const props = this.props;
        let imageClass = 'Lightbox__wrapper__img';
        imageClass += this.state.imageLoaded ? ' Lightbox__wrapper__img--loaded' : '' ;
        imageClass += this.state.fullScreen ? ' Lightbox__wrapper__img--fullScreen' : '';
        return (
            <div className="Lightbox">
                <TouchWrapper
                    click={this.toggleFullScreen}
                    moveLeft={this.props.loadPrev}
                    moveRight={this.props.loadNext} >
                    <div className="Lightbox__wrapper">
                        {props.clickOnCloseButton && this.state.imageLoaded && !this.state.fullScreen &&
                        <div className="Lightbox__wrapper__actions">
                            <div className="Lightbox__wrapper__actions__close">
                                <Cross click={props.clickOnCloseButton}/>
                            </div>
                            <div className="Lightbox__wrapper__actions__arrow Lightbox__wrapper__actions__arrow-left">
                                <LeftArrow click={props.loadPrev}/>
                            </div>
                            <div className="Lightbox__wrapper__actions__arrow Lightbox__wrapper__actions__arrow-right">
                                <RightArrow click={props.loadNext}/>
                            </div>
                        </div>}
                        {!this.state.imageLoaded && <Loader/>}
                        <img  onLoad={this.imageLoaded} className={imageClass} src={props.fullSize} alt=""/>
                    </div>
                </TouchWrapper>
                <div onClick={props.clickOnCloseButton && props.clickOnCloseButton} className="Lightbox__overlay"></div>
            </div>
            )
    }
}

const RightArrow = (props) => 
   <svg onClick={props.click} className="Arrow" viewBox="0 0 20 20" width="1em">
        <path d="M0 0 L10 10 L0 20" fill="none" stroke="black"></path>
        </svg>


const LeftArrow = (props) => 
   <svg onClick={props.click} className="Arrow"  viewBox="0 0 20 20">
        <path d="M20 0 L10 10 L20 20" fill="none" stroke="black"></path>
        </svg>

const Cross = (props) => 
    <svg onClick={props.click} className="cross" viewBox="800 2963 400 318">
        <path d="M943.431458,3122 L850.098984,3215.33247 C839.1576,3226.27386 839.161281,3244.00399 850.099167,3254.94188 L867.058121,3271.90083 C877.992986,3282.8357 895.729742,3282.8388 906.667527,3271.90102 L1000,3178.56854 L1093.33247,3271.90102 C1104.27386,3282.8424 1122.00399,3282.83872 1132.94188,3271.90083 L1149.90083,3254.94188 C1160.8357,3244.00701 1160.8388,3226.27026 1149.90102,3215.33247 L1056.56854,3122 L1149.90102,3028.66753 C1160.8424,3017.72614 1160.83872,2999.99601 1149.90083,2989.05812 L1132.94188,2972.09917 C1122.00701,2961.1643 1104.27026,2961.1612 1093.33247,2972.09898 L1000,3065.43146 L906.667527,2972.09898 C895.726142,2961.1576 877.996007,2961.16128 867.058121,2972.09917 L850.099167,2989.05812 C839.164302,2999.99299 839.161199,3017.72974 850.098984,3028.66753 L943.431458,3122 Z"></path>
    </svg>

export default Lightbox;
