import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import home from './home/home';
import stack from './stack/stack';

const reducer = combineReducers({
  home,
  stack,
})

const createStoreWithMiddleware = applyMiddleware(
  thunk,
)(createStore)

export default initialState => createStoreWithMiddleware(reducer, initialState);
