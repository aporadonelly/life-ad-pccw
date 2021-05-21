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
}

export default new EmployeesAdapter({
  baseURL: process.env.REACT_APP_SYSTEM_BASE_URL,
});
