import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import { logger } from './middlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

export default store;
