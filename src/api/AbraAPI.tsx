import axios from "axios";
import { ABRA_SERVER_URL } from "../Utils/constants";
import { AxiosResponse } from "axios";

export interface Credentials {
  email: string;
  password: string;
}

const abraInstance = axios.create({
  baseURL: ABRA_SERVER_URL,
});

export const createAbraInterceptor = (
  onSuccess: (
    response: AxiosResponse
  ) => AxiosResponse | Promise<AxiosResponse>,
  onError: (error: any) => any
): number => {
  return abraInstance.interceptors.response.use(onSuccess, onError);
};

export const ejectAbraInterceptor = (interceptorId: number) => {
  abraInstance.interceptors.response.eject(interceptorId);
};

export const abraLogin = async (email: string, password: string) => {
  const credentials: Credentials = { email, password };
  const response = await abraInstance.post("/api/auth/login/", credentials);

  return response;
};

const abraProtectedAPI = async (
  token: string,
  url: string,
  method: string,
  data?: any
) => {
  if (!token) {
    throw new Error("Token is unavailable in request.");
  }
  const response = await abraInstance({
    method,
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};

export const abraGetFavorite = async (token: string) => {
  return abraProtectedAPI("get", token, "api/favorites/");
};
