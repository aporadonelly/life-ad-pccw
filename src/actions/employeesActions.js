import { FETCH_EMPLOYEES_SUCCESS, VIEW_EMPLOYEE_SUCCESS } from './types';
import api from '../components/employees/api/employees';

export const fetchEmployees = () => async dispatch => {
  try {
    const res = await api.get('/employees');
    dispatch({
      type: FETCH_EMPLOYEES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err, 'err');
  }
};
