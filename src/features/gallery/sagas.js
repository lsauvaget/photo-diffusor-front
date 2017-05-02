import { put, takeEvery, all } from 'redux-saga/effects';

import {types as dataTypes} from  './data';
import {actions as flashCodeActions, types as flashcodeTypes} from  './ui/flashcode';
import {actions as welcomePopinActions} from './ui/welcomePopin';
import {actions as lightboxActions, types as lightboxTypes} from './ui/lightbox';
import {actions as filmStripActions} from './ui/filmStrip';
import {actions as flashCodeButtonActions} from './ui/flashCodeButton';
import {default as flashCodeSagas} from './ui/flashcode/sagas.js';

function* selectMediumUIEffects() {
    yield put(flashCodeActions.closeFlashCode());
    yield put(welcomePopinActions.closeWelcomePopin());
    yield put(lightboxActions.openLightbox());
}

function* unselectMediumUIEffects() {
    yield put(lightboxActions.closeLightbox());
}

function* enableFullScreenUIEffects() {
    yield put(filmStripActions.hideFilmStripButton());
    yield put(flashCodeButtonActions.hideFlashCodeButton());
}

function* disableFullScreenUIEffects() {
    yield put(filmStripActions.showFilmStripButton());
    yield put(flashCodeButtonActions.showFlashCodeButton());
}

function* showFlashCodeUIEffects() {
    yield put(welcomePopinActions.closeWelcomePopin());
}

export default function* () {
    yield all([
        takeEvery(dataTypes.SELECT_MEDIUM, selectMediumUIEffects),
        takeEvery(dataTypes.UNSELECT_MEDIUM, unselectMediumUIEffects),
        takeEvery(lightboxTypes.ENABLE_FULL_SCREEN, enableFullScreenUIEffects),
        takeEvery(lightboxTypes.DISABLE_FULL_SCREEN, disableFullScreenUIEffects),
        takeEvery(lightboxTypes.DISABLE_FULL_SCREEN, disableFullScreenUIEffects),
        takeEvery(flashcodeTypes.SHOW_FLASH_CODE, showFlashCodeUIEffects),
        flashCodeSagas()
    ]);
}
