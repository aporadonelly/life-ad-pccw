import { createReducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import {
  getEmployers,
  viewAuthPerson,
  LdRegCmpnyInfoforAdmnPrtl,
  saveEnquiry,
} from "./actions";
import { initialState } from "./state";

const persistConfig = {
  key: "employers",
  storage: storage,
  blacklist: ["isLoading", "error"],
};

const employerReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(getEmployers.pending, (state, _action) => {
      return { ...state, isLoading: true, error: null };
    })
    .addCase(getEmployers.fulfilled, (state, action) => {
      const { employers } = action.payload;
      return { ...state, isLoading: false, employers };
    })
    .addCase(getEmployers.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })

    //viewing of authorized person
    .addCase(viewAuthPerson.pending, (state, _action) => {
      return { ...state, isLoading: true, error: null };
    })
    .addCase(viewAuthPerson.fulfilled, (state, action) => {
      const { authPerson } = action.payload;
      return { ...state, isLoading: false, authPerson };
    })
    .addCase(viewAuthPerson.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })

    // LdRegCmpnyInfoForAdmnPrtl
    .addCase(LdRegCmpnyInfoforAdmnPrtl.pending, (state, _action) => {
      return { ...state, isLoading: true, error: null };
    })
    .addCase(LdRegCmpnyInfoforAdmnPrtl.fulfilled, (state, action) => {
      const { companyRegInfo } = action.payload;
      return { ...state, isLoading: false, companyRegInfo };
    })
    .addCase(LdRegCmpnyInfoforAdmnPrtl.rejected, (state, action) => {
      const { error } = action.payload;
      return { ...state, isLoading: false, error };
    })

    //Saving enquiry passed on the form
    .addCase(saveEnquiry, (state, action) => {
      const { enquiry } = action.payload;
      return { ...state, enquiry, error: null };
    })
);
export default persistReducer(persistConfig, employerReducer);
