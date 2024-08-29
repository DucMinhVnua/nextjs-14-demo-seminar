import apiAdapter from "./";
import { loginURL } from "./urls/urls.auth";

export const loginAPI = async (data: { email: string; password: string }) => {
  try {
    return await apiAdapter.post(loginURL, data);
  } catch (error) {
    throw error;
  }
};
