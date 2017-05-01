import {combineReducers} from 'redux';

export const SELECT_MEDIUM = 'SELECT_MEDIUM';
export const UNSELECT_MEDIUM = 'UNSELECT_MEDIUM';
export const IO_SELECT_MEDIUM = 'IO/SELECT_MEDIUM';
export const IO_JOIN_ROOM = 'IO/JOIN_ROOM';
export const RECEIVE_MEDIA = 'RECEIVE_MEDIA';
export const RECEIVE_ROOM_ID = 'RECEIVE_ROOM_ID';
export const JOIN_ROOM = 'JOIN_ROOM';

export default combineReducers({
    media: mediaReducer,
    roomId: roomIdReducer,
    selectedMedium: selectedMediumReducer
});

function mediaReducer(state = [], action) {
    switch (action.type) {
        case RECEIVE_MEDIA:
            return action.media;

        default:
            return state;
    }
};

function roomIdReducer(state = null, action) {
    switch (action.type) {
        case RECEIVE_ROOM_ID:
            return action.roomId;
        default:
            return state
    }
};

function selectedMediumReducer(state = null, action) {
    switch (action.type) {
        case SELECT_MEDIUM:
            return {...state, ...action.selectedMedium};
        case UNSELECT_MEDIUM:
            return null;
        default:
            return state
    }
};

export const getSelectedMedium = state => state.selectedMedium; 

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
