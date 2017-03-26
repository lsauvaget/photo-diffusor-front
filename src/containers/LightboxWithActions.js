import {connect} from 'react-redux';
import Lightbox from '../components/lightbox/Lightbox.js';
import {
    closeLightbox,
    imageLoadedInLightbox,
    imageLoadingStartInLightbox,
    toggleFullScreen,
    loadNextMediumAndEmit,
    loadPrevMediumAndEmit
} from '../actions';

const mapStateToProps = (state) => {
    return {
        medium: state.selectedMedium,
        imageLoaded: state.imageLoadedInLightbox,
        fullScreen: state.lightboxFullScreen
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseClick: () => {
            dispatch(closeLightbox());
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
        toggleFullScreen: () => {
            dispatch(toggleFullScreen());
        },
        onImageLoadingStart: () => {
            dispatch(imageLoadingStartInLightbox());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lightbox);

