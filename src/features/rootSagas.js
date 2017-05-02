import {  all } from 'redux-saga/effects';
import gallerySagas from './gallery/sagas.js';

export default function* () {
    yield all([
        gallerySagas()
    ]);
}
