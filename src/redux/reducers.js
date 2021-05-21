import { combineReducers } from "redux";
import { employeesReducer } from "./features/employees/reducer";
import { systemReducer } from "./features/system/reducer";
import { userReducer } from "./features/user/reducer";

const rootReducer = combineReducers({
  employees: employeesReducer,
  system: systemReducer,
  user: userReducer,
});

export default rootReducer;
