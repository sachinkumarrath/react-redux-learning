import {createStore, applyMiddleware} from 'redux';
import {logger} from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import rootReducer from './rootReducer';
import {helloSaga} from './components/courses-saga/sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware, logger)
    );

    sagaMiddleware.run(helloSaga);
    return store;
}
