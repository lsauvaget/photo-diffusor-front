import {connect} from 'react-redux';
import Lightbox from '../components/lightbox/Lightbox.js';
import {actions as lightboxActions} from '../features/gallery/ui/lightbox';
import {actions as dataActions} from '../features/gallery/data';
import {getData, getLightboxUi} from '../features/gallery';

const mapStateToProps = (state) => {
    return {
        ...getLightboxUi(state),
        ...getData(state),
    }
};

const mapDispatchToProps = {
    onCloseClick: dataActions.unselectMedium,
    onImageLoaded: lightboxActions.imageLoadedInLightbox,
    onSelect: dataActions.selectMediumAndEmit,
    enableFullScreen: lightboxActions.enableFullScreen,
    disableFullScreen: lightboxActions.disableFullScreen,
    onImageLoadingStart: lightboxActions.imageLoadingStartInLightbox
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lightbox);

