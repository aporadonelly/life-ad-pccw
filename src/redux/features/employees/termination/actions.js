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
      //console.log("actions-termination", payload);
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
      await terminationAdapter.save(payload);
      console.log("actions-termination");
      return { message: "success" };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const validTermination = createAsyncThunk(
  "@@EMPF/TERMINATION/vldEETermSbmssn",
  async (payload, { rejectWithValue }) => {
    try {
      await terminationAdapter.postValidate(payload);
      console.log("actions-termination");
      return { validation: "success" };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const loadTermReason = createAsyncThunk(
  "@@EMPF/TERMINATION/getTermRsnLst",
  async (_payload, { rejectWithValue }) => {
    try {
      const reasonTerm = await terminationAdapter.getReason();
      console.log("actions-termination", reasonTerm);
      return { reasonTerm };
    } catch (error) {
      console.error(error);
      return rejectWithValue({ error });
    }
  }
);
