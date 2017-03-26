export * from './filmStrip.js';
export * from './flashCode.js';
export * from './io.js';
export * from './gallery.js';
export * from './lightbox.js';

export const RECEIVE_MEDIA = 'RECEIVE_MEDIA';
export const RECEIVE_ROOM_ID = 'RECEIVE_ROOM_ID';
export const JOIN_ROOM = 'JOIN_ROOM';

export const receiveMedia = (media) => ({
    type: RECEIVE_MEDIA,
    media
});

export const receiveRoomId = (roomId) => ({
    type: RECEIVE_ROOM_ID,
    roomId
});

export const joinRoom = (roomId) => ({
    type: JOIN_ROOM,
    roomId
});

import * as actionsGallery from './gallery.js';
import * as actionsIo from './io.js';
import * as actionsLightbox from './lightbox.js';

export const selectMediumAndEmit = (medium) => dispatch => {
    dispatch(actionsGallery.selectMedium(medium));
    dispatch(actionsIo.ioSelectMedium(medium));
};

export const loadNextMediumAndEmit = () => (dispatch, getState) => {
    dispatch(actionsLightbox.loadNextMedium());
    dispatch(actionsIo.ioSelectMedium(getState().selectedMedium));
};

export const loadPrevMediumAndEmit = () => (dispatch, getState) => {
    dispatch(actionsLightbox.loadPrevMedium());
    dispatch(actionsIo.ioSelectMedium(getState().selectedMedium));
};
