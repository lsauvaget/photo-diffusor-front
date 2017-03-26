import {closeFlashCode} from '../actions';
import FlashCode from '../components/flashCode/FlashCode.js';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        link: window.location.origin + '?room=' + state.roomId,
        shortLink: state.flashCodeShortLink
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
