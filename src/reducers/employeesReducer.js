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
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_FAIL,
  FETCH_INDUSTRY_TYPE_SUCCESS,
  FETCH_INDUSTRY_TYPE_FAIL,
  FETCH_SCHEME_TYPE_SUCCESS,
  FETCH_SCHEME_TYPE_FAIL,
  FETCH_OCCUPATION_FAIL,
  FETCH_OCCUPATION_SUCCESS,
  FETCH_STATUS_FAIL,
  FETCH_STATUS_SUCCESS,
  FETCH_POB_SUCCESS,
  FETCH_POB_FAIL,
} from '../actions/types';

const initialState = {
  error: {},
  employees: [],
  employee: {},
  enquiry: [],
  genderType: [],
  idType: [],
  nationalities: [],
  employeeType: [],
  industryType: [],
  schemeType: [],
  occupationType: [],
  statusType: [],
  placeOfBirth: [],
};
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_POB_SUCCESS:
      return {
        ...state,
        placeOfBirth: payload,
      };
    case FETCH_STATUS_SUCCESS:
      return {
        ...state,
        statusType: payload,
      };
    case FETCH_OCCUPATION_SUCCESS:
      return {
        ...state,
        occupationType: payload,
      };
    case FETCH_SCHEME_TYPE_SUCCESS:
      return {
        ...state,
        schemeType: payload,
      };
    case FETCH_INDUSTRY_TYPE_SUCCESS:
      return {
        ...state,
        industryType: payload,
      };
    case FETCH_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employeeType: payload,
      };
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
    case FETCH_EMPLOYEE_FAIL:
    case FETCH_INDUSTRY_TYPE_FAIL:
    case FETCH_SCHEME_TYPE_FAIL:
    case FETCH_OCCUPATION_FAIL:
    case FETCH_STATUS_FAIL:
    case FETCH_POB_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
