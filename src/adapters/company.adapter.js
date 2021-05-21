import AxiosAdapter from "./axios.adapter";

class CompanyAdapter extends AxiosAdapter {

  getCompanyProfile(clientId) {
    return this.instance.get("/companyprofile", {
      // params: { client_uuid: 149 },
    });
  }

}

export default new CompanyAdapter({
  // baseURL: process.env.REACT_APP_SYSTEM_BASE_URL,
  baseURL: "http://localhost:4000",
});
