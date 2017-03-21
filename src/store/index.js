import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers';
import thunk from 'redux-thunk';
import actions from "../actions";
const {LOAD_PREV_IMAGE, LOAD_NEXT_IMAGE, SELECT_MEDIUM, JOIN_ROOM} = actions;
import socket from '../libs/socket.js';

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}


/**
 * Emit socket event on som hook
 */
const socketMiddleware = store => next => action => {
    if(action.type === LOAD_PREV_IMAGE) {
        socket.emit('prev');
    }
    if(action.type === LOAD_NEXT_IMAGE) {
        socket.emit('next');
    }
    if(action.type === SELECT_MEDIUM) {
        socket.emit('select', action.selectedMedium);
    }
    if(action.type === JOIN_ROOM) {
        socket.emit('joinRoom', action.roomId);
    }
  return next(action);
}


export default createStore(reducers, applyMiddleware(logger, thunk, socketMiddleware));

