import * as types from './types.js';
import { put, takeEvery } from 'redux-saga/effects';

import {closeFlashCode} from  './flashCode.js';
import {closeWelcomePopin} from './welcomePopin.js';
import {openLightbox, closeLightbox} from './lightbox.js';
import {showFilmStripButton, hideFilmStripButton} from './filmStrip.js';
import {showFlashCodeButton, hideFlashCodeButton} from './flashCodeButton.js';

function* selectMediumUIEffects() {
    yield put(closeFlashCode());
    yield put(closeWelcomePopin());
    yield put(openLightbox());
}

function* unselectMediumUIEffects() {
    yield put(closeLightbox());
}

function* enableFullScreenUIEffects() {
    yield put(hideFilmStripButton());
    yield put(hideFlashCodeButton());
}

function* disableFullScreenUIEffects() {
    yield put(showFilmStripButton());
    yield put(showFlashCodeButton());
}

export default function* () {
    yield takeEvery(types.SELECT_MEDIUM, selectMediumUIEffects)
    yield takeEvery(types.UNSELECT_MEDIUM, unselectMediumUIEffects)
    yield takeEvery(types.ENABLE_FULL_SCREEN, enableFullScreenUIEffects)
    yield takeEvery(types.DISABLE_FULL_SCREEN, disableFullScreenUIEffects)
}
