import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import {
  initialState,
  authorizedPersonsAdapter,
  directorsAdapter,
  partnersAdapter,
  beneficialOwnersAdapter,
} from "./state";
import {
  ldCmpnyRltdPrsn,
  ldRegCmpnyInfoforAdmnPrtl,
  setSelectedClientUUID,
  setSelectedCompanyUUID,
} from "./actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "registrationEmployer",
  storage: storage,
  blacklist: ["isLoading", "error"],
};

const registrationEmployerReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(ldCmpnyRltdPrsn.fulfilled, (state, action) => {
      state.isLoading = false;

      if (action.payload.cmpnyPrsnTypId === "CS_AP")
        console.log("CSAP", action.payload);
      authorizedPersonsAdapter.upsertMany(
        state.authorizedPersons,
        action.payload.cmpnyRltdPrsn
      );

      if (action.payload.cmpnyPrsnTypId === "CS_DT")
        directorsAdapter.upsertMany(
          state.directors,
          action.payload.cmpnyRltdPrsn
        );

      if (action.payload.cmpnyPrsnTypId === "CS_PN")
        partnersAdapter.upsertMany(
          state.partners,
          action.payload.cmpnyRltdPrsn
        );

      if (action.payload.cmpnyPrsnTypId === "CS_BO")
        beneficialOwnersAdapter.upsertMany(
          state.beneficialOwners,
          action.payload.cmpnyRltdPrsn
        );
    })
    .addCase(ldRegCmpnyInfoforAdmnPrtl.fulfilled, (state, action) => {
      state.isLoading = false;
      state.registrationCompanyInformation = action.payload.regCmpnyInfo;
    })
    .addCase(setSelectedCompanyUUID, (state, action) => {
      state.selectedCompanyUUID = action.payload.cmpnyUuid;
    })
    .addCase(setSelectedClientUUID, (state, action) => {
      state.selectedClientUUID = action.payload.clntUuid;
    })
    .addCase(ldRegCmpnyInfoforAdmnPrtl.pending, (state, _action) => {
      state.isLoading = true;
      state.error = null;
      state.registrationCompanyInformation = {};
    })
    .addMatcher(isAnyOf(ldCmpnyRltdPrsn.pending), (state, _action) => {
      state.isLoading = true;
      state.error = null;
    })
    .addMatcher(
      isAnyOf(ldCmpnyRltdPrsn.rejected, ldRegCmpnyInfoforAdmnPrtl.rejected),
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      }
    )
);

export default persistReducer(persistConfig, registrationEmployerReducer);
