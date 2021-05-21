import AxiosAdapter from "./axios.adapter";

class EmployeesAdapter extends AxiosAdapter {
  //fetch gender data
  fetchGender(token) {
    return this.instance.get("/getCustomTypList?groupId=GD", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

export default new EmployeesAdapter({
  baseURL: process.env.REACT_APP_SYSTEM_BASE_URL,
});
