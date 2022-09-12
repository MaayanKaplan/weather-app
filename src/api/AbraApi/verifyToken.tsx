import { abraInstance } from "./AbraAPI";

export const verifyToken = async () => {
  const token = localStorage.getItem("token");
  const response = await abraInstance.post("api/auth/verify-token/", {
    token: JSON.parse(token as string),
  });

  return response;
};
