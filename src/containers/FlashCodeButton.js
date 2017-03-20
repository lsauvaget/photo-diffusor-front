import MobileButton from '../components/mobileButton/mobileButton.js';
import actions from '../actions';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: () => {
            dispatch(actions.showFlashCode())
        },
    }
}

export default connect(
    null,
    mapDispatchToProps
)(MobileButton);
