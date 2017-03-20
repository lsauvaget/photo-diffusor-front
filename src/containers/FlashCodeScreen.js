import actions from '../actions';
console.log(actions)
import FlashCode from '../components/flashCode/FlashCode.js';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        closeFlashCode: () => {
            dispatch(actions.closeFlashCode())
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(FlashCode);
