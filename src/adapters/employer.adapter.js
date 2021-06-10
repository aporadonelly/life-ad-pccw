import AxiosAdapter from "./axios.adapter";
import { pickBy } from "lodash";

class EmployerAdapter extends AxiosAdapter {
  searchEmployers(p, pageNo = 0, pageSize = 50) {
    const config = {
      params: pickBy(
        {
          pageNo,
          pageSize,
          mpfID: p.mpfID,
          fullName: p.companyNameEnglish,
          chineseName: p.companyNameChinese,
          idType: p.registrationType,
          idNumber: p.registrationNumber,
          dateOfBirth: p.dateOfBirth,
        },
        (value) => {
          return value !== "";
        }
      ),
    };
    return this.instance.get("/ldSrchRegInd", config);
  }

  LdRegCmpnyInfoforAdmnPrtl(clientId) {
    return this.instance.get("/companyReg", {
      // params: { client_uuid: 149 },
    });
  }

  LdAuthPrsnInfo() {
    const cmpnyUuid = "7732B905-E9C1-4895-959E-FDCE74C856B3";
    return this.instance.get("/ldAuthPrsnInfo", {
      params: { cmpnyUuid },
    });
  }
}

export default new EmployerAdapter({
  // baseURL: process.env.REACT_APP_REGISTRATION_ER_BASE_URL,
  baseURL: "http://localhost:4000"
});
