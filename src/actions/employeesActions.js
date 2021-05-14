import {
  SERVER_ADDRESS,
  EMPLOYEE_API_URL,
  FETCH_EMPLOYEES_SUCCESS,
  FETCH_EMPLOYEES_FAIL,
  VIEW_EMPLOYEE_SUCCESS,
  VIEW_EMPLOYEE_FAIL,
  SEARCH_MEMBERS_SUCCESS,
  SEARCH_MEMBERS_FAIL,
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
} from "./types";
import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    try {
      const localStorage = window.localStorage.getItem("persist:root")
      const user = JSON.parse(localStorage).user;
      const token = JSON.parse(user).token
      config.headers.Authorization = `Bearer ${token}`;
      return config
    } catch {

      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
)

export const getHeaders = async () => {
  const HEADERS = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return HEADERS;
};



//fetch all employees or members
export const fetchEmployees = () => async dispatch => {
  try {
    const res = await ("/employees");
    dispatch({
      type: FETCH_EMPLOYEES_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: FETCH_EMPLOYEES_FAIL,
      payload: e,
    });
  }
};

//view specific member
export const viewMember = id => async dispatch => {
  try {
    const config = {
      headers: getHeaders(),
      params: {
        empfId: id,
      },
    };
    const res = await axios.get(`${EMPLOYEE_API_URL}/ldRegIndInfo`, config);
    if (res.status === 200) {
      dispatch({
        type: VIEW_EMPLOYEE_SUCCESS,
        payload: res.data,
      });
    }
  } catch (e) {
    dispatch({
      type: VIEW_EMPLOYEE_FAIL,
      payload: e,
    });
  }
};

//for searching of users via form
export const searchMembers = (
  p,
  pageNo = 0,
  pageSize = 50
) => async dispatch => {
  dispatch({
    type: 'SEARCH_MEMBERS_PENDING',
  });
  const config = {
    headers: getHeaders(),
    params: {
      // ...p,
      pageNo,
      pageSize,
      mpfID: p.mpf_id,
      fullName: p.first_name,
      gender: p.gender,
      chineseName: p.chinese_name,
      idType: p.id_type,
      idNumber: p.id_number,
      dateOfBirth: p.date_of_birth,
      nationality: p.nationality,
      placeOfBirth: p.place_of_birth,
      mobileNumber: p.mobile_number,
      address: p.address,
      email: p.email,
      dateOfEmployment: p.date_of_employment,
      employeeType: p.employee_type,
      reportedIndustryType: p.reported_industry_type,
      occupation: p.occupation,
      schemeUuid: p.mpf_scheme_name,
      taxResidency: p.tax_residency,
      tin: p.tin,
      status: p.status,
    },
  };

  try {
    const res = await axios.get(`${EMPLOYEE_API_URL}/ldSrchRegInd`, config);
    dispatch({
      type: SEARCH_MEMBERS_SUCCESS,
      payload: res.data.content,
    });
  } catch (e) {
    dispatch({
      type: SEARCH_MEMBERS_FAIL,
      payload: e,
    });
  }
};

export const saveQuery = p => async dispatch => {
  const res = p;
  dispatch({
    type: CREATE_QUERY_SUCCESS,
    payload: res,
  });
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

//Fetch Employee Type
export const fetchEmployeeType = () => async dispatch => {
  try {
    const res = await axios.get(
      `${SERVER_ADDRESS}/getCustomTypList?groupId=EP`,
      await getHeaders()
    );

    if (res.status === 200) {
      dispatch({
        type: FETCH_EMPLOYEE_SUCCESS,
        payload: res.data,
      });
    }
  } catch (e) {
    dispatch({
      type: FETCH_EMPLOYEE_FAIL,
      payload: e,
    });
  }
};

//Fetch Industry Type
export const fetchIndustryType = () => async dispatch => {
  try {
    const res = await axios.get(
      `${SERVER_ADDRESS}/getCustomTypList?groupId=NT`,
      await getHeaders()
    );

    if (res.status === 200) {
      dispatch({
        type: FETCH_INDUSTRY_TYPE_SUCCESS,
        payload: res.data,
      });
    }
  } catch (e) {
    dispatch({
      type: FETCH_INDUSTRY_TYPE_FAIL,
      payload: e,
    });
  }
};

//Fetch Scheme Type"
export const fetchSchemeType = () => async dispatch => {
  try {
    const res = await axios.get(
      `${SERVER_ADDRESS}/getCustomTypList?groupId=SC`,
      await getHeaders()
    );
    if (res.status === 200) {
      dispatch({
        type: FETCH_SCHEME_TYPE_SUCCESS,
        payload: res.data,
      });
    }
  } catch (e) {
    dispatch({
      type: FETCH_SCHEME_TYPE_FAIL,
      payload: e,
    });
  }
};

//Fetch Occupation"
export const fetchOccupation = () => async dispatch => {
  try {
    const res = await axios.get(
      `${SERVER_ADDRESS}/getCustomTypList?groupId=MB`,
      await getHeaders()
    );

    if (res.status === 200) {
      dispatch({
        type: FETCH_OCCUPATION_SUCCESS,
        payload: res.data,
      });
    }
  } catch (e) {
    dispatch({
      type: FETCH_OCCUPATION_FAIL,
      payload: e,
    });
  }
};

//Fetch Status"
export const fetchStatus = () => async dispatch => {
  try {
    const res = await axios.get(
      `${SERVER_ADDRESS}/getCustomTypList?groupId=ST`,
      await getHeaders()
    );

    if (res.status === 200) {
      dispatch({
        type: FETCH_STATUS_SUCCESS,
        payload: res.data,
      });
    }
  } catch (e) {
    dispatch({
      type: FETCH_STATUS_FAIL,
      payload: e,
    });
  }
};

//Fetch Place of Birth
export const fetchPlaceOfBirth = () => async dispatch => {
  try {
    const res = await axios.get(
      `${SERVER_ADDRESS}/getCountryLst`,
      await getHeaders()
    );

    if (res.status === 200) {
      dispatch({
        type: FETCH_POB_SUCCESS,
        payload: res.data,
      });
    }
  } catch (e) {
    dispatch({
      type: FETCH_POB_FAIL,
      payload: e,
    });
  }
};
