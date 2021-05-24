import AxiosAdapter from "./axios.adapter";
import { pickBy, identity } from "lodash";

class EmployeesAdapter extends AxiosAdapter {
  // for searching of users via form
  searchMembers(p, pageNo = 0, pageSize = 50) {
    const config = {
      params: pickBy(
        {
          pageNo,
          pageSize,
          mpfID: p.mpf_id,
          fullName: p.first_name,
          gender: p.gender,
          chineseName: p.chinese_name,
          idType: p.id_type,
          idNumber: p.id_number,
          dateOfBirth: p.date_of_birth,
          nationality: p.nationality,
          placeOfBirth: p.place_of_birth,
          mobileNumber: p.mobile_number,
          address: p.address,
          email: p.email,
          dateOfEmployment: p.date_of_employment,
          employeeType: p.employee_type,
          reportedIndustryType: p.reported_industry_type,
          occupation: p.occupation,
          schemeUuid: p.mpf_scheme_name,
          taxResidency: p.tax_residency,
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
}

export default new EmployeesAdapter({
  baseURL: process.env.REACT_APP_REGISTRATION_EE_BASE_URL,
});
