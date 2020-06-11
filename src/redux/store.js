import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './searchReducer';

const store = createStore(
    moviesReducer,
    applyMiddleware(thunk)
);
export default store;