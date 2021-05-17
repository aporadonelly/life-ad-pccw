import AxiosAdapter from "./axios.adapter";
import { pick } from "lodash";

class UserAdapter extends AxiosAdapter {
  login(payload) {
    const pickedPayload = pick(payload, ["username", "password"]);
    return this.instance.post("/login", pickedPayload);
  }

  getByToken(token) {
    return this.instance.get("/userinfo", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

export default new UserAdapter({
  baseURL: process.env.REACT_APP_AUTH_BASE_URL,
});
