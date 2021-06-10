import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAdapter } from "@adapters";

export const logout = createAsyncThunk(
  "@@empdf/auth/logout",
  async (_payload, { rejectWithValue }) => {
    try {
      await userAdapter.logout();
      return {};
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const reissue = createAsyncThunk(
  "@@empdf/auth/reissue",
  async (_payload, { rejectWithValue }) => {
    try {
      await userAdapter.reissue();
      return {};
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const userinfo = createAsyncThunk(
  "@@empdf/auth/userinfo",
  async (_payload, { rejectWithValue }) => {
    try {
      await userAdapter.userinfo();
      return {};
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);
