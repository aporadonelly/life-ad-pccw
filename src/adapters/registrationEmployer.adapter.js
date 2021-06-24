import AxiosAdapter from "./axios.adapter";

class RegistrationEmployer extends AxiosAdapter {
  ldCmpnyRltdPrsn(payload) {
    const { cmpnyPrsnTypId, cmpnyUuid, schmUuid, clntUuid } = payload;
    return this.instance.get("/ldCmpnyRltdPrsn", {
      params: { cmpnyUuid, cmpnyPrsnTypId, schmUuid, clntUuid },
    });
  }
}

export default new RegistrationEmployer({
  baseURL: process.env.REACT_APP_REGISTRATION_ER_BASE_URL,
});
