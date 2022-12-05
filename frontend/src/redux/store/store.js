import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../rootReducer';
import {allData}  from '../sagas/employeeSaga';


const saga = createSagaMiddleware();

const store = configureStore({
    reducer:rootReducer,
    middleware: () => [saga]});
saga.run(allData)

export default store;