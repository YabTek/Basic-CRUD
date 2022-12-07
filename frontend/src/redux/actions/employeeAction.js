import {ADD_EMPLOYEE,DELETE_EMPLOYEE,UPDATE_EMPLOYEE,
    ADD_EMPLOYEE_SAGA,DELETE_EMPLOYEE_SAGA,UPDATE_EMPLOYEE_SAGA} from '../constants'

export const add_Employee = (data) =>{
    return {
        type: ADD_EMPLOYEE,
        data: data
    }
}
export const update_Employee = (data) =>{
    console.log('add employee',data)
    return{
        type: UPDATE_EMPLOYEE,
        data: data
    }
}

export const delete_Employee = (id) =>{
    return{
        type: DELETE_EMPLOYEE,
        data: id
    }
}
export const add_saga = (data) =>({
        type: ADD_EMPLOYEE_SAGA,
        data: data
    });

export const update_saga = (data) =>({
        type: UPDATE_EMPLOYEE_SAGA,
        data: data
    });

export const delete_saga = (data) =>({
        type: DELETE_EMPLOYEE_SAGA,
        data: data
    });
