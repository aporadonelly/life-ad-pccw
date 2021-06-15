import AxiosAdapter from "./axios.adapter";
import moment from "moment";
import { pickBy } from "lodash";

class EmployerAdapter extends AxiosAdapter {
  searchEmployers(p, pageNo = 0, pageSize = 50) {
    const newValues = { ...p };

    Object.keys(newValues).forEach((key) => {
      if (moment(newValues[key], "DD/MM/YYYY", true).isValid()) {
        newValues[key] = newValues[key].split("/").reverse().join("/");
      }
    });

    const config = {
      params: pickBy(
        {
          pageNo,
          pageSize,
          ...newValues,
        },
        (value) => {
          return value !== "";
        }
      ),
    };
    return this.instance.get("/ldSrchRegInd", config);
  }

  LdRegCmpnyInfoforAdmnPrtl(clientId) {
    return this.instance.get("/companyReg", {});
  }

  LdAuthPrsnInfo() {
    const cmpnyUuid = "7732B905-E9C1-4895-959E-FDCE74C856B3";
    return this.instance.get("/ldAuthPrsnInfo", {
      params: { cmpnyUuid },
    });
  }
}

export default new EmployerAdapter({
  baseURL: process.env.REACT_APP_REGISTRATION_EE_BASE_URL,
});
