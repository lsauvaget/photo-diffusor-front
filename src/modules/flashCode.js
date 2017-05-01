import {getData} from './index.js';
import axios from 'axios';
import config from '../configs';
import * as types from './types.js';

const initialState = {
    link: '',
    shortLink: '',
    show: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_FLASH_CODE:
            return {...state, show: true};

        case types.CLOSE_FLASH_CODE:
            return {...state, show: false};

        case types.RECEIVE_SHORT_LINK:
            return {...state, shortLink: action.flashCodeShortLink};

        default:
            return state;
    }
}

export const receiveShortLink = (link) => ({
    type: types.RECEIVE_SHORT_LINK,
    flashCodeShortLink:  link
});

export const showFlashCode = () => ({
    type: types.SHOW_FLASH_CODE
});

export const closeFlashCode = () => ({
    type: types.CLOSE_FLASH_CODE
});

export const fetchRoomShortLink = () => (dispatch, getState) => {
    dispatch(showFlashCode());
    return axios.get(`${config.socketUrl}/shortlink`, {
        params: {
            link: window.location.origin + '?room=' + getData(getState()).roomId
        }
    })
        .then(({data: {link}}) => {
            dispatch(receiveShortLink(link));
        });
};
