import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers';
import thunk from 'redux-thunk';
import {
    IO_SELECT_MEDIUM, 
    IO_JOIN_ROOM
} from '../actions/io.js';
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
    if(action.type === IO_SELECT_MEDIUM) {
        socket.emit('select', action.selectedMedium);
    }
    if(action.type === IO_JOIN_ROOM) {
        socket.emit('joinRoom', action.roomId);
    }
  return next(action);
}


export default createStore(reducers, applyMiddleware(logger, thunk, socketMiddleware));

