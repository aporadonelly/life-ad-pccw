import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import { identity, pickBy } from "lodash";
import {
  initialState,
  employersAdapter,
  contactPersonsAdapter,
  gradeListAdapter,
  crsFormListAdapter,
  payrollGroupListAdapter,
} from "./state";
import {
  draftEnquiry,
  ldSrchCmpny,
  ldEnrCmpnyInfo,
  ldCntctPrsnInfo,
  ldGradeInfo,
  getGradeLst,
  ldPayrollGrpInfo,
  getCRSFormLst,
  getPayrollGrpList,
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
    .addCase(getPayrollGrpList.pending, (state, _action) => {
      state.isLoading = true;
      state.error = null;
      payrollGroupListAdapter.setAll(state.payrollGroupList, []);
    })
    .addCase(getCRSFormLst.pending, (state, _action) => {
      state.isLoading = true;
      state.error = null;
      crsFormListAdapter.setAll(state.crsFormList, []);
    })
    .addCase(getCRSFormLst.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      crsFormListAdapter.upsertMany(
        state.crsFormList,
        action.payload.crsFormList
      );
    })
    .addCase(getPayrollGrpList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      payrollGroupListAdapter.upsertMany(
        state.payrollGroupList,
        action.payload.payrollGroupList
      );
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
      isAnyOf(
        ldSrchCmpny.rejected,
        ldEnrCmpnyInfo.rejected,
        getPayrollGrpList.rejected,
        getCRSFormLst.rejected
      ),
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      }
    )
);

export default persistReducer(persistConfig, enrollmentEmployerReducer);
