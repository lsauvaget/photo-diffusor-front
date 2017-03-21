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

export default connect(
    mapStateToProps,
    { 
        onMediumClick: selectMedium,
        toggleShowFilmStrip: toggleFilmStripVisibility 
    }
)(FilmStrip);
