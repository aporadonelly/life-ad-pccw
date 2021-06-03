import axios from "axios";

const axiosConfig = () => {
  axios.interceptors.request.use(
    (config) => {
      try {
        const localStorage = window.localStorage.getItem("persist:root");
        const user = JSON.parse(localStorage).user;
        const token = JSON.parse(user).token;
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      } catch {
        return config;
      }
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
export default axiosConfig;
