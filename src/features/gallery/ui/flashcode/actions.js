import types from './types.js';

const showFlashCode = () => ({ type: types.SHOW_FLASH_CODE });

const closeFlashCode = () => ({ type: types.CLOSE_FLASH_CODE });

const fetchRoomShortLink = () => ({
    type: types.FETCH_SHORT_LINK_REQUESTED
});

const fetchRoomShortLinkSuccess = (link) => ({
    type: types.FETCH_SHORT_LINK_SUCCEEDED,
    link
});

const fetchRoomShortLinkFailed = (link) => ({
    type: types.FETCH_SHORT_LINK_FAILED
});

export default {
    showFlashCode,
    closeFlashCode,
    fetchRoomShortLink,
    fetchRoomShortLinkSuccess,
    fetchRoomShortLinkFailed
}
