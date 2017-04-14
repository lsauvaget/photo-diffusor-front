import React from 'react';
import {connect} from 'react-redux';
import Lightbox from '../components/lightbox/Lightbox.js';
import {
    closeLightbox,
    imageLoadedInLightbox,
    imageLoadingStartInLightbox,
    enableFullScreen,
    disableFullScreen,
    loadNextMediumAndEmit,
    loadPrevMediumAndEmit,
    hideFlashCodeButton,
    showFlashCodeButton,
    showFilmStripButton,
    hideFilmStripButton,
    unselectMedium
} from '../actions';

import {getData, getLightboxUi} from '../reducers';

const mapStateToProps = (state) => {
    const {selectedMedium} = getData(state);
    const {imageLoaded, fullScreen, open} = getLightboxUi(state);
    return {
        medium: selectedMedium,
        imageLoaded,
        open,
        fullScreen
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseClick: () => {
            dispatch(closeLightbox());
            dispatch(showFlashCodeButton());
            dispatch(unselectMedium());
            dispatch(showFilmStripButton());
        },
        onImageLoaded: () => {
            dispatch(imageLoadedInLightbox());
        },
        loadNext: () => {
            dispatch(loadNextMediumAndEmit());
        },
        loadPrev: () => {
            dispatch(loadPrevMediumAndEmit());
        },
        enableFullScreen: () => {
            dispatch(enableFullScreen());
            dispatch(hideFlashCodeButton());
            dispatch(hideFilmStripButton());
        },
        disableFullScreen: () => {
            dispatch(disableFullScreen());
            dispatch(showFlashCodeButton());
            dispatch(showFilmStripButton());
        },
        onImageLoadingStart: () => {
            dispatch(imageLoadingStartInLightbox());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)((props) => {
    if(props.medium && props.open) {
        return <Lightbox {...props}/>;
    }
    return null;
});

