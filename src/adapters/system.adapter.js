import AxiosAdapter from "./axios.adapter";

class SystemAdapter extends AxiosAdapter {
  getCycleDate() {
    return this.instance.get("/getCycleDate", {
      params: { cycleDtStpCd: 1, schmCd: 1 },
    });
  }

  getSystemEnv() {
    return this.instance.get("/getSystemEnv");
  }

  getCountryLst() {
    return this.instance.get("/getCountryLst");
  }

  getTermRsnLst() {
    return this.instance.get("/getTermRsnLst");
  }

  getCustomTypList({ groupId }) {
    return this.instance.get("/getCustomTypList", {
      params: { groupId },
    });
  }

  getWrkStrmSttsLst({ workstream }) {
    return this.instance.get("/getWrkStrmSttsLst", {
      params: { workstream },
    });
  }
  getSchmLst() {
    return this.instance.get("/getSchmLst");
  }

  getTrstLst() {
    return this.instance.get("/getTrstLst");
  }
}

export default new SystemAdapter({
  baseURL: process.env.REACT_APP_SYSTEM_BASE_URL,
});
