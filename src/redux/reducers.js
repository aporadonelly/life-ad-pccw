import { combineReducers } from "redux";
import employeesReducer from "@reducers/employeesReducer";
import { systemReducer } from "./features/system/reducer";
import { userReducer } from "./features/user/reducer";
import { companyReducer } from "./features/company/reducer";

const rootReducer = combineReducers({
  employees: employeesReducer,
  system: systemReducer,
  user: userReducer,
  companyRegInfo: companyReducer
});

export default rootReducer;
