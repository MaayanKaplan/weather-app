import axios, { AxiosResponse } from "axios";
import { ABRA_SERVER_URL } from "../Utils/constants";

export interface Credentials {
  email: string;
  password: string;
}

export const abraInstance = axios.create({
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

const abraProtectAPI = async (
  method: string,
  token: string,
  url: string,
  data?: any
) => {
  if (!token) {
    throw new Error("Token is not available in request.");
  }
  const response = await abraInstance({
    method,
    url,
    headers: {
      Authorization: `Bearer ${JSON.parse(token as string)}`,
    },
  });

  return response;
};

export const abraGetFavorite = async (token: string) => {
  return await abraProtectAPI("get", token, "api/favorites/");
};
