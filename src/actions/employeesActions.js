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

//for quick search
export const searchMember = text => async dispatch => {
  try {
    const res = await api(`/employees?q=${text}`);
    console.log(res, 'searchMember');
    dispatch({
      type: SEARCH_MEMBERS,
      payload: res.data,
    });
  } catch (e) {
    console.log(e, 'err');
  }
};

//for searching of users via form
export const searchMembers = p => async dispatch => {
  const config = {
    headers: getHeaders(),
    params: p,
  };

  try {
    const res = await api.get('http://localhost:8000/employees/', config);
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
