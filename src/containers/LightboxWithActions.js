import Lightbox from '../components/lightbox/Lightbox.js';
import {
    closeLightbox,
    loadNextMedium,
    loadPrevMedium,
    imageLoadedInLightbox,
    imageLoadingStartInLightbox,
    toggleFullScreen
} from '../actions/lightbox.js'
import {connect} from 'react-redux';

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
            dispatch(loadNextMedium());
        },
        loadPrev: () => {
            dispatch(loadPrevMedium());
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

