import AxiosAdapter from "./axios.adapter";

class RegistrationEmployer extends AxiosAdapter {
  ldSrchCmpny(payload) {
    return this.instance.get("/ldSrchCmpny", {
      params: {
        ...payload,
        pageNo: 0,
        pageSize: 50,
      },
    });
  }
}

export default new RegistrationEmployer({
  baseURL: process.env.REACT_APP_ENROLLMENT_ER_BASE_URL,
});
