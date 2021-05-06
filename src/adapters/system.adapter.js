import AxiosAdapter from "./axios.adapter";

class SystemAdapter extends AxiosAdapter {
  getCycleDate(token) {
    return this.instance.get(process.env.REACT_APP_SYSTEM_GET_CYCLE_DATE, {
      params: { cycleDtStpCd: 1, schmCd: 1 },
    });
  }
}

export default new SystemAdapter();
