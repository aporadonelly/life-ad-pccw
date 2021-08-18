import AxiosAdapter from "./axios.adapter";

class DataModification extends AxiosAdapter {}

export default new DataModification({
  baseURL: process.env.REACT_APP_DATA_MODIFICATION_BASE_URL,
});
