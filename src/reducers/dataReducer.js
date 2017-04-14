import {combineReducers} from 'redux';
import * as actions from '../actions';

const mediaReducer = (state = [], action) => {
    switch (action.type) {
        case actions.RECEIVE_MEDIA:
            return state.concat(action.media)

        default:
            return state;
    }
};

const roomIdReducer = (state = null, action) => {
    switch (action.type) {
        case actions.RECEIVE_ROOM_ID:
            return action.roomId;
        default:
            return state
    }
};

const selectedMediumReducer = (state = null, action) => {
    switch (action.type) {
        case actions.SELECT_MEDIUM:
            return {...state, ...action.selectedMedium};
        case actions.UNSELECT_MEDIUM:
            return null;
        default:
            return state
    }
};

export default combineReducers({
    media: mediaReducer,
    roomId: roomIdReducer,
    selectedMedium: selectedMediumReducer
});

export const getSelectedMedium = (state) => {
   return state.selectedMedium; 
}

export const getNextMedium = (state) => {
   const idx = state.media.findIndex((medium) => medium.id === state.selectedMedium.id);
   return idx < state.media.length - 1 ? state.media[idx + 1] : state.media[0];
}

export const getPrevMedium = (state) => {
   const idx = state.media.findIndex((medium) => medium.id === state.selectedMedium.id);
   return idx - 1 > 0 ? state.media[idx - 1] : state.media[state.media.length - 1];
}
