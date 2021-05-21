import AxiosAdapter from "./axios.adapter";

class EmployerAdapter extends AxiosAdapter {
  getAll() {
    return this.instance.get("/employees");
  }

  viewEmployerAuthPerson(id) {
    return this.instance.get("/employees", {
      params: { id: 1 },
    });
  }
}

export default new EmployerAdapter({
  // baseURL: process.env.REACT_APP_SYSTEM_BASE_URL,
  baseURL: "http://localhost:3000",
});
