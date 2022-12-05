import {delete_saga,add_saga} from '../actions/employeeAction'
import {all,takeLatest,call,put} from 'redux-saga/effects'
import { DELETE_EMPLOYEE,ADD_EMPLOYEE } from '../constants';
 


export function* onRenderSaga(data){
    yield put(add_saga(data)) 
}
export function* onRender(){
    yield takeLatest(ADD_EMPLOYEE,onRenderSaga) 
}
export function* onRemoveSaga({data:{id}}){
//     let data = fetch('http://localhost:3500/employee');
// data = data.json()
// console.log(data)

    yield  put(delete_saga(id))
}

export function* onRemove(){
     yield takeLatest(DELETE_EMPLOYEE,onRemoveSaga) 
}
export function* allData(){
    yield all([call(onRender),call(onRemove)]) 
}

