import MobileButton from '../components/mobileButton/mobileButton.js';
import actions from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    open: state.showFlashCode
});

const mapDispatchToProps = {
    open: actions.showFlashCode,
    close: actions.closeFlashCode
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
    (stateProps, dispatchProps) => ({
        onButtonClick: stateProps.open ? dispatchProps.close : dispatchProps.open
    })
)(MobileButton);
