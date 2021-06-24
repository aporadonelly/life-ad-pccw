import { createEntityAdapter } from "@reduxjs/toolkit";

export const authorizedPersonsAdapter = createEntityAdapter({
  selectId: (employer) => employer.pnsnId,
});

export const directorsAdapter = createEntityAdapter({
  selectId: (employer) => employer.pnsnId,
});

export const partnersAdapter = createEntityAdapter({
  selectId: (employer) => employer.pnsnId,
});

export const beneficialOwnersAdapter = createEntityAdapter({
  selectId: (employer) => employer.pnsnId,
});

export const registrationEmployer = createEntityAdapter({});

export const initialState = registrationEmployer.getInitialState({
  isLoading: false,
  error: null,
  registrationCompanyInformation: {},
  authorizedPersons: authorizedPersonsAdapter.getInitialState(),
  directors: directorsAdapter.getInitialState(),
  partners: partnersAdapter.getInitialState(),
  beneficialOwners: beneficialOwnersAdapter.getInitialState(),
});
