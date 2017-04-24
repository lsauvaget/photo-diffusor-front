import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../modules';
import thunk from 'redux-thunk';
import { IO_SELECT_MEDIUM, IO_JOIN_ROOM } from '../modules/data.js';
import socket from '../libs/socket.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

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


export default createStore(reducers, composeEnhancers(
    applyMiddleware(logger, thunk, socketMiddleware)
));

