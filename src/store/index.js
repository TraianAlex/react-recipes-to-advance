// @ts-nocheck
/* eslint-disable global-require */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';
import { makeRootReducer } from '../reducers';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger');
  middleware.push(createLogger({ collapsed: true, diff: true }));
}

const enhancer = compose(
  applyMiddleware(...middleware),
  persistState(['recipes', 'favorites']),
);

const store = createStore(
  makeRootReducer(),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  enhancer,
);

export default store;
