import { createEntityAdapter } from "@reduxjs/toolkit";

export const employersAdapter = createEntityAdapter({
  selectId: (employer) => employer.companyName,
});

export const contactPersonsAdapter = createEntityAdapter({
  selectId: (contactPerson) => contactPerson.cntctPrsnUuid,
});

export const payrollGroupContactPersonsAdapter = createEntityAdapter({
  selectId: (payrollGroupContactPerson) =>
    payrollGroupContactPerson.cmpnyBrnchCd,
});

export const gradeListAdapter = createEntityAdapter({
  selectId: (gradeList) => gradeList.id,
});

export const schemesAdapter = createEntityAdapter({
  selectId: (scheme) => scheme.name,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const trusteesAdapter = createEntityAdapter({
  selectId: (trustee) => trustee.name,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const payrollGroupsListAdapter = createEntityAdapter({
  selectId: (payrollGroupList) => payrollGroupList.pyrollGrpUuid,
  sortComparer: (a, b) => a.pymntMthdTyp.localeCompare(b.pymntMthdTyp),
});

export const crsListAdapter = createEntityAdapter({
  selectId: (crsList) => crsList.firstName,
  sortComparer: (a, b) => a.formTyp.localeCompare(b.formTyp),
});

export const enrollmentEmployer = createEntityAdapter({});

export const initialState = enrollmentEmployer.getInitialState({
  isLoading: false,
  error: null,
  gradeInfo: {},
  draftEnquiry: {},
  selectedPnsnId: null,
  selectedCompanyUUID: null,
  selectedContactPersonUUID: null,
  selectedEmployerUUID: null,
  selectedSchemeUUID: null,
  selectedPayrollGroupUUID: null,
  employers: employersAdapter.getInitialState(),
  contactPersons: contactPersonsAdapter.getInitialState(),
  payrollGroupContactPersons: payrollGroupContactPersonsAdapter.getInitialState(),
  gradeList: gradeListAdapter.getInitialState(),
  payrollGrpInfo: {},
  schemes: schemesAdapter.getInitialState(),
  trustees: trusteesAdapter.getInitialState(),
  payrollGroupList: payrollGroupsListAdapter.getInitialState(),
  crsList: crsListAdapter.getInitialState(),
});
