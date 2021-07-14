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

  ldGradeInfo(payload) {
    const { payrollGrpUuid, erGradeUuid } = payload;
    return this.instance.get("/ldGradeInfo", {
      params: { payrollGrpUuid, erGradeUuid },
    });
  }

  ldCntctPrsnInfo(payload) {
    const { cmpnyUuid, cntctPrsnTypId } = payload;
    return this.instance.get("/ldCntctPrsnInfo", {
      params: {
        cmpnyBrnchCd: cmpnyUuid,
        cntctPrsnTypId,
      },
    });
  }
}

export default new EnrollmentEmployer({
  baseURL: process.env.REACT_APP_ENROLLMENT_ER_BASE_URL,
});
