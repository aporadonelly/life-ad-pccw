import { createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { initialState } from "./state";
import { getIndAccntLst } from "./actions";

const persistConfig = {
  key: "enrollmentCEE",
  storage: storage,
  blacklist: ["isLoading", "error"],
};

const enrollmentCEEReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getIndAccntLst.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(getIndAccntLst.fulfilled, (state, action) => {
      state.indAccntLst = action.payload;
      state.isLoading = false;
    })
);

export default persistReducer(persistConfig, enrollmentCEEReducer);
