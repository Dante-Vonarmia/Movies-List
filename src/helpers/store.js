import { createStore, applyMiddleware, /* compose */ } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
	const store = createStore(rootReducer, middleware);
	sagaMiddleware.run(rootSaga);
	return store;
}