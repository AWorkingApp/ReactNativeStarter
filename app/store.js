import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga';
import devTools from 'remote-redux-devtools';

import loggerMiddleware from './middlewares/loggerMiddleware.js';
import reducers from './reducers.js';
import rootSaga from './sagas.js';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  loggerMiddleware,
];

const enhancers = [
  applyMiddleware(...middlewares),
];

if (__DEV__) {
    enhancers.push(devTools());
}

const store = createStore(
  reducers,
  compose(...enhancers),
);

sagaMiddleware.run(rootSaga);

export default store;
