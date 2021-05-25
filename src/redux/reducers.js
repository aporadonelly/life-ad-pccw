import { combineReducers } from "redux";
import employeesReducer from "@reducers/employeesReducer";
import system from "./features/system/reducer";
import user from "./features/user/reducer";
import { employerReducer } from "./features/employers/reducer";

const rootReducer = combineReducers({
  employees: employeesReducer,
  system,
  user,
  employers: employerReducer,
});

export default rootReducer;
