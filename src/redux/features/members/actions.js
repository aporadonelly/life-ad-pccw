import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { systemAdapter, employeesAdapter } from "@adapters";
import { push } from "connected-react-router";
import { pickBy } from "lodash";

export const getGender = createAsyncThunk(
  "@@EMPF/MEMBERS/GET_GENDER",
  async (_payload, { rejectWithValue }) => {
    try {
      const gender = await systemAdapter.fetchGender();
      return {
        gender,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getIdType = createAsyncThunk(
  "@@EMPF/MEMBERS/GET_ID_TYPE",
  async (_payload, { rejectWithValue }) => {
    try {
      const idType = await systemAdapter.fetchIdType();
      return {
        idType,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getNationality = createAsyncThunk(
  "@@EMPF/MEMBERS/GET_NATIONALITY",
  async (_payload, { rejectWithValue }) => {
    try {
      const nationality = await systemAdapter.fetchNationality();
      return {
        nationality,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getPlaceOfBirth = createAsyncThunk(
  "@@EMPF/MEMBERS/GET_PLC_OF_BIRTH",
  async (_payload, { rejectWithValue }) => {
    try {
      const placeOfBirth = await systemAdapter.fetchPlaceOfBirth();
      return {
        placeOfBirth,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getEmployeeType = createAsyncThunk(
  "@@EMPF/MEMBERS/GET_EMPLOYEE_TYPE",
  async (_payload, { rejectWithValue }) => {
    try {
      const employeeType = await systemAdapter.fetchEmployeeType();
      return {
        employeeType,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getIndustryType = createAsyncThunk(
  "@@EMPF/MEMBERS/GET_INDUSTRY_TYPE",
  async (_payload, { rejectWithValue }) => {
    try {
      const industryType = await systemAdapter.fetchIndustryType();
      return {
        industryType,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getOccupation = createAsyncThunk(
  "@@EMPF/MEMBERS/GET_OCCUPATION",
  async (_payload, { rejectWithValue }) => {
    try {
      const occupation = await systemAdapter.fetchOccupation();
      return {
        occupation,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getSchemeType = createAsyncThunk(
  "@@EMPF/MEMBERS/GET_SCHEME_TYPE",
  async (_payload, { rejectWithValue }) => {
    try {
      const schemeType = await systemAdapter.fetchSchemeType();
      return {
        schemeType,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getStatus = createAsyncThunk(
  "@@EMPF/MEMBERS/GET_STATUS",
  async (_payload, { rejectWithValue }) => {
    try {
      const status = await systemAdapter.fetchStatus();
      return {
        status,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getAllMembers = createAsyncThunk(
  "@@EMPF/MEMBERS/SEARCH_MEMBERS",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const employees = await employeesAdapter.searchMembers(payload);
      dispatch(push("/members/enquiry/result"));
      dispatch(saveEnquiry(payload));
      return { employees: employees.content };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getSpecificMember = createAsyncThunk(
  "@@EMPF/MEMBERS/VIEW_MEMBER",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const employee = await employeesAdapter.viewMember(payload);
      dispatch(push("/members/enquiry/information"));
      return { employee };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const saveEnquiry = createAction(
  "@@EMPF/MEMBERS/SAVE_ENQUIRY",
  (payload) => {
    const enquiry = pickBy(payload, (value) => {
      return value !== "";
    });
    return { payload: { enquiry } };
  }
);
