import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../rootReducer';
import listSaga  from '../sagas/listSaga';


const saga = createSagaMiddleware();

const store = configureStore({
    reducer:rootReducer,
    middleware: () => [saga]});
saga.run(listSaga)

export default store;