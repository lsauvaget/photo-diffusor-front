import {combineReducers} from 'redux';
import welcomePopin from './welcomePopin.js';
import filmStrip from './filmStrip.js';
import lightbox from './lightbox.js';
import flashCode from './flashCode.js'
import flashCodeButton from './flashCodeButton.js'

export default combineReducers({
    filmStrip: filmStrip,
    lightbox: lightbox,
    welcomePopin: welcomePopin,
    flashCode: flashCode,
    flashCodeButton: flashCodeButton
});

export const getLightboxUi = (state) => state.lightbox;
export const getFilmStripUi = (state) => state.filmStrip;
export const getWelcomePopinUi = (state) => state.welcomePopin;
export const getFlashCodeUi = (state) => state.flashCode;
export const getFlashCodeButtonUi = (state) => state.flashCodeButton;
