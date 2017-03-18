import io from 'socket.io-client';
import configs from '../configs';
const socket = io(configs.socketUrl);

import store from '../store';
import actions from '../actions';

socket.on('init', (imgs) => {
    store.dispatch(actions.receiveMedia(imgs));
});
