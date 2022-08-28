import { useNavigate } from "react-router-dom";

export const Logout = () => {
  return localStorage.removeItem("token");
};
