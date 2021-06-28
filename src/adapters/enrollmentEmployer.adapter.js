import AxiosAdapter from "./axios.adapter";

class EnrollmentEmployer extends AxiosAdapter {
  ldSrchCmpny(payload) {
    return this.instance.get("/ldSrchCmpny", {
      params: {
        ...payload,
        pageNo: 0,
        pageSize: 50,
      },
    });
  }

  ldEnrCmpnyInfo(payload) {
    const { cmpnyUuid, schmUuid } = payload;
    return this.instance.get("/ldEnrCmpnyInfo", {
      params: { cmpnyUuid, schmUuid },
    });
  }

  getSchmLst() {
    return this.instance.get("/getSchmLst");
  }

  getTrstLst() {
    return this.instance.get("/getTrstLst");
  }
}

export default new EnrollmentEmployer({
  baseURL: process.env.REACT_APP_ENROLLMENT_ER_BASE_URL,
});
