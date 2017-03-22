import Gallery from '../components/gallery/gallery.js';
import {connect} from 'react-redux';
import action from '../actions';
const {selectMediumAndEmit} = action;

const mapStateToProps = (state) => {
    return {
        media: state.media,
        selectedMedium: state.selectedMedium
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMediumClick: (medium) => {
            dispatch(selectMediumAndEmit(medium));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery);
