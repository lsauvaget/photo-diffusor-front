import {combineReducers} from 'redux';
import welcomePopin from './welcomePopin';
import filmStrip from './filmStrip';
import lightbox from './lightbox';
import flashCode from './flashcode'
import flashCodeButton from './flashCodeButton'

export default combineReducers({
    filmStrip: filmStrip,
    lightbox: lightbox,
    welcomePopin: welcomePopin,
    flashCode: flashCode,
    flashCodeButton: flashCodeButton
});

const getLightboxUi = (state) => state.lightbox;
const getFilmStripUi = (state) => state.filmStrip;
const getWelcomePopinUi = (state) => state.welcomePopin;
const getFlashCodeUi = (state) => state.flashCode;
const getFlashCodeButtonUi = (state) => state.flashCodeButton;

export const selectors = {
    getLightboxUi,
    getFilmStripUi,
    getWelcomePopinUi,
    getFlashCodeUi,
    getFlashCodeButtonUi
}
