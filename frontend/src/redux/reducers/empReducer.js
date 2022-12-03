import { ADD_EMPLOYEE,DELETE_EMPLOYEE } from "../constants"

export const employeeData = (data = [],action) =>{
    switch(action.type){
        case ADD_EMPLOYEE:
            console.log('add emp reducer is called',action)
            return [action.data, ...data]
        case DELETE_EMPLOYEE:
            console.log('delete emp reducer is called',action)
            data.length = data.length? data.length-1:[]
            return [...data]
        default:
            return data
    }
}