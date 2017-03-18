import Gallery from '../components/gallery/gallery.js';
import {selectMedium} from '../actions/gallery.js';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        media: state.media,
        selectedMedium: state.selectedMedium
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMediumClick: (medium) => {
            dispatch(selectMedium(medium));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);
