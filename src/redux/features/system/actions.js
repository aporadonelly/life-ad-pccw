import { createAsyncThunk } from "@reduxjs/toolkit";
import { systemAdapter } from "@adapters";
import moment from "moment";

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
