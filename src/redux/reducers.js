import { combineReducers } from "redux";
import employeesReducer from "@reducers/employeesReducer";
import { systemReducer } from "./features/system/reducer";
import { userReducer } from "./features/user/reducer";
import employeeDetailsReducer from "@reducers/employeeDetailsReducer";
import { employeeTerminationReducer } from "./features/employees/termination/reducer";

const rootReducer = combineReducers({
  employeeTermination: employeeTerminationReducer,
  employeeDetails: employeeDetailsReducer,
  employees: employeesReducer,
  system: systemReducer,
  user: userReducer,
});

export default rootReducer;
