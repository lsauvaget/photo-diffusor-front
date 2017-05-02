import { createStore, applyMiddleware, compose } from 'redux'
import reducers from '../features/gallery';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { types as dataTypes} from '../features/gallery/data';
import socket from '../libs/socket.js';
import rootSagas from '../features/rootSagas.js';

const sagaMiddleware = createSagaMiddleware()
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
    if(action.type === dataTypes.IO_SELECT_MEDIUM) {
        socket.emit('select', action.selectedMedium);
    }
    if(action.type === dataTypes.IO_JOIN_ROOM) {
        socket.emit('joinRoom', action.roomId);
    }
  return next(action);
}


export default createStore(reducers, composeEnhancers(
    applyMiddleware(logger, thunk, socketMiddleware, sagaMiddleware)
));

sagaMiddleware.run(rootSagas)


