import AxiosAdapter from "./axios.adapter";
import { pick } from "lodash";

class UserAdapter extends AxiosAdapter {
  login(payload) {
    const pickedPayload = pick(payload, ["username", "password"]);
    return this.instance.post("/login", pickedPayload);
  }

  getUserByToken(token) {
    return this.instance.get("/userinfo", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

export default new UserAdapter({
  baseURL: "https://empf-api.herokuapp.com",
});
