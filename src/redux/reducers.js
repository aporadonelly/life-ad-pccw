import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import system from "./features/system/reducer";
import user from "./features/user/reducer";
import { employerReducer } from "./features/employers/reducer";
import membersReducer from "./features/members/reducer";
import { employeeTerminationReducer } from "./features/employees/termination/reducer";
import employeeDetailsReducer from "@reducers/employeeDetailsReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    employees: membersReducer,
    system,
    user,
    employers: employerReducer,
    employeeTermination: employeeTerminationReducer,
    employeeDetails: employeeDetailsReducer,
  });

export default createRootReducer;
