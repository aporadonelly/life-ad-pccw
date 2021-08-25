import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { vldUpldDoc } from "./actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "dataModification",
  storage: storage,
  blacklist: ["isLoading", "error"],
};

export const dataModificationReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(vldUpldDoc.pending, (state, _action) => {
      return { ...state, fileReport: {}, isLoading: true, error: null };
    })
    .addCase(vldUpldDoc.fulfilled, (state, action) => {
      const { fileReport } = action.payload;
      return { ...state, isLoading: false, fileReport };
    })
    .addCase(vldUpldDoc.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })
);

export default persistReducer(persistConfig, dataModificationReducer);
