import AxiosAdapter from "./axios.adapter";

class EmployerAdapter extends AxiosAdapter {
  getAll() {
    return this.instance.get("/employees");
  }

  viewEmployerAuthPerson(id) {
    return this.instance.get("/employees", {
      params: { id: 2 },
    });
  }

  LdRegCmpnyInfoforAdmnPrtl(clientId) {
    return this.instance.get("/companyReg", {
      // params: { client_uuid: 149 },
    });
  }

  LdAuthPrsnInfo() {
    const cmpnyUuid = "7732B905-E9C1-4895-959E-FDCE74C856B3";
    return this.instance.get("/ldAuthPrsnInfo", {
      params: { cmpnyUuid }
    });
  }

}

export default new EmployerAdapter({
  // baseURL: process.env.REACT_APP_REGISTRATION_ER_BASE_URL
  baseURL: "http://localhost:4000"
});
