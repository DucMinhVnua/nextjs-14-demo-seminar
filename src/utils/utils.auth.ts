import Keys from "@/constants/keys";
import { getDataFromStorage, setDataToStorage } from "./utils.storage";
import Cookies from "js-cookie";

export const setAuthToCookie = (token: any) => {
  // Set the token in a cookie
  Cookies.set("token", token, { expires: 1 / 720, path: "/" }); // expire = 2p
};

export const getTokenFromCookie = (): string | undefined => {
  return Cookies.get("token");
};

export const removeAuthCookie = () => {
  // Remove the cookie named 'token'
  Cookies.remove("token", { path: "/" });
};

export const pushAuthDataToStorage = (dataAuth: any) => {
  setDataToStorage(Keys.auth, dataAuth);
};

export const getTokenFromStorage = () => {
  const authData = getDataFromStorage(Keys.auth);

  return `Bearer ${authData.token}`;
};
