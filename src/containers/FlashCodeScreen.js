import FlashCode from '../components/flashCode/FlashCode.js';
import {connect} from 'react-redux';
import {getFlashCodeUi, getData} from '../features/gallery';
import {actions} from '../features/gallery/ui/flashcode';

const mapStateToProps = (state) => {
    const {shortLink} = getFlashCodeUi(state);
    const {roomId} = getData(state);
    return {
        link: window.location.origin + '?room=' + roomId,
        shortLink
    }
};

export default connect(
    mapStateToProps,
    actions
)(FlashCode);
