import FilmStrip from '../components/filmStrip/filmStrip.js';
import {connect} from 'react-redux';
import {toggleFilmStripVisibility} from '../actions/filmStrip.js';
import action from '../actions';
const {selectMediumAndEmit} = action;

const mapStateToProps = (state) => {
    return {
        isOpen: state.filmStripOpen,
        media: state.media
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMediumClick: (medium) => {
            dispatch(selectMediumAndEmit(medium));
        },
        toggleShowFilmStrip: () => {
            dispatch(toggleFilmStripVisibility());
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmStrip);
