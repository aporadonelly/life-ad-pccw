import { combineReducers } from "redux";
import employeesReducer from "@reducers/employeesReducer";
import { userReducer } from "./features/user/reducer";

const rootReducer = combineReducers({
  employees: employeesReducer,
  user: userReducer,
});

export default rootReducer;
