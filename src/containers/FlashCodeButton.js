import {connect} from 'react-redux';
import MobileButton from '../components/mobileButton/mobileButton.js';
import {actions as flashCodeButtonActions} from '../features/gallery/ui/flashcode';

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: () => {
            dispatch(flashCodeButtonActions.fetchRoomShortLink())
        },
    }
}

export default connect(
    null,
    mapDispatchToProps
)(MobileButton);
