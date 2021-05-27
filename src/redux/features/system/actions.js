import { createAsyncThunk } from "@reduxjs/toolkit";
import { systemAdapter } from "@adapters";

export const getSystemEnv = createAsyncThunk(
  "@@EMPF/SYSTEM/GET_SYSTEM_ENV",
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
  "@@EMPF/SYSTEM/GET_CYCLE_DATE",
  async (_payload, { rejectWithValue }) => {
    try {
      const { cycleDt: cycleDate } = await systemAdapter.getCycleDate();
      return { cycleDate };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);
