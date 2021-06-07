import { createAsyncThunk } from "@reduxjs/toolkit";
import { employerAdapter } from "@adapters";

export const getEmployers = createAsyncThunk(
  "@@EMPF/EMPLOYER/GET_EMPLOYERS",
  async (_payload, { rejectWithValue }) => {
    try {
      const employers = await employerAdapter.getAll();
      return {
        employers,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const viewAuthPerson = createAsyncThunk(
  "@@EMPF/EMPLOYER/VIEW_AUTH_PERSON",
  async (_payload, { rejectWithValue }) => {
    try {
      const authPerson = await employerAdapter.viewEmployerAuthPerson();
      return {
        authPerson,
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const LdRegCmpnyInfoforAdmnPrtl = createAsyncThunk(
  "@@EMPF/COMPANY/GET_COMPANY_REG_INFO",
  async (_payload, { rejectWithValue }) => {
    try {
      const companyRegInfo = await employerAdapter.LdRegCmpnyInfoforAdmnPrtl();
      return { companyRegInfo };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getAuthorizedPersonList = createAsyncThunk(
  "@@EMPF/EMPLOYER/GET_AUTH_PERSON_INFO",
  async (_payload, { rejectWithValue }) => {
    try {
      const authPersonInfo = await employerAdapter.LdAuthPrsnInfo();
      return { authPersonInfo };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);
