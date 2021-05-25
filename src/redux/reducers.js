import { combineReducers } from "redux";
import { membersReducer } from "./features/members/reducer";
import { systemReducer } from "./features/system/reducer";
import { userReducer } from "./features/user/reducer";
import { employerReducer } from "./features/employers/reducer";

const rootReducer = combineReducers({
  employees: membersReducer,
  system: systemReducer,
  user: userReducer,
  employers: employerReducer,
});

export default rootReducer;
