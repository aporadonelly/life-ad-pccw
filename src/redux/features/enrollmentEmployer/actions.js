import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { enrollmentEmployer } from "@adapters";

export const draftEnquiry = createAction("@@empf/enr/er/draftEnquiry");

export const setSelectedPnsnId = createAction(
  "@@empf/enr/er/setSelectedPnsnId"
);

export const ldSrchCmpny = createAsyncThunk(
  "@@empf/enr/er/ldSrchCmpny",
  async (payload, { rejectWithValue }) => {
    try {
      const employers = await enrollmentEmployer.ldSrchCmpny(payload);
      return { employers };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

// export const ldSrchCmpny = createAsyncThunk(
//   "@@empf/reg/er/ldSrchCmpny",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const employers = await registrationEmployer.ldSrchCmpny(payload);
//       return { employers };
//     } catch (error) {
//       return rejectWithValue({ error });
//     }
//   }
// );
