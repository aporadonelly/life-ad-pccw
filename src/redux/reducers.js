import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import system from "./features/system/reducer";
import user from "./features/user/reducer";
import membersReducer from "./features/members/reducer";
import employeeTermination from "./features/employees/termination/reducer";
import enrollmentEmployer from "./features/enrollmentEmployer/reducer";
import mlfub from "./features/mlfub/reducer";
import registrationEmployer from "./features/registrationEmployer/reducer";
import enrollmentCEE from "./features/enrollmentCEE/reducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    employees: membersReducer,
    system,
    user,
    registrationEmployer,
    mlfub,
    enrollmentEmployer,
    employeeTermination,
    enrollmentCEE,
  });

export default createRootReducer;
