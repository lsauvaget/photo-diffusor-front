import io from 'socket.io-client';
import configs from '../configs';
export const socket = io(configs.socketUrl);

import store from '../store';
import actions from '../actions';
import {ioJoinRoom} from '../actions/io.js';

import {parseQuery} from './routeUtils.js';


socket.on('init', (imgs) => {
    store.dispatch(actions.receiveMedia(imgs));
    const query = parseQuery(window.location.search);
    if(query.room) {
        store.dispatch(ioJoinRoom(query.room));
    }
});

socket.on('select', (data) => {
    store.dispatch(actions.enableFullScreen());
    store.dispatch(actions.closeFlashCode());
    store.dispatch(actions.selectMedium(data.selectedMedium));
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

