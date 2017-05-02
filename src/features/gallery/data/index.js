import {combineReducers, compose} from 'redux';

/*
 * TYPES
 */
const SELECT_MEDIUM = 'DATA/SELECT_MEDIUM';
const UNSELECT_MEDIUM = 'DATA/UNSELECT_MEDIUM';
const IO_SELECT_MEDIUM = 'DATA/IO/SELECT_MEDIUM';
const IO_JOIN_ROOM = 'DATA/IO/JOIN_ROOM';
const RECEIVE_MEDIA = 'DATA/RECEIVE_MEDIA';
const RECEIVE_ROOM_ID = 'DATA/RECEIVE_ROOM_ID';
const JOIN_ROOM = 'DATA/JOIN_ROOM';

export const types = {
    SELECT_MEDIUM ,
    UNSELECT_MEDIUM,
    IO_SELECT_MEDIUM,
    IO_JOIN_ROOM,
    RECEIVE_MEDIA,
    RECEIVE_ROOM_ID,
    JOIN_ROOM
}

/*
 * REDUCERS
 */
export default combineReducers({
    media: mediaReducer,
    roomId: roomIdReducer,
    selectedMedium: selectedMediumReducer
});

function mediaReducer(state = [], action) {
    switch (action.type) {
        case types.RECEIVE_MEDIA:
            return action.media;

        default:
            return state;
    }
};

function roomIdReducer(state = null, action) {
    switch (action.type) {
        case types.RECEIVE_ROOM_ID:
            return action.roomId;
        default:
            return state
    }
};

function selectedMediumReducer(state = null, action) {
    switch (action.type) {
        case types.SELECT_MEDIUM:
            return {...state, ...action.selectedMedium};
        case types.UNSELECT_MEDIUM:
            return null;
        default:
            return state
    }
};

/*
 * ACTIONS
 */
const ioSelectMedium = (selectedMedium) => ({
    type: types.IO_SELECT_MEDIUM,
    selectedMedium
});

const ioJoinRoom = (roomId) => ({
    type: types.IO_JOIN_ROOM,
    roomId
});

const receiveMedia = (media) => ({
    type: types.RECEIVE_MEDIA,
    media
});

const receiveRoomId = (roomId) => ({
    type: types.RECEIVE_ROOM_ID,
    roomId
});

const joinRoom = (roomId) => ({
    type: types.JOIN_ROOM,
    roomId
});

const selectMedium = (selectedMedium) => ({
    type: types.SELECT_MEDIUM, selectedMedium
})

const unselectMedium = (selectedMedium) => ({
    type: types.UNSELECT_MEDIUM
});

const selectMediumAndEmit = (medium) => dispatch => {
    dispatch(selectMedium(medium));
    dispatch(ioSelectMedium(medium));
};

export const actions = {
    receiveMedia,
    ioJoinRoom,
    ioSelectMedium,
    receiveRoomId,
    joinRoom,
    selectMedium,
    unselectMedium,
    selectMediumAndEmit
}


/*
 * SELECTORS
 */
const selectData = (state) => state.data;

const getSelectedMedium = compose((state) => state.selectedMedium, selectData);
const getRoomId = (state) => compose((state) => state.roomId, selectData);

export const selectors = {
    getSelectedMedium,
    getRoomId
}
