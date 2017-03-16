import React, { Component } from 'react';
import './filmStrip.css';
import configs from '../../configs';
import {OPEN_FILMSTRIP, CLOSE_FILMSTRIP, TOGGLE_FILMSTRIP_VISIBILITY} from '../../actions/filmStrip.js';


const defaultState = {
    isOpen: false
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case OPEN_FILMSTRIP:
            return {isOpen: true};
        case CLOSE_FILMSTRIP:
            return {isOpen: false};
        case TOGGLE_FILMSTRIP_VISIBILITY:
            return {isOpen: !state.isOpen};
        default:
            return state;
    }
}

class FilmStrip extends Component {
    state = reducer(undefined, {})

    dispatch(action) {
        this.setState(prevState => reducer(prevState, action));
    }

    clickOnMedium = (medium) => {
        return () => {
            this.props.clickOnFilmStripItem(medium);
        }
    }

    toggleShowFilmStrip = () => {
        this.dispatch({type: TOGGLE_FILMSTRIP_VISIBILITY});
    }

    render() {
        const media = this.props.media;
        const isOpen = this.state.isOpen;
        const filmStripClass = 'FilmStrip ' + (isOpen ? 'FilmStrip--open' : 'FilmStrip--close');
        return (
            <div className={filmStripClass}>
                <div draggable="true" className="FilmStrip__toggle" onTouchStart={this.toggleShowFilmStrip} onMouseEnter={this.toggleShowFilmStrip}> <Toggle/>
                </div>
                {media.length > 0 && media.map((medium, index) => 
                    <div key={index} className="FilmStrip-wrapper__item">
                        <FilmStripItem thumbnail={medium.thumbnail} click={this.clickOnMedium(medium)}/>
                    </div>
                    )}
            </div>
            );
    }
}

const FilmStripItem = (props) => 
        <div onClick={props.click} className="FilmStripItem">
            <img className="FilmStripItem__img" src={`${configs.mediaUrl}${props.thumbnail}`} alt=""/>
        </div>

const Toggle = (props) =>
    <svg className="Toggle" viewBox="3117 2124 656 478">
        <path d="M3204,2352 C3204,2226.63136 3305.63136,2125 3431,2125 C3556.36864,2125 3658,2226.63136 3658,2352 L3204,2352 Z"></path>
        <rect id="Rectangle-4" stroke="none" fill="#C4C4C4" fillRule="evenodd" x="3308" y="2224" width="60" height="60" rx="4"></rect>
        <rect id="Rectangle-4-Copy" stroke="none" fill="#C4C4C4" fillRule="evenodd" x="3402" y="2224" width="60" height="60" rx="4"></rect>
        <rect id="Rectangle-4-Copy-2" stroke="none" fill="#C4C4C4" fillRule="evenodd" x="3495" y="2224" width="60" height="60" rx="4"></rect>
    </svg>

export default FilmStrip;

