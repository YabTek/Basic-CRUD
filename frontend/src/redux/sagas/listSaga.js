import { Employee_list } from '../actions/listAction'
import {takeEvery,put} from 'redux-saga/effects'
import { SET_EMPLOYEE_LIST } from '../constants';
 
function* getEmployee(){
    let data = yield fetch('http://localhost:3500/employee');
    data = yield data.json();
 //   yield console.log("get employee saga is called",data);
     yield put({
        type: SET_EMPLOYEE_LIST,
        data
        });
}

function* listSaga(){
     yield takeEvery(Employee_list,getEmployee) 
}

export default listSaga