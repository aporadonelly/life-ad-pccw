import AxiosAdapter from "./axios.adapter";

class EmployerAdapter extends AxiosAdapter {
  searchEmployers(p, pageNo = 0, pageSize = 50) {
    const newValues = { ...p };
    const config = {
      params: {
        pageNo,
        pageSize,
        ...newValues,
      },
    };
    return this.instance.get("/ldSrchCmpny", config);
  }

  LdRegCmpnyInfoforAdmnPrtl(clientId) {
    return this.instance.get("/ldRegCmpnyInfoforAdmnPrtl", {
      params: { clntUuid: "7732B905-E9C1-4895-959E-FDCE74C856B3" },
    });
  }

  ldAuthPrsnInfo(clntUuid, pageNo = 0, pageSize = 10) {
    const config = {
      params: {
        clntUuid,
        cmpnyUuid: "7732B905-E9C1-4895-959E-FDCE74C856B3",
        pageNo,
        pageSize,
      },
    };
    return this.instance.get("/ldAuthPrsnInfo", config);
  }
}

export default new EmployerAdapter({
  baseURL: process.env.REACT_APP_REGISTRATION_ER_BASE_URL,
  // baseURL: process.env.REACT_APP_ENROLLMENT_BASE_URL,
});
