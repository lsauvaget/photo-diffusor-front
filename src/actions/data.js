import {getPrevMedium, getNextMedium} from '../reducers';

export const SELECT_MEDIUM = 'SELECT_MEDIUM';
export const UNSELECT_MEDIUM = 'UNSELECT_MEDIUM';
export const IO_SELECT_MEDIUM = 'IO/SELECT_MEDIUM';
export const IO_JOIN_ROOM = 'IO/JOIN_ROOM';
export const RECEIVE_MEDIA = 'RECEIVE_MEDIA';
export const RECEIVE_ROOM_ID = 'RECEIVE_ROOM_ID';
export const JOIN_ROOM = 'JOIN_ROOM';


export const ioSelectMedium = (selectedMedium) => ({
    type: IO_SELECT_MEDIUM,
    selectedMedium
});

export const ioJoinRoom = (roomId) => ({
    type: IO_JOIN_ROOM,
    roomId
});

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

export const selectMedium = (selectedMedium) => {
    return {type: SELECT_MEDIUM, selectedMedium};
}

export const unselectMedium = (selectedMedium) => {
    return {type: UNSELECT_MEDIUM};
}

export const selectMediumAndEmit = (medium) => dispatch => {
    dispatch(selectMedium(medium));
    dispatch(ioSelectMedium(medium));
};

export const loadNextMediumAndEmit = () => (dispatch, getState) => {
    const nextMedium = getNextMedium(getState());
    dispatch(selectMedium(nextMedium));
    dispatch(ioSelectMedium(nextMedium));
};

export const loadPrevMediumAndEmit = () => (dispatch, getState) => {
    const prevMedium = getPrevMedium(getState());
    dispatch(selectMedium(prevMedium));
    dispatch(ioSelectMedium(prevMedium));
};

