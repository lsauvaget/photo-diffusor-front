import io from 'socket.io-client';
import configs from '../configs';
export const socket = io(configs.socketUrl);

import store from '../store';
import actions from '../actions';

import {parseQuery} from './routeUtils.js';


socket.on('init', (imgs) => {
    store.dispatch(actions.receiveMedia(imgs));
    const query = parseQuery(window.location.search);
    if(query.room) {
        store.dispatch(actions.joinRoom(query.room));
    }
});

socket.on('next', () => {
    store.dispatch(actions.loadNextMedium());
});

socket.on('prev', () => {
    store.dispatch(actions.loadPrevMedium());
});

socket.on('select', (selectedMedium) => {
    store.dispatch(actions.toggleFullScreen());
    store.dispatch(actions.selectMedium(selectedMedium));
});

socket.on('roomId', (roomId) => {
   store.dispatch(actions.receiveRoomId(roomId));
});

//actions
//const fetchRoomId = () => {
    //return dispatch => {
        //socket.emit('fetchRoomId');
        //const fn = roomId => {
            //dispatch(action.receiveRoomId(roomId));
            //socket.off('fetchRoomId', fn);
        //}
        //socket.on('roomId', fn);
    //}
//}

export default socket;

