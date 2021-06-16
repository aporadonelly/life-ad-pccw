import { PURGE } from "redux-persist";
import { logout, reissue } from "@redux/features/user/actions";

const resetMiddleware = () => (store) => (next) => (action) => {
  // prettier-ignore
  // eslint-disable-next-line max-len
  if (action.type === logout.fulfilled.type || action.type === reissue.rejected.type) {
    store.dispatch({ type: PURGE, result: () => null });
  }
  return next(action);
};

export default resetMiddleware;
