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
}

export default new EmployerAdapter({
  baseURL: process.env.REACT_APP_REGISTRATION_EE_BASE_URL,
});
