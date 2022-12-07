import { ADD_EMPLOYEE_SAGA,DELETE_EMPLOYEE_SAGA,UPDATE_EMPLOYEE_SAGA} from "../constants"

async function getData(url) {
    const response = await fetch(url);
    return response.json();
      }
    const fetchedData = await getData('http://localhost:3500/employee');

export const employeeReducer = (state = fetchedData,action) =>{
    
    let addedEmployee;
    switch(action.type){
        case ADD_EMPLOYEE_SAGA:
            addedEmployee = [...state]
            addedEmployee.push(action.data)  
            return addedEmployee
        case DELETE_EMPLOYEE_SAGA:
                addedEmployee = [...state]
                addedEmployee =  addedEmployee.filter((emp) => emp.id !== action.data)
                return addedEmployee
        case UPDATE_EMPLOYEE_SAGA:
               addedEmployee = [...state]
                    let i = 0;
                    let position = -1
                    for(i ; i < addedEmployee.length; i++){
                        position ++
                        if(addedEmployee[i].id === action.data.id){
                            break
                        }
                    }
                    if(position !== -1){
                        addedEmployee[position] = action.data
                    }
                    return addedEmployee
        default:
            return state
    }
}