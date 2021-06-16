import AxiosAdapter from "./axios.adapter";

class UserAdapter extends AxiosAdapter {
  logout() {
    return this.instance.get("/logout");
  }

  reissue() {
    return this.instance.post("/reissue", {});
  }

  userinfo() {
    return this.instance.get("/userinfo");
  }
}

export default new UserAdapter({
  baseURL: process.env.REACT_APP_AUTH_BASE_URL,
});
