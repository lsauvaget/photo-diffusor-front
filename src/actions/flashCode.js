import axios from 'axios';
import config from '../configs';
import {getData} from '../reducers';

export const SHOW_FLASH_CODE = 'SHOW_FLASH_CODE';
export const CLOSE_FLASH_CODE = 'CLOSE_FLASH_CODE';
export const RECEIVE_SHORT_LINK = 'RECEIVE_SHORT_LINK';

export const receiveShortLink = (link) => ({
    type: RECEIVE_SHORT_LINK,
    flashCodeShortLink:  link
});

export const showFlashCode = () => ({
    type: SHOW_FLASH_CODE
});

export const closeFlashCode = () => ({
    type: CLOSE_FLASH_CODE
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
