import AxiosAdapter from "./axios.adapter";

class EnrollmentSelfEmployed extends AxiosAdapter {}

export default new EnrollmentSelfEmployed({
  baseURL: process.env.REACT_APP_ENROLLMENT_SEP_BASE_URL,
});
