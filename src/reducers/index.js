import { combineReducers } from "redux";
import employeesReducer from "./employeesReducer";
import userAccounts from "./../redux/userAuth/userAuth.reducers";

export default combineReducers({
  employees: employeesReducer,
  userAccounts: userAccounts,
});
