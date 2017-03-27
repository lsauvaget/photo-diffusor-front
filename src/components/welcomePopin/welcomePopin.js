import React, {PropTypes} from 'react';
import './welcomePopin.css';
import ScrollLock from 'react-scrolllock';

const WelcomePopin = ({onCloseClick}) => 
    <div className="WelcomePopin">
        <div className="WelcomePopin__wrapper">
            <div className="WelcomePopin__wrapper__title">
                Gallery
            </div>
        </div>
        <div onClick={onCloseClick} className="WelcomePopin__overlay"></div>
        <ScrollLock/>
    </div>

WelcomePopin.propTypes = {
    onCloseClick: PropTypes.func.isRequired,
}

export default WelcomePopin;
