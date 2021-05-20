import { GET_EMPLOYEE_DETAILS } from "../actions/types";

const INITIAL_STATE = {
  employeeDetail: [],
};

const employeeDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_DETAILS:
      return {
        ...state,
        employeeDetail: action.payload,
      };
    default:
      return state;
  }
};

export default employeeDetailsReducer;
