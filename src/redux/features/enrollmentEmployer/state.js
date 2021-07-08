import { createEntityAdapter } from "@reduxjs/toolkit";

export const employersAdapter = createEntityAdapter({
  selectId: (employer) => employer.companyName,
});

export const contactPersonsAdapter = createEntityAdapter({
  selectId: (contactPerson) => contactPerson.cntctPrsnUuid,
});

export const enrollmentEmployer = createEntityAdapter({});

export const initialState = enrollmentEmployer.getInitialState({
  isLoading: false,
  error: null,
  gradeInfo: {},
  draftEnquiry: {},
  selectedPnsnId: null,
  selectedCompanyUUID: null,
  selectedEmployerUUID: null,
  selectedSchemeUUID: null,
  selectedPayrollGroupUUID: null,
  employers: employersAdapter.getInitialState(),
  contactPersons: contactPersonsAdapter.getInitialState(),
});
