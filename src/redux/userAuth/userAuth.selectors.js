import { createSelector } from "reselect";

const selectUserAuth = (state) => state.userAuth;

export const selectUserToken = createSelector(
  [selectUserAuth],
  (userAuth) => userAuth.userToken
);

export const selectCurrentUser = createSelector(
  [selectUserAuth],
  (userAuth) => userAuth.userAuthDetails
);
