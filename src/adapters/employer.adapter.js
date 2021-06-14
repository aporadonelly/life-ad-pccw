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
    return this.instance.get("/ldRegCmpnyInfoforAdmnPrtl", {
      params: { clntUuid: "7732B905-E9C1-4895-959E-FDCE74C856B3" },
    });
  }

  LdAuthPrsnInfo() {
    return this.instance.get("/ldAuthPrsnInfo", {
      params: { cmpnyUuid: "13717897-16EB-414F-9C06-0E8D6ECE08F0", clntUuid: "385cdceb-5f17-4de3-831a-cc222006a219" },
    });
  }

  LdRegCntctPrsn() {
    return this.instance.get("/ldRegCntctPrsn", {
      params: { pageNo: 1, pageSize: 10, refNoTxt: "RGA123459(8)202105061244390856" },
    });
  }

}

export default new EmployerAdapter({
  baseURL: process.env.REACT_APP_REGISTRATION_ER_BASE_URL,
  // baseURL: "http://localhost:4000"
});
