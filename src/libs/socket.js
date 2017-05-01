import io from 'socket.io-client';
import configs from '../configs';
export const socket = io(configs.socketUrl);

import store from '../store';
import { selectMedium, receiveMedia, ioJoinRoom, receiveRoomId} from '../modules/data.js';
import { enableFullScreen } from '../modules/lightbox.js';

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
    store.dispatch(selectMedium(data.selectedMedium));
});

socket.on('roomId', (roomId) => {
   store.dispatch(receiveRoomId(roomId));
});

export default socket;

