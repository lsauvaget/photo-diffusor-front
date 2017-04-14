import FilmStrip from '../components/filmStrip/filmStrip.js';
import {connect} from 'react-redux';
import {selectMediumAndEmit, openFilmStrip, closeFilmStrip, openLightbox} from '../actions';
import {getFilmStripUi, getData} from '../reducers';

const mapStateToProps = (state) => {
    return {
        isOpen: getFilmStripUi(state).open,
        media: getData(state).media
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMediumClick: (medium) => {
            dispatch(selectMediumAndEmit(medium));
            dispatch(openLightbox());
        },
        closeFilmStrip: () => {
            dispatch(closeFilmStrip());
        },
        openFilmStrip: () => {
            dispatch(openFilmStrip());
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmStrip);
