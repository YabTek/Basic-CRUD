import {add_saga,update_saga,delete_saga} from '../actions/employeeAction'
import {all,takeLatest,call,put} from 'redux-saga/effects'
import {ADD_EMPLOYEE,UPDATE_EMPLOYEE,DELETE_EMPLOYEE } from '../constants';
 


export function* onRenderSaga(data){
    yield put(add_saga(data)) 
}
export function* onRender(){
    yield takeLatest(ADD_EMPLOYEE,onRenderSaga) 
}
export function* onEditSaga(data){
    yield put(update_saga(data)) 
}
export function* onEdit(){
    yield takeLatest(UPDATE_EMPLOYEE,onEditSaga) 
}
export function* onRemoveSaga({data:{id}}){ 
    yield  put(delete_saga(id))
}

export function* onRemove(){
     yield takeLatest(DELETE_EMPLOYEE,onRemoveSaga) 
}
export function* allData(){
    yield all([call(onRender),call(onEdit),call(onRemove)]) 
}

