import { combineReducers } from "redux";
import { employeesReducer } from "./features/employees/reducer";
import { systemReducer } from "./features/system/reducer";
import { userReducer } from "./features/user/reducer";
import { employerReducer } from "./features/employers/reducer";

const rootReducer = combineReducers({
  employees: employeesReducer,
  system: systemReducer,
  user: userReducer,
  employers: employerReducer,
});

export default rootReducer;
