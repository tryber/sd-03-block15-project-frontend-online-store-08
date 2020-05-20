import { combineReducers, createStore } from 'redux';
import AddRemove from './reducers/addRemove';
import inDeCrement from './reducers/inDeCrement';

const reducer = combineReducers({
  AddRemove,
  inDeCrement,
});

const store = createStore(reducer);

export default store;
