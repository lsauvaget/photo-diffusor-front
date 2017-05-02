import io from 'socket.io-client';
import configs from '../configs';
export const socket = io(configs.socketUrl);

import store from '../store';
import {actions as dataActions} from '../features/gallery/data';
import { actions as lightboxActions } from '../features/gallery/ui/lightbox';

import {parseQuery} from './routeUtils.js';


socket.on('init', (imgs) => {
    store.dispatch(dataActions.receiveMedia(imgs));
    const query = parseQuery(window.location.search);
    if(query.room) {
        store.dispatch(dataActions.ioJoinRoom(query.room));
    }
});

socket.on('select', (data) => {
    store.dispatch(lightboxActions.enableFullScreen());
    store.dispatch(dataActions.selectMedium(data.selectedMedium));
});

socket.on('roomId', (roomId) => {
   store.dispatch(dataActions.receiveRoomId(roomId));
});

export default socket;

