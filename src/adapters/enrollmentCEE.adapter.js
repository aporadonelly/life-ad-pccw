import AxiosAdapter from "./axios.adapter";

class EnrollmentCEE extends AxiosAdapter {
  getIndAccntLst(payload) {
    const { indUuid } = payload;
    return this.instance.get("/getIndAccntLst", { params: { indUuid } });
  }
}

export default new EnrollmentCEE({
  baseURL: process.env.REACT_APP_ENROLLMENT_CEE_BASE_URL,
});
