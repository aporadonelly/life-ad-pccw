import { createAsyncThunk } from "@reduxjs/toolkit";
import { employeesAdapter } from "@adapters";

export const getGender = createAsyncThunk(
  "@@EMPF/EMPLOYEES/GET_GENDER",
  async (_payload, { rejectWithValue }) => {
    try {
      const gender = await employeesAdapter.fetchGender();
      return {
        gender,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getIdType = createAsyncThunk(
  "@@EMPF/EMPLOYEES/GET_ID_TYPE",
  async (_payload, { rejectWithValue }) => {
    try {
      const idType = await employeesAdapter.fetchIdType();
      return {
        idType,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getNationality = createAsyncThunk(
  "@@EMPF/EMPLOYEES/GET_NATIONALITY",
  async (_payload, { rejectWithValue }) => {
    try {
      const nationality = await employeesAdapter.fetchNationality();
      return {
        nationality,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getPlaceOfBirth = createAsyncThunk(
  "@@EMPF/EMPLOYEES/GET_PLC_OF_BIRTH",
  async (_payload, { rejectWithValue }) => {
    try {
      const placeOfBirth = await employeesAdapter.fetchPlaceOfBirth();
      return {
        placeOfBirth,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getEmployeeType = createAsyncThunk(
  "@@EMPF/EMPLOYEES/GET_EMPLOYEE_TYPE",
  async (_payload, { rejectWithValue }) => {
    try {
      const employeeType = await employeesAdapter.fetchEmployeeType();
      return {
        employeeType,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getIndustryType = createAsyncThunk(
  "@@EMPF/EMPLOYEES/GET_INDUSTRY_TYPE",
  async (_payload, { rejectWithValue }) => {
    try {
      const industryType = await employeesAdapter.fetchIndustryType();
      return {
        industryType,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getOccupation = createAsyncThunk(
  "@@EMPF/EMPLOYEES/GET_OCCUPATION",
  async (_payload, { rejectWithValue }) => {
    try {
      const occupation = await employeesAdapter.fetchOccupation();
      return {
        occupation,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getSchemeType = createAsyncThunk(
  "@@EMPF/EMPLOYEES/GET_SCHEME_TYPE",
  async (_payload, { rejectWithValue }) => {
    try {
      const schemeType = await employeesAdapter.fetchSchemeType();
      return {
        schemeType,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getStatus = createAsyncThunk(
  "@@EMPF/EMPLOYEES/GET_STATUS",
  async (_payload, { rejectWithValue }) => {
    try {
      const status = await employeesAdapter.fetchStatus();
      return {
        status,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);
