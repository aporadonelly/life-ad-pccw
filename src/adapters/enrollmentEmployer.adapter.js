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

  getPayrollGrpList(payload) {
    const { empUuid } = payload;
    return this.instance.get("/getPayrollGrpList", {
      params: { empUuid },
    });
  }

  getCRSFormLst(payload) {
    const { cmpnyUuid } = payload;
    return this.instance.get("/getCRSFormLst", {
      params: { cmpnyUuid },
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

  getGradeLst(payload) {
    const { erUuid } = payload;
    return this.instance.get("/getGradeLst", {
      params: { erUuid },
    });
  }

  ldPayrollGrpInfo(payload) {
    const { payrollGroupId } = payload;
    return this.instance.get("/ldPayrollGrpInfo", {
      params: { payrollGroupId },
    });
  }
}

export default new EnrollmentEmployer({
  baseURL: process.env.REACT_APP_ENROLLMENT_ER_BASE_URL,
});
