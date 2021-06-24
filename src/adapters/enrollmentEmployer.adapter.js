import AxiosAdapter from "./axios.adapter";

class EnrollmentEmployer extends AxiosAdapter {
  ldEnrCmpnyInfo(payload) {
    const { cmpnyUuid, schmUuid } = payload;
    return this.instance.get("/ldEnrCmpnyInfo", {
      params: { cmpnyUuid, schmUuid },
    });
  }

  ldCmpnyRltdPrsn(payload) {
    const { cmpnyPrsnTypId, cmpnyUuid, schmUuid, clntUuid } = payload;
    return this.instance.get("/ldCmpnyRltdPrsn", {
      params: { cmpnyUuid, cmpnyPrsnTypId, schmUuid, clntUuid },
    });
  }
}

export default new EnrollmentEmployer({
  baseURL: process.env.REACT_APP_ENROLLMENT_ER_BASE_URL,
});
