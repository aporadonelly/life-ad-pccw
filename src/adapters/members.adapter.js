import AxiosAdapter from "./axios.adapter";
import { pickBy } from "lodash";
import moment from "moment";

class EmployeesAdapter extends AxiosAdapter {
  // for searching of users via form
  searchMembers(p, pageNo = 0, pageSize = 50) {
    const newValues = { ...p };

    Object.keys(newValues).forEach((key) => {
      if (moment(newValues[key], "DD/MM/YYYY", true).isValid()) {
        newValues[key] = newValues[key].split("/").reverse().join("/");
      }
    });
    const config = {
      params: pickBy(
        {
          pageNo,
          pageSize,
          ...newValues,
        },
        (value) => {
          return value !== "";
        }
      ),
    };
    return this.instance.get("/ldSrchRegInd", config);
  }

  //view specific member
  viewMember(id) {
    return this.instance.get("/ldRegIndInfo", {
      params: { empfId: id },
    });
  }
}

export default new EmployeesAdapter({
  baseURL: process.env.REACT_APP_REGISTRATION_EE_BASE_URL,
});
