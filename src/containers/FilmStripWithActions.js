import FilmStrip from '../components/filmStrip/filmStrip.js';
import {connect} from 'react-redux';
import {actions as filmStripActions} from '../features/gallery/ui/filmStrip';
import {actions as dataActions} from '../features/gallery/data';
import {getFilmStripUi, getData} from '../features/gallery';

const mapStateToProps = (state) => {
    return {
        isOpen: getFilmStripUi(state).open,
        media: getData(state).media
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMediumClick: (medium) => {
            dispatch(dataActions.selectMediumAndEmit(medium));
        },
        closeFilmStrip: () => {
            dispatch(filmStripActions.closeFilmStrip());
        },
        openFilmStrip: () => {
            dispatch(filmStripActions.openFilmStrip());
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmStrip);
