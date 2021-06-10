import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { logout, reissue, userinfo } from "./actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "user",
  storage: storage,
  blacklist: ["isLoading", "error"],
};

const userReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(logout.pending, (state, _action) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(logout.fulfilled, (state, _action) => {
      state.isLoading = false;
      state.user = null;
      state.expires = null;
      storage.removeItem("persist:members");
      storage.removeItem("persist:system");
    })
    .addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    })
    .addCase(reissue.pending, (state, _action) => {
      state.isAuthenticating = true;
      state.error = null;
    })
    .addCase(reissue.fulfilled, (state, action) => {
      state.isAuthenticating = false;
      state.expires = action.payload.expires;
    })
    .addCase(reissue.rejected, (state, action) => {
      state.isAuthenticating = false;
      state.error = action.payload.error;
    })
    .addCase(userinfo.pending, (state, _action) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(userinfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
    })
    .addCase(userinfo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    })
);

export default persistReducer(persistConfig, userReducer);
