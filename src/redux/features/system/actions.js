import { createAsyncThunk } from "@reduxjs/toolkit";
import { systemAdapter } from "@adapters";

export const getSystemEnv = createAsyncThunk(
  "@@empf/system/getSystemEnv",
  async (_payload, { rejectWithValue }) => {
    try {
      const { prmtrTyp, prmtrDscrptn } = await systemAdapter.getSystemEnv();
      return {
        systemEnv: {
          prmtrTyp,
          prmtrDscrptn,
        },
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getCycleDate = createAsyncThunk(
  "@@empf/system/getCycleDate",
  async (_payload, { rejectWithValue }) => {
    try {
      const { cycleDt: cycleDate } = await systemAdapter.getCycleDate();
      return { cycleDate };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getCountryList = createAsyncThunk(
  "@@empf/system/getCountryLst",
  async (_payload, { rejectWithValue }) => {
    try {
      const countries = await systemAdapter.getCountryLst();
      return { countries };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getTermReasons = createAsyncThunk(
  "@@empf/system/getTermRsnLst",
  async (_payload, { rejectWithValue }) => {
    try {
      const termReasons = await systemAdapter.getTermRsnLst();
      return { termReasons };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getCustomTypeList = createAsyncThunk(
  "@@empf/system/getCustomTypList",
  async (payload, { rejectWithValue }) => {
    try {
      const customTypes = await systemAdapter.getCustomTypList(payload);
      return { customTypes };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const getWrkStrmSttsLst = createAsyncThunk(
  "@@empf/system/getWrkStrmSttsLst",
  async (payload, { rejectWithValue }) => {
    try {
      const workStreams = await systemAdapter.getWrkStrmSttsLst(payload);
      return {
        workStreams: workStreams.map((workStream) => ({
          ...workStream,
          workStream: payload.workstream,
        })),
      };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);
