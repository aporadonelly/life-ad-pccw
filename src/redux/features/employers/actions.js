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
