import React from 'react';
import './filmStrip.css';
import configs from '../../configs';

const FilmStrip = ({media, isOpen, closeFilmStrip, openFilmStrip, onMediumClick}) => {
    const filmStripClass = 'FilmStrip ' + (isOpen ? 'FilmStrip--open' : 'FilmStrip--close');
    const toggleFilmStripOpening = () => isOpen ? closeFilmStrip() : openFilmStrip();
    return (
    <div className={filmStripClass}>
        <div draggable="true" 
            className="FilmStrip__toggle" 
            onTouchStart={toggleFilmStripOpening} 
            onMouseEnter={toggleFilmStripOpening}> 
            <Toggle/>
        </div>
        {media.length > 0 && media.map((medium, index) => 
        <div key={index} className="FilmStrip-wrapper__item">
            <FilmStripItem thumbnail={medium.thumbnail} onClick={() => onMediumClick(medium)}/>
        </div>
        )}
    </div>
    )
}

const FilmStripItem = (props) => 
        <div onClick={props.onClick} className="FilmStripItem">
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

