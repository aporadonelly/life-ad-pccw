import AxiosAdapter from "./axios.adapter";

class EmployeesAdapter extends AxiosAdapter {
  //fetch gender data
  fetchGender(token) {
    return this.instance.get("/getCustomTypList?groupId=GD", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  //fetch ID Type
  fetchIdType(token) {
    return this.instance.get("/getCustomTypList?groupId=ID", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  //Fetch Nationality
  fetchNationality(token) {
    return this.instance.get("/getCustomTypList?groupId=NTN", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  //Fetch Place of Birth
  fetchPlaceOfBirth(token) {
    return this.instance.get("/getCountryLst", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  //Fetch Employee Type
  fetchEmployeeType(token) {
    return this.instance.get("/getCustomTypList?groupId=EP", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  //Fetch Industry Type
  fetchIndustryType(token) {
    return this.instance.get("/getCustomTypList?groupId=NT", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  //Fetch Occupation
  fetchOccupation(token) {
    return this.instance.get("/getCustomTypList?groupId=MB", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  //Fetch Scheme Type
  fetchSchemeType(token) {
    return this.instance.get("/getCustomTypList?groupId=SC", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  //Fetch Status
  fetchStatus(token) {
    return this.instance.get("/getCustomTypList?groupId=ST", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  //for searching of users via form
  searchMembers(p, pageNo = 0, pageSize = 50, token) {
    const config = {
      params: {
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
    };

    return this.instance.get("/ldSrchRegInd", config, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

export default new EmployeesAdapter({
  baseURL: process.env.REACT_APP_SYSTEM_BASE_URL,
});
