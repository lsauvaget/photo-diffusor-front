import {combineReducers} from 'redux';
import welcomePopinReducer from './welcomePopinReducer.js';
import filmStripReducer from './filmStripReducer.js';
import lightboxReducer from './lightboxReducer.js';
import flashCodeReducer from './flashCodeReducer.js'
import flashCodeButtonReducer from './flashCodeButtonReducer.js'

export default combineReducers({
    filmStrip: filmStripReducer,
    lightbox: lightboxReducer,
    welcomePopin: welcomePopinReducer,
    flashCode: flashCodeReducer,
    flashCodeButton: flashCodeButtonReducer
});

export const getLightboxUi = (state) => state.lightbox;
export const getFilmStripUi = (state) => state.filmStrip;
export const getWelcomePopinUi = (state) => state.welcomePopin;
export const getFlashCodeUi = (state) => state.flashCode;
export const getFlashCodeButtonUi = (state) => state.flashCodeButton;
