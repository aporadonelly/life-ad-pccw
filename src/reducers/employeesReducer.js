import {
  FETCH_EMPLOYEES_SUCCESS,
  VIEW_EMPLOYEE_SUCCESS,
} from '../actions/types';

const initialState = {
  employees: null,
  employee: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: action.payload,
      };
    case VIEW_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employee: action.payload,
      };
    default:
      return state;
  }
};
