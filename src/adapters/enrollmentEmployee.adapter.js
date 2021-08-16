import AxiosAdapter from "./axios.adapter";

class EnrollmentEmployee extends AxiosAdapter {}

export default new EnrollmentEmployee({
  baseURL: process.env.REACT_APP_ENROLLMENT_EE_BASE_URL,
});
