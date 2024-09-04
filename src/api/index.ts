import axios from "axios";
import { getTokenFromStorage, removeAuthCookie } from "@/utils/utils.auth";
import code from "@/constants/code";
import { LOGIN_PATH } from "@/app/login/page";

export const axiosInstance: any = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/`,
  timeout: 60000,
});

/**
 * get request headers
 * @param {boolean} isAuth
 * @returns
 */
export const getHeaders = (isAuth = false) => {
  const headers = {
    Authorization: "",
  };
  if (isAuth) {
    headers.Authorization = getTokenFromStorage();
  }
  return headers;
};

// define error handle
axiosInstance.interceptors.response.use(
  (response: any) => {
    const { data } = response;
    if (
      data?.code == code.responseCode.UNAUTHORIZED ||
      data?.code == code.responseCode.FORBIDDEN
    ) {
      if (localStorage) {
        localStorage?.clear();
        removeAuthCookie();
      }
      window.location.href = LOGIN_PATH;
    } else {
      return response.data;
    }
  },
  (error: any) => {
    const { response } = error;
    // if response error was defined by server
    return response?.data ? response : Promise.reject(error);
  }
);

export default {
  /**
   * post request
   * @param {string} endpoint
   * @param {*} data All parameter need to pass for server
   * @param {boolean} isAuth
   */
  post: (
    endpoint: string,
    data: any,
    isAuth: boolean = false,
    headers?: any
  ) => {
    return axiosInstance.post(endpoint, data, {
      headers: {
        ...getHeaders(isAuth),
        ...headers,
      },
    });
  },

  /**
   * put
   * @param {string} endpoint
   * @param {*} data All parameter need to pass for server
   * @param {boolean} isAuth
   */
  put: (endpoint: string, data: any, isAuth: boolean = false) => {
    return axiosInstance.put(endpoint, JSON.stringify(data), {
      headers: getHeaders(isAuth),
    });
  },

  /**
   * get request
   * @param {string} endpoint
   * @param {*} params All parameter need to pass for server
   * @param {boolean} isAuth
   */
  get: (
    endpoint: string,
    params: any = {},
    isAuth: boolean = false,
    headers?: any
  ) => {
    return axiosInstance.get(endpoint, {
      params,
      ...{
        headers: {
          ...getHeaders(isAuth),
          ...headers,
        },
      },
      paramsSerializer: (params: any) => {
        return JSON.stringify(params);
      },
    });
  },

  /**
   * get request
   * @param {string} endpoint
   * @param {*} params All parameter need to pass for server
   * @param {boolean} isAuth
   */
  getFile: (
    endpoint: string,
    params: any = {},
    isAuth: boolean = false,
    headers?: any
  ) => {
    return axiosInstance.get(endpoint, {
      params,
      ...{
        headers: {
          ...getHeaders(isAuth),
          ...headers,
        },
      },
      paramsSerializer: (params: any) => {
        return JSON.stringify(params);
      },
      responseType: "blob",
    });
  },

  /**
   * delete request
   * @param {string} endpoint
   * @param {*} data All parameter need to pass for server
   * @param {boolean} isAuth
   */
  delete: (endpoint: string, data: any, isAuth: boolean = false) => {
    return axiosInstance.delete(endpoint, {
      headers: { ...getHeaders(isAuth) },
      data,
    });
  },

  /**
   * upload file
   * @param {string} endpoint
   * @param {*} agrs All parameter need to pass for server
   * @param {string} method
   * @param {boolean} isAuth
   * @param {boolean} formDataParsed
   */
  uploadFile: (
    endpoint: string,
    agrs: any = {},
    method: string = "post",
    isAuth: boolean,
    formDataParsed: boolean = false,
    options: any = {}
  ) => {
    const headers = getHeaders(isAuth);
    let formData = agrs;
    if (!formDataParsed) {
      formData = new FormData();
      Object.keys(agrs).forEach((item) => {
        formData.append(item, agrs[item]);
      });
    }
    return axiosInstance[method](endpoint, formData, {
      headers: { "Content-Type": "multipart/form-data", ...headers },
      ...options,
    });
  },
};
