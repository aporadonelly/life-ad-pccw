import { createAsyncThunk } from "@reduxjs/toolkit";
import { employerAdapter } from "@adapters";
import { push } from "connected-react-router";

export const getEmployers = createAsyncThunk(
  "@@EMPF/EMPLOYER/GET_EMPLOYERS",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const employers = await employerAdapter.searchEmployers(payload);
      dispatch(push("/employers"));
      return { employers: employers.content };
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

export const getContactPerson = createAsyncThunk(
"@@EMPF/EMPLOYER/GET_CONTACT_PERSON",
async (_payload, { rejectWithValue }) => {
  try {
    const contactPerson = await employerAdapter.LdRegCntctPrsn();
    return { contactPerson };
  } catch (error) {
    return rejectWithValue({ error });
  }
}
);
