import { ADD_EMPLOYEE,DELETE_EMPLOYEE,
    SET_EMPLOYEE_LIST,ADD_EMPLOYEE_SAGA,DELETE_EMPLOYEE_SAGA} from "../constants"

export const employeeReducer = (data = [],action) =>{
    let addedEmployee;
    switch(action.type){
        case ADD_EMPLOYEE_SAGA:
            addedEmployee = [...data]
            addedEmployee.push(action.data)  
            return addedEmployee
        case DELETE_EMPLOYEE_SAGA:
                addedEmployee = [...data]
                addedEmployee =  addedEmployee.filter((emp) => emp.id !== action.data)
                return addedEmployee
        // case UPDATE_TODO_SAGA:
        //             addedEmployee = [...state]
        //             addedEmployee =  addedEmployee.filter((emp) => emp.id !== action.data)
        //             return addedEmployee
        // case ADD_EMPLOYEE:
        //     console.log('add emp reducer is called',action)
        //     return [action.data, ...data]
        // case DELETE_EMPLOYEE:
        //     console.log('delete emp reducer is called',action)
        //      data.length = data.length? data.length-1:[]
        //    // const current =  data.filter((emp) => emp.id !== action.data)
        //     return [...data]
        // case SET_EMPLOYEE_LIST:
        //         console.log('action is called',action)
        //          return [...action.data]
            
        default:
            return data
    }
}