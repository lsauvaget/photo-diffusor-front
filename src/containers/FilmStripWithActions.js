import FilmStrip from '../components/filmStrip/filmStrip.js';
import {selectMedium} from '../actions/gallery.js';
import {connect} from 'react-redux';
import {toggleFilmStripVisibility} from '../actions/filmStrip.js';

const mapStateToProps = (state) => {
    return {
        isOpen: state.filmStripOpen,
        media: state.media
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMediumClick: (medium) => {
            dispatch(selectMedium(medium))
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
