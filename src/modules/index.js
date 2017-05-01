import {combineReducers} from 'redux';
import ui, * as fromUi from './ui.js';
import data, * as fromData from './data.js';

const state = {
    data: {
        media: [],
        roomId: null,
        selectedMedium: null
    },
    ui: {
        filmStrip: {
            open: false
        },
        lightbox: {
            open: false,
            fullScreen: false,
            imageLoaded: false
        },
        welcomePopin: {
            open: true
        },
        flashCode: {
            link: '',
            shortLink: '',
            show: false
        }
    }
}

export default combineReducers({ data, ui});

export const getLightboxUi = (state) => fromUi.getLightboxUi(state.ui);
export const getFilmStripUi = (state) => fromUi.getFilmStripUi(state.ui);
export const getWelcomePopinUi = (state) => fromUi.getWelcomePopinUi(state.ui);
export const getFlashCodeUi = (state) => fromUi.getFlashCodeUi(state.ui);
export const getFlashCodeButtonUi = (state) => fromUi.getFlashCodeButtonUi(state.ui);
export const getData = (state) => state.data;
export const getSelectedMedium = (state) => fromData.getSelectedMedium(state.data);
