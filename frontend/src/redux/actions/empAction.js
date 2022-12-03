import {ADD_EMPLOYEE,DELETE_EMPLOYEE} from '../constants'

export const add_Employee = (data) =>{
    console.log('add employee',data)
    return{
        type: ADD_EMPLOYEE,
        data: data
    }
}

export const delete_Employee = (data) =>{
    console.log('delete employee',data)
    return{
        type: DELETE_EMPLOYEE,
        data: data
    }
}