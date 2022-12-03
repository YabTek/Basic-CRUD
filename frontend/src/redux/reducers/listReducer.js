import {SET_EMPLOYEE_LIST} from "../constants"

export const listData = (data = [],action) =>{
    switch(action.type){
      
        case SET_EMPLOYEE_LIST:
               console.log('action is called',action)
                return [...action.data]
           
        default:
            return data
    }
}