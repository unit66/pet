import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import home from './home/home';

const reducer = combineReducers({
  home,
});

const createStoreWithMiddleware = applyMiddleware(
  thunk,
)(createStore);

export default initialState => createStoreWithMiddleware(reducer, initialState);


