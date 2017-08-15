import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import {helloSaga} from '../sagas/sagas.js';

const sagaMiddleware = createSagaMiddleware();



export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(helloSaga);

    return store;

}
