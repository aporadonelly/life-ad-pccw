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
    return this.instance.get("/ldSrchRegInd", config); //Just for testing purposes. Below is the right one.
    // return this.instance.get("/LdSrchCmpny ", config); // LdSrchCmpny still in development.
  }

  LdRegCmpnyInfoforAdmnPrtl(clientId) {
    return this.instance.get("/ldRegCmpnyInfoforAdmnPrtl", {
      params: { clntUuid: "7732B905-E9C1-4895-959E-FDCE74C856B3" },
    });
  }

  LdAuthPrsnInfo() {
    return this.instance.get("/ldAuthPrsnInfo", {
      params: { cmpnyUuid: "13717897-16EB-414F-9C06-0E8D6ECE08F0", clntUuid: "385cdceb-5f17-4de3-831a-cc222006a219" },
    });
  }

}

export default new EmployerAdapter({
  baseURL: process.env.REACT_APP_REGISTRATION_ER_BASE_URL
});
