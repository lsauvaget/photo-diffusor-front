import React from 'react';
import {connect} from 'react-redux';
import Lightbox from '../components/lightbox/Lightbox.js';
import {
    imageLoadedInLightbox,
    imageLoadingStartInLightbox,
    enableFullScreen,
    disableFullScreen,
} from '../modules/lightbox.js';

import { selectMediumAndEmit, unselectMedium} from '../modules/data.js';

import {getData, getLightboxUi} from '../modules';

const mapStateToProps = (state) => {
    return {
        ...getLightboxUi(state),
        ...getData(state),
    }
};

const mapDispatchToProps = {
    onCloseClick: unselectMedium,
    onImageLoaded: imageLoadedInLightbox,
    onSelect: selectMediumAndEmit,
    enableFullScreen: enableFullScreen,
    disableFullScreen: disableFullScreen,
    onImageLoadingStart: imageLoadingStartInLightbox
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lightbox);

