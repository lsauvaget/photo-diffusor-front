import FlashCode from '../components/flashCode/FlashCode.js';
import {connect} from 'react-redux';
import {getFlashCodeUi, getData} from '../modules';
import {closeFlashCode} from '../modules/flashCode.js';

const mapStateToProps = (state) => {
    const {shortLink} = getFlashCodeUi(state);
    const {roomId} = getData(state);
    return {
        link: window.location.origin + '?room=' + roomId,
        shortLink
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeFlashCode: () => {
            dispatch(closeFlashCode())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FlashCode);
