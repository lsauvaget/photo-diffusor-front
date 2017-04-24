import FilmStrip from '../components/filmStrip/filmStrip.js';
import {connect} from 'react-redux';
import {openFilmStrip, closeFilmStrip} from '../modules/filmStrip.js';
import {selectMediumAndEmit} from '../modules/data.js';
import {openLightbox} from '../modules/lightbox.js';
import {getFilmStripUi, getData} from '../modules';

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
