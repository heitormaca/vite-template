import jwtDecode from 'jwt-decode';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  AuthContextParams,
  AuthTokenDecoded,
  SetterAuthData,
} from './auth.types';
import AuthClient from './AuthClient';

export const authClient = new AuthClient();

const AuthContext = createContext({} as AuthContextParams);

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider: React.FC<PropsWithChildren> = (props) => {
  const [authData, updateAuthData] = useState({
    user: authClient.getUser(),
    token: authClient.getToken(),
    state: authClient.state,
  });
  const [tokenError, setTokenError] = useState<'InvalidToken'>();

  function verifyToken(token: string | null) {
    if (token) {
      const tokenData = jwtDecode<AuthTokenDecoded>(token);

      if (tokenData.exp * 1000 <= Date.now()) {
        setTokenError('InvalidToken');
      }
    }
  }

  useEffect(() => {
    verifyToken(authData.token);
  }, [authData.token]);

  function handleAuthData() {
    updateAuthData({
      user: authClient.getUser(),
      token: authClient.getToken(),
      state: authClient.state,
    });
  }

  function setAuthData(data: SetterAuthData) {
    authClient.setAuthStorage(data);
    handleAuthData();
  }

  function clearAuthData() {
    authClient.clearAuthStorage();
    handleAuthData();
    setTokenError(undefined);
  }

  return (
    <AuthContext.Provider
      value={{
        ...authData,
        setAuthData,
        clearAuthData,
        tokenError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
