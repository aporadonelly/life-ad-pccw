import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import employeesReducer from "@reducers/employeesReducer";
import system from "./features/system/reducer";
import user from "./features/user/reducer";
import { employerReducer } from "./features/employers/reducer";
import { employeeTerminationReducer } from "./features/employees/termination/reducer";
import employeeDetailsReducer from "@reducers/employeeDetailsReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    employeeTermination: employeeTerminationReducer,
    employeeDetails: employeeDetailsReducer,
    employees: employeesReducer,
    system,
    user,
    employers: employerReducer,
  });

export default createRootReducer;
