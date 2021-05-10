import Axios from "axios";

class AxiosAdapter {
  constructor(config) {
    this.instance = Axios.create(config);

    this.instance.interceptors.request.use(
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
    this.instance.interceptors.response.use(
      (response) => {
        const errorCode = response.data?.errorCode;
        const errorMessage = response.data?.errorMessage;

        if (errorCode >= 400) {
          return Promise.reject(errorMessage);
        }

        return response.data;
      },
      (error) => {
        if (error.response) {
          const errorMessage = error.response?.data?.errorMessage;

          if (errorMessage) {
            return Promise.reject(errorMessage);
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          if (error.code === "ECONNABORTED") {
            return Promise.reject(
              "Couldn't search at this moment. Please try again later."
            );
          }
        } else {
          // Something happened in setting up the request that triggered an Error
          return Promise.reject(error.message);
        }

        return Promise.reject(
          "Couldn't search at this moment. Please try again later."
        );
      }
    );
  }

  get(url, config) {
    return this.instance.get(url, config);
  }

  post(url, data, config) {
    return this.instance.post(url, data, config);
  }

  put(url, data, config) {
    return this.instance.put(url, data, config);
  }

  delete(url, data, config) {
    return this.instance.delete(url, data, config);
  }
}

export default AxiosAdapter;
