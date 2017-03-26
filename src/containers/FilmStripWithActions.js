import FilmStrip from '../components/filmStrip/filmStrip.js';
import {connect} from 'react-redux';
import {selectMediumAndEmit, toggleFilmStripVisibility} from '../actions';

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
