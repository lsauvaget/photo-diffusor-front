import {combineReducers} from 'redux';
import ui, {selectors as fromUi} from './ui';
import data from './data';

export default combineReducers({ data, ui});

export const getLightboxUi = (state) => fromUi.getLightboxUi(state.ui);
export const getFilmStripUi = (state) => fromUi.getFilmStripUi(state.ui);
export const getWelcomePopinUi = (state) => fromUi.getWelcomePopinUi(state.ui);
export const getFlashCodeUi = (state) => fromUi.getFlashCodeUi(state.ui);
export const getFlashCodeButtonUi = (state) => fromUi.getFlashCodeButtonUi(state.ui);
export const getData = (state) => state.data;
