import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { uploadDocuments } from "./actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "dataModification",
  storage: storage,
  blacklist: ["isLoading", "error"],
};

export const dataModificationReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(uploadDocuments.pending, (state, _action) => {
      return { ...state, fileReport: [], isLoading: true, error: null };
    })
    .addCase(uploadDocuments.fulfilled, (state, action) => {
      const { fileReport } = action.payload;
      console.log('fileReport')
      console.log(fileReport)
      return { ...state, isLoading: false, fileReport };
    })
    .addCase(uploadDocuments.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })
);

export default persistReducer(persistConfig, dataModificationReducer)