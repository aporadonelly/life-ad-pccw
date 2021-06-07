import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { login, logout } from "./actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "user",
  storage: storage,
  blacklist: ["isLoading", "error"],
};

const userReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(login.pending, (state, _action) => {
      return { ...state, isLoading: true, error: null };
    })
    .addCase(login.fulfilled, (state, action) => {
      const { token, user } = action.payload;
      return { ...state, isLoading: false, error: null, token, user };
    })
    .addCase(login.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })
    .addCase(logout, (state, _action) => {
      return { ...state, token: null, user: null };
    })
);

export default persistReducer(persistConfig, userReducer);
