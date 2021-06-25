import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { employerAdapter } from "@adapters";
import { push } from "connected-react-router";
import { pickBy } from "lodash";

export const getEmployers = createAsyncThunk(
  "@@EMPF/EMPLOYER/GET_EMPLOYERS",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const employers = await employerAdapter.searchEmployers(payload);
      dispatch(push("/employers/enquiry/result"));
      dispatch(saveEnquiry(payload));
      return { employers };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const saveEnquiry = createAction(
  "@@EMPF/EMPLOYER/SAVE_ENQUIRY",
  (payload) => {
    const enquiry = pickBy(payload, (value) => {
      return value !== "";
    });
    return { payload: { enquiry } };
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
