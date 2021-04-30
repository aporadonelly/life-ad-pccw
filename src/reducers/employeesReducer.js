import {
  FETCH_EMPLOYEES_SUCCESS,
  VIEW_EMPLOYEE_SUCCESS,
  SEARCH_MEMBERS,
  CREATE_QUERY_SUCCESS,
  FETCH_GENDER_SUCCESS,
  FETCH_GENDER_FAIL,
  FETCH_ID_SUCCESS,
  FETCH_ID_FAIL,
  FETCH_NATIONALITY_SUCCESS,
  FETCH_NATIONALITY_FAIL,
} from '../actions/types';

const initialState = {
  error: {},
  employees: [],
  employee: {},
  enquiry: [],
  genderType: [],
  idType: [],
  nationalities: [],
};
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_GENDER_SUCCESS:
      return {
        ...state,
        genderType: payload,
      };
    case FETCH_ID_SUCCESS:
      return {
        ...state,
        idType: payload,
      };
    case FETCH_NATIONALITY_SUCCESS:
      return {
        ...state,
        nationalities: payload,
      };
    case FETCH_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: payload,
      };
    case VIEW_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employee: payload,
      };
    case SEARCH_MEMBERS:
      return {
        ...state,
        employees: payload,
      };
    case CREATE_QUERY_SUCCESS:
      return {
        ...state,
        enquiry: action.payload,
      };
    case FETCH_GENDER_FAIL:
    case FETCH_NATIONALITY_FAIL:
    case FETCH_ID_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
