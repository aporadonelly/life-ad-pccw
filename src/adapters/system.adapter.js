import AxiosAdapter from "./axios.adapter";

class SystemAdapter extends AxiosAdapter {
  getCycleDate(token) {
    return this.instance.get("/getCycleDate", {
      params: { cycleDtStpCd: 1, schmCd: 1 },
    });
  }

  getSystemEnv() {
    return this.instance.get("/getSystemEnv");
  }

  //fetch gender data
  fetchGender() {
    return this.instance.get("/getCustomTypList?groupId=GD");
  }

  //fetch ID Type
  fetchIdType() {
    return this.instance.get("/getCustomTypList?groupId=ID");
  }

  //Fetch Nationality
  fetchNationality() {
    return this.instance.get("/getCustomTypList?groupId=NTN");
  }

  //Fetch Place of Birth
  fetchPlaceOfBirth() {
    return this.instance.get("/getCountryLst");
  }

  //Fetch Employee Type
  fetchEmployeeType() {
    return this.instance.get("/getCustomTypList?groupId=EP");
  }

  //Fetch Industry Type
  fetchIndustryType() {
    return this.instance.get("/getCustomTypList?groupId=NT");
  }

  //Fetch Occupation
  fetchOccupation() {
    return this.instance.get("/getCustomTypList?groupId=MB");
  }

  //Fetch Scheme Type
  fetchSchemeType() {
    return this.instance.get("/getCustomTypList?groupId=SC");
  }

  //Fetch Status
  fetchStatus() {
    return this.instance.get("/getCustomTypList?groupId=ST");
  }
}

export default new SystemAdapter({
  baseURL: process.env.REACT_APP_SYSTEM_BASE_URL,
});
