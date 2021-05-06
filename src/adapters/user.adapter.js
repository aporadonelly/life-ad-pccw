import AxiosAdapter from "./axios.adapter";
import { pick } from "lodash";

class UserAdapter extends AxiosAdapter {
  login(payload) {
    const pickedPayload = pick(payload, ["username", "password"]);
    return this.instance.post(process.env.REACT_APP_AUTH_LOGIN, pickedPayload);
  }

  getUserByToken(token) {
    return this.instance.get(process.env.REACT_APP_AUTH_USERINFO, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

export default new UserAdapter();
