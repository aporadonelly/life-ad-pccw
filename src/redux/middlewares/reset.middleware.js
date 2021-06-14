import { PURGE } from "redux-persist";
import { logout } from "@redux/features/user/actions";

const resetMiddleware = () => (store) => (next) => (action) => {
  if (action.type === logout.fulfilled.type) {
    store.dispatch({ type: PURGE, result: () => null });
  }
  return next(action);
};

export default resetMiddleware;
