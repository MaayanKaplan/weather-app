import axios from "axios";
import { ABRA_SERVER_URL } from "../Utils/constants";

interface Credentials {
  email: string;
  password: string;
}

const abraInstance = axios.create({
  baseURL: ABRA_SERVER_URL,
});

export const abraLogin = async (email: string, password: string) => {
  const credentials: Credentials = { email, password };
  const response = await abraInstance.post("/api/auth/login/", credentials);

  return response;
};
