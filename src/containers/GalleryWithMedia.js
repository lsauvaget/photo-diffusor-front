import Gallery from '../components/gallery/gallery.js';
import {connect} from 'react-redux';
import {getData} from '../features/gallery';
import {actions as dataActions} from '../features/gallery/data';
import {actions as lightboxActions} from '../features/gallery/ui/lightbox';

const mapStateToProps = (state) => {
    const {media, selectedMedium} = getData(state);
    return { media, selectedMedium };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMediumClick: (medium) => {
            dispatch(dataActions.selectMedium(medium));
            dispatch(dataActions.ioSelectMedium(medium));
            dispatch(lightboxActions.openLightbox());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);
