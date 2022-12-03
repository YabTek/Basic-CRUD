import { combineReducers } from "redux";
import { employeeData } from "./reducers/empReducer";
import { listData } from "./reducers/listReducer";

export default combineReducers({
    employeeData,listData
})