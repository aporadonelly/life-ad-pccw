import { terminationAdapter } from "@adapters";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const resetTermination = createAction(
  "@@EMPF/TERMINATION/RESET",
  () => ({
    payload: {},
  })
);

export const loadEmpSchemes = createAsyncThunk(
  "@@EMPF/TERMINATION/ldEETermEdtMd",
  // async (_payload, { rejectWithValue }) => { // no payload
  async (payload, { rejectWithValue }) => {
    try {
      const clientSchemes = await terminationAdapter.getClientSchemes(payload);
      //console.log("actions-termination", clientSchemes);
      return { clientSchemes };
    } catch (error) {
      console.error(error);
      return rejectWithValue({ error });
    }
  }
);

export const loadEmpTerm = createAsyncThunk(
  "@@EMPF/TERMINATION/vldMbrTerm",
  // async (_payload, { rejectWithValue }) => { // no payload
  async (payload, { rejectWithValue }) => {
    try {
      const empTerm = await terminationAdapter.getMbrTerm(payload);
      //console.log("actions-termination", empTerm);
      return { empTerm };
    } catch (error) {
      console.error(error);
      return rejectWithValue({ error });
    }
  }
);

export const saveTermination = createAsyncThunk(
  "@@EMPF/TERMINATION/svEETermInst",
  async (payload, { rejectWithValue }) => {
    try {
      await terminationAdapter.saveTermination(payload);
      console.log("actions-termination");
      return { message: "success" };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);
