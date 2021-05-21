import {
  VIEW_EMPLOYER_AUTH_PERSON_SUCCESS,
  VIEW_EMPLOYER_AUTH_PERSON_FAIL,
  FETCH_EMPLOYERS_SUCCESS,
  FETCH_EMPLOYERS_FAIL,
} from "./types";
import axios from "axios";
import axiosConfig from "./config";

//fetch all employrs
export const fetchEmployers = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3000/employees");

    dispatch({
      type: FETCH_EMPLOYERS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: FETCH_EMPLOYERS_FAIL,
      payload: e,
    });
  }
};

//view specific member
export const viewEmployerAuthPerson = () => async (dispatch) => {
  try {
    const config = {
      headers: axiosConfig(),
      params: {
        id: 1,
      },
    };
    const res = await axios.get("http://localhost:3000/employees/", config);
    if (res.status === 200) {
      console.log(res.data);
      dispatch({
        type: VIEW_EMPLOYER_AUTH_PERSON_SUCCESS,
        payload: res.data,
      });
    }
  } catch (e) {
    dispatch({
      type: VIEW_EMPLOYER_AUTH_PERSON_FAIL,
      payload: e,
    });
  }
};
