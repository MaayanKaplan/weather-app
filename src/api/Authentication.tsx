import { abraLogin } from "./AbraAPI";
import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactElement,
} from "react";

import { useNavigate } from "react-router-dom";

const AuthenticationContext = createContext<any>(undefined);

export const AuthenticationProvider: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [userToken, setUserToken] = useState<string | undefined>(undefined);
  const api = { userToken, setUserToken };

  useEffect(() => {
    console.log(userToken);
  }, [userToken]);

  return (
    <AuthenticationContext.Provider value={api}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication: any = () => {
  const context = useContext(AuthenticationContext);
  const [authenticationError, setAuthenticationError] =
    useState<string | undefined>(undefined);

  const navigate = useNavigate();

  if (!context) {
    throw new Error(
      "useAuthentication must be used within the AuthenticationProvider"
    );
  }

  const login = async (email: string, password: string) => {
    let response;
    try {
      setAuthenticationError(undefined);
      response = await abraLogin(email, password);

      if (response.status === 200) {
        navigate("/");
      }
    } catch (err: any) {
      let errorMessage: string = "";
      const errorResponse = err.response.data;

      for (let item in errorResponse) {
        errorMessage += errorResponse[item] + " ";
      }
      setAuthenticationError(errorMessage);
    }
    context.setUserToken(response?.data.access_token);
  };
  return [login, authenticationError];
};
