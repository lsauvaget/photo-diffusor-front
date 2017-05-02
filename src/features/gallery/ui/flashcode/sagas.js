import { select, put, takeLatest, call, all} from 'redux-saga/effects';
import axios from 'axios';
import types from './types.js';
import actions from './actions.js';
import {selectors} from '../../data';
import config from '../../../../configs';

const url =  `${config.socketUrl}/shortlink`;

function* fetchRoomShortLink() {
    yield put(actions.showFlashCode());
    const roomId = yield select(selectors.getRoomId);
    const queryParams = {
        params: {
            link: window.location.origin + '?room=' + roomId
        }
    };
    try {
        const {link} = yield call(axios.get, url, queryParams);
        yield put(actions.fetchRoomShortLinkSuccess(link));
    } catch(error) {
        yield put(actions.fetchRoomShortLinkFailed());
    }
}

function* watchFetchRoomShortLink() {
    yield takeLatest(types.FETCH_SHORT_LINK_REQUESTED, fetchRoomShortLink);
}

export default function* () {
    yield all([
        watchFetchRoomShortLink()
    ])
}
