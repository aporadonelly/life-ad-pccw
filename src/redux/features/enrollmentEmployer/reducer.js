import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import { identity, pickBy } from "lodash";
import {
  initialState,
  employersAdapter,
  contactPersonsAdapter,
  gradeListAdapter,
} from "./state";
import {
  draftEnquiry,
  setSelectedPnsnId,
  setSelectedCompanyUUID,
  setSelectedContactPersonUUID,
  setSelectedEmployerUUID,
  setSelectedSchemeUUID,
  setSelectedPayrollGroupUUID,
  ldSrchCmpny,
  ldEnrCmpnyInfo,
  ldCntctPrsnInfo,
  ldGradeInfo,
  getGradeLst,
  ldPayrollGrpInfo,
} from "./actions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "enrollmentEmployer",
  storage: storage,
  blacklist: ["isLoading", "error"],
};

const enrollmentEmployerReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(draftEnquiry, (state, action) => {
      state.draftEnquiry = pickBy(action.payload, identity);
    })
    .addCase(setSelectedPnsnId, (state, action) => {
      state.selectedPnsnId = action.payload.pnsnId;
    })
    .addCase(setSelectedCompanyUUID, (state, action) => {
      state.selectedCompanyUUID = action.payload.companyUuid;
    })
    .addCase(setSelectedContactPersonUUID, (state, action) => {
      state.selectedContactPersonUUID = action.payload.cntctPrsnUuid;
    })
    .addCase(setSelectedEmployerUUID, (state, action) => {
      state.selectedEmployerUUID = action.payload.employerUuid;
    })
    .addCase(setSelectedSchemeUUID, (state, action) => {
      state.selectedSchemeUUID = action.payload.schemeUuid;
    })
    .addCase(setSelectedPayrollGroupUUID, (state, action) => {
      state.selectedPayrollGroupUUID = action.payload.payrollGrpUuid;
    })
    .addCase(ldSrchCmpny.pending, (state, _action) => {
      state.isLoading = true;
      state.error = null;
      employersAdapter.setAll(state.employers, []);
    })
    .addCase(ldEnrCmpnyInfo.pending, (state, _action) => {
      state.isLoading = false;
      state.error = null;
      state.enrCompanyInfo = {};
    })
    .addCase(ldSrchCmpny.fulfilled, (state, action) => {
      state.isLoading = false;
      employersAdapter.upsertMany(state.employers, action.payload.employers);
    })
    .addCase(ldEnrCmpnyInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.enrCompanyInfo = action.payload.enrCmpnyInfo;
    })
    .addCase(ldCntctPrsnInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      contactPersonsAdapter.upsertMany(
        state.contactPersons,
        action.payload.contactPersons
      );
    })
    .addCase(ldGradeInfo.fulfilled, (state, action) => {
      state.gradeInfo = action.payload.gradeInfo;
    })
    .addCase(ldCntctPrsnInfo.pending, (state, _action) => {
      state.isLoading = true;
      state.error = null;
      contactPersonsAdapter.setAll(state.contactPersons, []);
    })
    .addCase(getGradeLst.fulfilled, (state, action) => {
      gradeListAdapter.setAll(state.gradeList, action.payload.gradeList);
    })
    .addCase(getGradeLst.pending, (state, _action) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(ldPayrollGrpInfo.fulfilled, (state, action) => {
      state.payrollGrpInfo = action.payload.payrollGrpInfo;
    })
    .addCase(ldPayrollGrpInfo.pending, (state, _action) => {
      state.isLoading = true;
      state.error = null;
    })
    .addMatcher(
      isAnyOf(ldSrchCmpny.rejected, ldEnrCmpnyInfo.rejected),
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      }
    )
);

export default persistReducer(persistConfig, enrollmentEmployerReducer);
