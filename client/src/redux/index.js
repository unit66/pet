import { createStore, combineReducers } from 'redux';
import home from './home/home';

const reducer = combineReducers({
  home,
})

export default initialState => createStore(reducer, initialState);
