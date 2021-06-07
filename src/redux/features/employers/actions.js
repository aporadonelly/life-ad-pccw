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
