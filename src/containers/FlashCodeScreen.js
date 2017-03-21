import actions from '../actions';
import FlashCode from '../components/flashCode/FlashCode.js';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        link: window.location.origin + '?room=' + state.roomId
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeFlashCode: () => {
            dispatch(actions.closeFlashCode())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FlashCode);
