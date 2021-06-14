import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import system from "./features/system/reducer";
import user from "./features/user/reducer";
// import { companyReducer } from "./features/company/reducer";
import employerReducer from "./features/employers/reducer";
import membersReducer from "./features/members/reducer";
import employeeTermination from "./features/employees/termination/reducer";
import employeeDetailsReducer from "@reducers/employeeDetailsReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    employees: membersReducer,
    system,
    user,
    employers: employerReducer,
    employeeTermination,
    employeeDetails: employeeDetailsReducer,
  });

export default createRootReducer;
