import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactElement,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  createAbraInterceptor,
  ejectAbraInterceptor,
  abraLogin,
  Credentials,
} from "./AbraAPI";
import { AxiosResponse } from "axios";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useMutation } from "@tanstack/react-query";

const AuthenticationContext = createContext<any>(undefined);

export const AuthenticationProvider: React.FC<{ children: ReactElement }> = ({
  children,
}) => {
  const [userToken, setUserToken] = useLocalStorage<string | undefined>(
    "token",
    undefined
  );
  // console.log("token = ", userToken);
  const [lastLocation, setLastLocation] =
    useState<string | undefined>(undefined);

  const api = { setUserToken, userToken, lastLocation };
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const resultInterceptor = (response: AxiosResponse) => {
      return response;
    };

    const errorInterceptor = (error: any) => {
      if (error.response.status === 401) {
        setLastLocation(location.pathname);
        navigate("/login");
      }
      return Promise.reject(error);
    };

    const interceptorId = createAbraInterceptor(
      resultInterceptor,
      errorInterceptor
    );

    return () => ejectAbraInterceptor(interceptorId);
  }, [location, lastLocation, navigate]);

  return (
    <AuthenticationContext.Provider value={api}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication: any = (
  onLogin?: (lastLocation: string) => void,
  onLogout?: () => void
) => {
  const [authenticationError, setAuthenticationError] =
    useState<string | undefined>(undefined);
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw new Error(
      "useAuthentication must be used within the AuthenticationProvider"
    );
  }

  const loginMutation = useMutation(
    ({ email, password }: Credentials) => {
      setAuthenticationError(undefined);
      return abraLogin(email, password);
    },
    {
      onSuccess: (response) => {
        context.setUserToken(response?.data.access_token);
        if (onLogin) onLogin(context.lastLocation);
      },
      onError: (err: any) => {
        let errorMessage: string = "";
        const errorResponse = err.response.data;

        for (let item in errorResponse) {
          errorMessage += errorResponse[item] + " ";
        }

        setAuthenticationError(errorMessage);
      },
    }
  );

  const login = async (email: string, password: string) => {
    loginMutation.mutate({ email, password });
  };

  const logout = () => {
    setAuthenticationError(undefined);
    context.setUserToken(undefined);
    if (onLogout) onLogout();
  };

  return {
    login,
    logout,
    isLoginInProgress: loginMutation.isLoading,
    authenticationError,
  };
};
