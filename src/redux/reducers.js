import { combineReducers } from "redux";
import system from "./features/system/reducer";
import user from "./features/user/reducer";
import { employerReducer } from "./features/employers/reducer";
import { membersReducer } from "./features/members/reducer";

const rootReducer = combineReducers({
  employees: membersReducer,
  system,
  user,
  employers: employerReducer,
});

export default rootReducer;
