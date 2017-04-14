import Gallery from '../components/gallery/gallery.js';
import {connect} from 'react-redux';
import {
    selectMedium, 
    openLightbox,
    ioSelectMedium
} from '../actions';
import {getData} from '../reducers';

const mapStateToProps = (state) => {
    const {media, selectedMedium} = getData(state);
    return { media, selectedMedium };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMediumClick: (medium) => {
            dispatch(selectMedium(medium));
            dispatch(ioSelectMedium(medium));
            dispatch(openLightbox());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);
