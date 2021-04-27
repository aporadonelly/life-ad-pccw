import {
  FETCH_EMPLOYEES_SUCCESS,
  VIEW_EMPLOYEE_SUCCESS,
  SEARCH_MEMBERS,
  CREATE_QUERY_SUCCESS,
} from '../actions/types';

const initialState = {
  employees: [],
  employee: {},
  enquiry: [],
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
    case SEARCH_MEMBERS:
      return {
        ...state,
        employees: action.payload,
      };
    case CREATE_QUERY_SUCCESS:
      return {
        ...state,
        enquiry: action.payload,
        // createSuccess: true,
      };
    default:
      return state;
  }
};
