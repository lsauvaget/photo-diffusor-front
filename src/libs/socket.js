import io from 'socket.io-client';
import configs from '../configs';
export const socket = io(configs.socketUrl);

import store from '../store';
import {
    ioJoinRoom,
    enableFullScreen,
    selectMedium,
    receiveMedia,
    closeFlashCode,
    receiveRoomId
} from '../actions';

import {parseQuery} from './routeUtils.js';


socket.on('init', (imgs) => {
    store.dispatch(receiveMedia(imgs));
    const query = parseQuery(window.location.search);
    if(query.room) {
        store.dispatch(ioJoinRoom(query.room));
    }
});

socket.on('select', (data) => {
    store.dispatch(enableFullScreen());
    store.dispatch(closeFlashCode());
    store.dispatch(selectMedium(data.selectedMedium));
});

socket.on('roomId', (roomId) => {
   store.dispatch(receiveRoomId(roomId));
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

