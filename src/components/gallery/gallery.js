import React, { Component } from 'react';
import './gallery.css';
import Item from '../item/Item.js';
import Lightbox from '../lightbox/Lightbox.js';
import FilmStrip from '../filmStrip/filmStrip.js';
import configs from '../../configs';
import withKeyPress from '../withKeyPress.js';


const getIdxOfSelectedMedium = (state) => {
    const selectedMedium = state.selectedMedium;
    const media = state.media;
    const idx = media.indexOf(selectedMedium);
    return idx;
};

const reducer = (state = {selectedMedium: null, media: []}, action) => {
    switch (action.type) {
        case 'SELECT_MEDIUM':
            return {selectedMedium: action.token.selectedMedium};
        case 'CLOSE_LIGHTBOX':
            return {selectedMedium: null};
        case 'LOAD_NEXT_IMAGE':
            {
                const idx = getIdxOfSelectedMedium(state);
                return {selectedMedium: idx < state.media.length ? state.media[idx + 1] : state.media[0]};
            }
        case 'LOAD_PREV_IMAGE':
            {
                const idx = getIdxOfSelectedMedium(state);
                return {selectedMedium: idx - 1 > 0 ? state.media[idx - 1] : state.media[state.media.length - 1]};
            }
        default: 
            return state;
    }
}

class Gallery extends Component {
    state = reducer(undefined, {})

    dispatch(action) {
        this.setState(prevState => reducer(prevState, action));
    }

    componentWillReceiveProps(props) {
        if(this.props.media !== props.media) {
            this.setState({
                media: props.media
            });
        }
        if (props.keypress === 37) {
            this.loadPrev();
        }
        if (props.keypress === 39) {
            this.loadNext();
        }
    }

    clickOnMedium = (medium) => {
        this.dispatch({type: 'SELECT_MEDIUM', token: {selectedMedium: medium}})
    }

    closeLightbox = () => {
        this.dispatch({type: 'CLOSE_LIGHTBOX'});
    }

    loadNext = () => {
        this.dispatch({type: 'LOAD_NEXT_IMAGE'});
    }

    loadPrev = () => {
        this.dispatch({type: 'LOAD_PREV_IMAGE'});
    }

    render() {
        const media = this.props.media;
        const selectedMedium = this.state.selectedMedium;
        const classOnItemWrapper = `Gallery__item-wrapper ${selectedMedium ? 'Gallery__item-wrapper--blurred' : ''}`
        return (
            <div className="Gallery">
                {selectedMedium && 
                <div className="Gallery__filmStrip">
                    <FilmStrip clickOnFilmStripItem={this.clickOnMedium} media={media}/>
                </div> }
                {selectedMedium && 
                <Lightbox 
                    loadNext={this.loadNext}
                    loadPrev={this.loadPrev}
                    clickOnCloseButton={this.closeLightbox} 
                    fullSize={`${configs.mediaUrl}${selectedMedium.fullSize}`}/>}
                <div className={classOnItemWrapper}>
                    {media.length > 0 && media.map((medium, index) => 
                    <div onClick={this.clickOnMedium.bind(this, medium)} key={index} className="Gallery__item-wrapper__item">
                        <Item thumbnail={`${configs.mediaUrl}${medium.thumbnail}`} label={medium.name}></Item>
                    </div>
                    )}
                </div>
            </div>
            );
    }
}

export default withKeyPress(Gallery);

