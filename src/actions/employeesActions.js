import {
  FETCH_EMPLOYEES_SUCCESS,
  VIEW_EMPLOYEE_SUCCESS,
  SEARCH_MEMBERS,
  CREATE_QUERY_SUCCESS,
} from './types';
import api from '../components/employees/api/employees';

export const getHeaders = async () => {
  const HEADERS = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return HEADERS;
};

//fetch all employees or members
export const fetchEmployees = () => async dispatch => {
  try {
    const res = await api.get('/employees');
    console.log(res, 'fetchEmployees');
    dispatch({
      type: FETCH_EMPLOYEES_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    console.log(e, 'err');
  }
};

//view specific member
export const viewMember = id => async dispatch => {
  try {
    const res = await api.get(`/employees/${id}`, await getHeaders());
    if (res.status === 200) {
      dispatch({
        type: VIEW_EMPLOYEE_SUCCESS,
        payload: res.data,
      });
    }
  } catch (e) {
    console.log(e, 'err');
  }
};

//search members
export const searchMember = text => async dispatch => {
  try {
    const res = await api.get(`/employees?q=${text}`);
    dispatch({
      type: SEARCH_MEMBERS,
      payload: res.data,
    });
  } catch (e) {
    console.log(e, 'err');
  }
};

export const searchMembers = (
  mpf_id,
  english_name,
  chinese_name,
  gender,
  id_type,
  id_number,
  date_of_birth,
  nationality,
  place_of_birth,
  mobile_number,
  address,
  email,
  date_of_employment,
  employee_type,
  reported_industry_type,
  occupation,
  mpf_scheme_name,
  tax_residency,
  tin,
  status
) => async dispatch => {
  const config = {
    headers: getHeaders(),
    params: {
      mpf_id,
      english_name,
      chinese_name,
      gender,
      id_type,
      id_number,
      date_of_birth,
      nationality,
      place_of_birth,
      mobile_number,
      address,
      email,
      date_of_employment,
      employee_type,
      reported_industry_type,
      occupation,
      mpf_scheme_name,
      tax_residency,
      tin,
      status,
    },
  };

  try {
    const res = await api.get('/employees/', config);
    console.log(res, 'searchMembers');
    dispatch({
      type: SEARCH_MEMBERS,
      payload: res.data,
    });
  } catch (e) {
    console.log(e, 'err');
  }
};

export const createMemberEnquiry = payload => async dispatch => {
  try {
    const res = await api.post('/employees/', payload, await getHeaders());
    console.log(res, 'createMemberEnruiry');
    dispatch({
      type: CREATE_QUERY_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    console.log(e, 'err');
  }
};
