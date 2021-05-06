import { createAsyncThunk } from "@reduxjs/toolkit";
import { systemAdapter } from "@adapters";
import moment from "moment";

export const getSystemEnv = createAsyncThunk(
  "@@EMPF/SYSTEM/GET_SYSTEM_ENV",
  async (payload, { rejectWithValue }) => {
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
  "@@EMPF/SYSTEM/GET_CYCLE_DATE",
  async (payload, { rejectWithValue }) => {
    try {
      const { cycleDt } = await systemAdapter.getCycleDate();
      return { cycleDate: moment(cycleDt).format("DD MMM YYYY") };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);
