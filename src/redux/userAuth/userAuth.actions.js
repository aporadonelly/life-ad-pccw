import { UserAuthActionsTypes } from "./userAuth.types";

export const setTokenDecode = (token) => ({
  type: UserAuthActionsTypes.SET_TOKEN_DECODE,
  payload: token,
});

export const setUserAuthDetails = (user) => ({
  type: UserAuthActionsTypes.SET_USER_AUTH_DETAILS,
  payload: user,
});
