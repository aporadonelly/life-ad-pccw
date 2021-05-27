import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import employeesReducer from "@reducers/employeesReducer";
import system from "./features/system/reducer";
import user from "./features/user/reducer";
import { employerReducer } from "./features/employers/reducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    employees: employeesReducer,
    system,
    user,
    employers: employerReducer,
  });

export default createRootReducer;
