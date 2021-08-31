import moment from "moment";
import AxiosAdapter from "./axios.adapter";

class RegistrationEmployee extends AxiosAdapter {
  ldSrchRegInd(payload) {
    Object.keys(payload).forEach((key) => {
      if (moment(payload[key], "DD/MM/YYYY", true).isValid()) {
        payload[key] = payload[key].split("/").reverse().join("/");
      }
    });

    return this.instance.get("/ldSrchRegInd", {
      params: {
        ...payload,
        pageNo: 0,
        pageSize: 50,
      },
    });
  }

  ldRegIndInfo({ pnsnIdTxt }) {
    return this.instance.get("/ldRegIndInfo", {
      params: { empfId: pnsnIdTxt },
    });
  }
}

export default new RegistrationEmployee({
  baseURL: process.env.REACT_APP_REGISTRATION_EE_BASE_URL,
});
