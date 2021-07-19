import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import system from "./features/system/reducer";
import user from "./features/user/reducer";
// import { companyReducer } from "./features/company/reducer";
import employerReducer from "./features/employers/reducer";
import membersReducer from "./features/members/reducer";
import employeeTermination from "./features/employees/termination/reducer";
import employeeDetailsReducer from "@reducers/employeeDetailsReducer";
import enrollmentEmployer from "./features/enrollmentEmployer/reducer";
import mlfub from "./features/mlfub/reducer";
import registrationEmployer from "./features/registrationEmployer/reducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    employees: membersReducer,
    system,
    user,
    registrationEmployer,
    mlfub,
    enrollmentEmployer,
    employers: employerReducer,
    employeeTermination,
    employeeDetails: employeeDetailsReducer,
  });

export default createRootReducer;
