import {
  SERVER_ADDRESS,
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
} from './types';
import axios from 'axios';
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

//for searching of users via form
export const searchMembers = p => async dispatch => {
  const config = {
    headers: getHeaders(),
    params: p,
  };
  try {
    const res = await api.get('http://localhost:4000/employees/', config);
    dispatch({
      type: SEARCH_MEMBERS,
      payload: res.data,
    });
  } catch (e) {
    console.log(e, 'err');
  }
};

export const saveQuery = p => async dispatch => {
  try {
    const res = p;
    dispatch({
      type: CREATE_QUERY_SUCCESS,
      payload: res,
    });
  } catch (e) {
    console.log(e, 'err');
  }
};

//Fetch Gender
export const fetchGender = () => async dispatch => {
  try {
    const res = await axios.get(
      `${SERVER_ADDRESS}/getCustomTypList?groupId=GD`,
      await getHeaders()
    );

    if (res.status === 200) {
      dispatch({
        type: FETCH_GENDER_SUCCESS,
        payload: res.data,
      });
    }
  } catch (e) {
    dispatch({
      type: FETCH_GENDER_FAIL,
      payload: e,
    });
  }
};

//Fetch  Nationality
export const fetchNationality = () => async dispatch => {
  try {
    const res = await axios.get(
      `${SERVER_ADDRESS}/getCustomTypList?groupId=NTN`,
      await getHeaders()
    );

    if (res.status === 200) {
      console.log(res, 'fetchNationality');
      dispatch({
        type: FETCH_NATIONALITY_SUCCESS,
        payload: res.data,
      });
    }
  } catch (e) {
    dispatch({
      type: FETCH_NATIONALITY_FAIL,
      payload: e,
    });
  }
};

//Fetch ID Type
export const fetchIdType = () => async dispatch => {
  try {
    const res = await axios.get(
      `${SERVER_ADDRESS}/getCustomTypList?groupId=ID`,
      await getHeaders()
    );

    if (res.status === 200) {
      dispatch({
        type: FETCH_ID_SUCCESS,
        payload: res.data,
      });
    }
  } catch (e) {
    dispatch({
      type: FETCH_ID_FAIL,
      payload: e,
    });
  }
};
