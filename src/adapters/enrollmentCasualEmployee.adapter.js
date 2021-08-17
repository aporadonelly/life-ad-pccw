import AxiosAdapter from "./axios.adapter";

class EnrollmentCasualEmployee extends AxiosAdapter {
  getIndAccntLst(payload) {
    const { indUuid } = payload;
    return this.instance.get("/getIndAccntLst", { params: { indUuid } });
  }
}

export default new EnrollmentCasualEmployee({
  baseURL: process.env.REACT_APP_ENROLLMENT_CEE_BASE_URL,
});
