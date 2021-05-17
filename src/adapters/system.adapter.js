import AxiosAdapter from "./axios.adapter";

class SystemAdapter extends AxiosAdapter {
  getCycleDate(token) {
    return this.instance.get("/getCycleDate", {
      params: { cycleDtStpCd: 1, schmCd: 1 },
    });
  }

  getSystemEnv() {
    return this.instance.get("/getSystemEnv");
  }
}

export default new SystemAdapter({
  baseURL: process.env.REACT_APP_SYSTEM_BASE_URL,
});
