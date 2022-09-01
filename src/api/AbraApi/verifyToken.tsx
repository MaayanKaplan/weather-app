import { abraInstance } from "./AbraAPI";
import { AxiosResponse } from "axios";

export const verifyToken = async () => {
  const token = localStorage.getItem("token");
  const response = await abraInstance.post("api/auth/verify-token/", {
    token: JSON.parse(token as string),
  });
  return response;
};

// if (response.status === 200) return true;
// return false;