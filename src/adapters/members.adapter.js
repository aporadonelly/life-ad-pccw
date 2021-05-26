import AxiosAdapter from "./axios.adapter";
import { pickBy } from "lodash";

class EmployeesAdapter extends AxiosAdapter {
  // for searching of users via form
  searchMembers(p, pageNo = 0, pageSize = 50) {
    const config = {
      params: pickBy(
        {
          pageNo,
          pageSize,
          mpfID: p.mpfID,
          fullName: p.fullName,
          gender: p.gender,
          chineseName: p.chineseName,
          idType: p.idType,
          idNumber: p.idNumber,
          dateOfBirth: p.dateOfBirth,
          nationality: p.nationality,
          placeOfBirth: p.placeOfBirth,
          mobileNumber: p.mobileNumber,
          address: p.address,
          email: p.email,
          dateOfEmployment: p.dateOfEmployment,
          employeeType: p.employee_type,
          reportedIndustryType: p.reportedIndustryType,
          occupation: p.occupation,
          schemeUuid: p.schemeUuid,
          taxResidency: p.taxResidency,
          tin: p.tin,
          status: p.status,
        },
        (value) => {
          return value !== "";
        }
      ),
    };
    return this.instance.get("/ldSrchRegInd", config);
  }

  //view specific member
  viewMember(id) {
    return this.instance.get("/ldRegIndInfo", {
      params: { empfId: "A123456(3)" },
    });
  }
}

export default new EmployeesAdapter({
  baseURL: process.env.REACT_APP_REGISTRATION_EE_BASE_URL,
});
