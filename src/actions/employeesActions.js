import { FETCH_EMPLOYEES_SUCCESS, VIEW_EMPLOYEE_SUCCESS } from './types';
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
