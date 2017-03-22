import * as actionsLightbox from './lightbox.js';
import * as actionsGallery from './gallery.js';
import * as actionsFilmStrip from './filmStrip.js';
import * as actionsIo from './io.js';


const RECEIVE_MEDIA = 'RECEIVE_MEDIA';
const receiveMedia = (media) => ({
    type: RECEIVE_MEDIA,
    media
});

const SHOW_FLASH_CODE = 'SHOW_FLASH_CODE';
const showFlashCode = () => ({
    type: SHOW_FLASH_CODE
});

const CLOSE_FLASH_CODE = 'CLOSE_FLASH_CODE';
const closeFlashCode = () => ({
    type: CLOSE_FLASH_CODE
});

const RECEIVE_ROOM_ID = 'RECEIVE_ROOM_ID';
const receiveRoomId = (roomId) => ({
    type: RECEIVE_ROOM_ID,
    roomId
});

const JOIN_ROOM = 'JOIN_ROOM';
const joinRoom = (roomId) => ({
    type: JOIN_ROOM,
    roomId
});

const selectMediumAndEmit = (medium) => dispatch => {
    dispatch(actionsGallery.selectMedium(medium));
    dispatch(actionsIo.ioSelectMedium(medium));
};

const loadNextMediumAndEmit = () => dispatch => {
    dispatch(actionsLightbox.loadNextMedium());
    dispatch(actionsIo.ioLoadNextMedium());
};

const loadPrevMediumAndEmit = () => dispatch => {
    dispatch(actionsLightbox.loadPrevMedium());
    dispatch(actionsIo.ioLoadPrevMedium());
};

export default {
    ...actionsLightbox, 
    ...actionsGallery, 
    ...actionsFilmStrip,
    RECEIVE_MEDIA,
    receiveMedia,
    SHOW_FLASH_CODE,
    showFlashCode,
    CLOSE_FLASH_CODE,
    closeFlashCode,
    RECEIVE_ROOM_ID,
    receiveRoomId,
    JOIN_ROOM,
    joinRoom,
    selectMediumAndEmit,
    loadNextMediumAndEmit,
    loadPrevMediumAndEmit
};

