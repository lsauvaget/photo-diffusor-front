import React, {PropTypes} from 'react';
import './welcomePopin.css';
import ScrollLock from 'react-scrolllock';

const WelcomePopin = ({onCloseClick, isOpen}) =>  {
    const welcomePopinClass = `WelcomePopin ${isOpen ?  '' : 'WelcomePopin--close'}`;
    const wrapperClass = `WelcomePopin__wrapper ${isOpen ? '' : 'WelcomePopin__wrapper--close'}`;
    const overlayClass = `WelcomePopin__overlay ${isOpen ? '' : 'WelcomePopin__overlay--close'}`;
    let $elm;
    return (
        <div ref={$el => $elm = $el} className={welcomePopinClass}>
            <div className={wrapperClass}>
                <div className="WelcomePopin__wrapper__title">
                    Gallery
                </div>
            </div>

            <div onAnimationEnd={e => $elm.style.display = 'none'} 
                onClick={onCloseClick} className={overlayClass}></div>
            {isOpen && <ScrollLock/>}
        </div>);
}

WelcomePopin.propTypes = {
    onCloseClick: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired
}

export default WelcomePopin;
