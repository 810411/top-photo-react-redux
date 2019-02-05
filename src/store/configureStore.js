import {createStore} from 'redux';
import {initialState, rootReducer} from '../reducers';

const store = createStore(rootReducer, initialState);

export {
  store
}
