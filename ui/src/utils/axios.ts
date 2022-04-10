import axios from "axios";
import config from "../config";

declare module "axios" {
  //export interface AxiosRequestConfig {}
}

const axiosInstance = axios.create({
  baseURL: config.apiUrl,
  timeout: 60000,
  headers: {
    "content-type": "application/json;charset=UTF-8&#39",
  },
});

const setTokenForAPICall = (authRequired: boolean) => {
  if (authRequired) {
    //applying token
    axiosInstance.defaults.headers.common["Authorization"] = "test";
  } else {
    //deleting the token from header
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};

export const getRequest = (api: string, authRequired: boolean) => {
  setTokenForAPICall(authRequired);
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(api)
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};

export const postRequest = (api: string, authRequired: boolean, data: object) => {
  setTokenForAPICall(authRequired);
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(api, data)
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};

export const putRequest = (api: string, authRequired: boolean, data: object) => {
  setTokenForAPICall(authRequired);
  return new Promise((resolve, reject) => {
    axiosInstance
      .put(api, data)
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};

export const patchRequest = (api: string, authRequired: boolean, data: object) => {
  setTokenForAPICall(authRequired);
  return new Promise((resolve, reject) => {
    axiosInstance
      .patch(api, data)
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};
