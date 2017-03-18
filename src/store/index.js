import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers';
import thunk from 'redux-thunk';

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

export default createStore(reducers, applyMiddleware(logger, thunk));

