import { createAsyncThunk } from "@reduxjs/toolkit";
import { enrollmentCasualEmployee } from "@adapters";

export const getIndAccntLst = createAsyncThunk(
  "@@empf/enr/cee/getIndAccntLst",
  async (payload, { rejectWithValue }) => {
    try {
      const indAccntLst = await enrollmentCasualEmployee.getIndAccntLst(
        payload
      );
      return { indAccntLst };
    } catch (error) {
      console.log("ERROR: ", error);
      if (error === "EXMSG_RECORD_NOT_FOUND") {
        return { indAccntLst: [] };
      }
      return rejectWithValue({ error });
    }
  }
);
