import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAdapter } from "@adapters";

export const login = createAsyncThunk(
  "@@EMPF/USER/LOGIN",
  async (payload, { rejectWithValue }) => {
    try {
      const { sessionToken: token } = await userAdapter.login(payload);
      const user = await userAdapter.getUserByToken(token);
      return { token, user };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);
