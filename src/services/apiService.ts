import axios, { AxiosInstance } from "axios";
import { trigger } from "src/Events";

const axiosConfig = {
  withCredentials: false,
  headers: {
    Accept: "application/json"
  },
}

const axiosClient: AxiosInstance = axios.create(axiosConfig);
const isDev = process.env.NODE_ENV === "development";


class ServiceApi {
  public url = "";

  // SELECT BASE URL VERSION
  service(apiType: string = "auth", userType: string = "staff") {
    isDev
      ? axiosClient.defaults.baseURL = process.env.REACT_APP_BASE_DEV_URL
      : axiosClient.defaults.baseURL = process.env.REACT_APP_BASE_PROD_URL;

    this.injectInterceptor();

    this.url = (apiType === "auth" && userType === "staff")
      ? `authentication-service/staff`
      : ``;
    return this;
  }

  // APPEND URL TO API URL
  appendToURL(url: string) {
    return (`${this.url}${url}`);
  }

  // GET API REQUEST
  async fetch(url: string, resolve: boolean = true) {
    try {
      const response = await axiosClient.get(
        this.appendToURL(url),
        this.setupHeaders()
      );
      return resolve ? response?.data : response;
    } catch(err) {
      return this.handleErrors(err);
    }
  }

  // POST API REQUEST
  async push(url: string, payload: any = null, resolve = true, is_attached = false) {
    try {
      const response = await axiosClient.post(
        this.appendToURL(url),
        payload,
        this.setupHeaders(is_attached)
      );

      return resolve ? response?.data : response;
    } catch(err) {
      return this.handleErrors(err);
    }
  }

  // PUT API REQUEST
  async update(url: string, payload: any = {}, resolve = true, is_attached = false) {
    try {
      const response = await axiosClient.put(
        this.appendToURL(url),
        payload,
        this.setupHeaders(is_attached)
      );

      return resolve ? response?.data : response;
    } catch(err) {
      return this.handleErrors(err);
    }
  }

  // DELETE API REQUEST
  async remove(url: string, payload: any = {}, resolve = true) {
    try {
      const response = await axiosClient.delete(
        this.appendToURL(url),
        {
          data: payload,
          ...this.setupHeaders()
        }
      );

      return resolve ? response?.data : response;
    } catch(err) {
      return this.handleErrors(err);
    }
  }

  // SETUP HEADERS FOR SCENARIOS LIKE IMAGE UPLOAD
  setupHeaders(is_attached: boolean = false) {
    if (is_attached) {
      return {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
    } else {
      return {
        headers: {
          "Content-Type": "application/json",
        }
      };
    }
  }

  injectInterceptor() {
    axiosClient.interceptors.request.use(config => {
      trigger("nProgress:start");

      return config;
    });

    axiosClient.interceptors.response.use(response => {
      trigger("nProgress:end");

      return response;
    });

    async (error: any) => {
      trigger("nProgress:end");

      return Promise.reject(error);
    }
  }

  // HANDLE API REQUEST ERRORS
  handleErrors(err: any) {
    // Alert an error message
    return err?.response;
  }
}

export default new ServiceApi();

