import {connect} from 'react-redux';
import MobileButton from '../components/mobileButton/mobileButton.js';
import {fetchRoomShortLink} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: () => {
            dispatch(fetchRoomShortLink())
        },
    }
}

export default connect(
    null,
    mapDispatchToProps
)(MobileButton);
