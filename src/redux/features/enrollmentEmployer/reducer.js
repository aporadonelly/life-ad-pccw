import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import { identity, pickBy } from "lodash";
import {
  initialState,
  employersAdapter,
  schemesAdapter,
  trusteesAdapter,
} from "./state";
import {
  draftEnquiry,
  setSelectedPnsnId,
  setSelectedCompanyUUID,
  setSelectedEmployerUUID,
  setSelectedSchemeUUID,
  setSelectedPayrollGroupUUID,
  ldSrchCmpny,
  ldEnrCmpnyInfo,
} from "./actions";
import { getSchmLst, getTrstLst } from "@redux/features/system/actions";
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
    .addCase(getSchmLst.fulfilled, (state, action) => {
      schemesAdapter.upsertMany(state.schemes, action.payload.schemes);
    })
    .addCase(getTrstLst.fulfilled, (state, action) => {
      trusteesAdapter.upsertMany(state.trustees, action.payload.trustees);
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
