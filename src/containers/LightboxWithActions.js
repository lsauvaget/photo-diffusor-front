import React from 'react';
import {connect} from 'react-redux';
import Lightbox from '../components/lightbox/Lightbox.js';
import {
    closeLightbox,
    imageLoadedInLightbox,
    imageLoadingStartInLightbox,
    enableFullScreen,
    disableFullScreen,
} from '../modules/lightbox.js';

import {
    selectMediumAndEmit,
    unselectMedium,
    getNextMedium, 
    getPrevMedium
} from '../modules/data.js';

import {
    hideFlashCodeButton,
    showFlashCodeButton,
} from '../modules/flashCodeButton.js';

import {
    showFilmStripButton,
    hideFilmStripButton,
} from '../modules/filmStrip.js';

import {getData, getLightboxUi} from '../modules';

const mapStateToProps = (state) => {
    const data = getData(state);
    const {selectedMedium} = data;
    console.log(data.selectedMedium)
    const nextMedium = getNextMedium(data);
    const prevMedium = getPrevMedium(data);
    const { imageLoaded, fullScreen, open } = getLightboxUi(state);
    return {
        nextMedium,
        prevMedium,
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
        select: (medium) => {
            dispatch(selectMediumAndEmit(medium));
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

