import { AuthState, AuthStateType, AuthUser } from './auth.types';

const STORAGE_KEY_USER = 'system/AuthData/User';
const STORAGE_KEY_TOKEN = 'system/AuthData/Token';

export default class AuthClient {
  protected user: AuthUser | null;
  protected token: string | null;

  state: AuthState = AuthStateType.UNAUTHENTICATED;

  constructor() {
    const authUserStorage = localStorage.getItem(STORAGE_KEY_USER);
    const authTokenStorage = localStorage.getItem(STORAGE_KEY_TOKEN);

    this.user = (!!authUserStorage && JSON.parse(authUserStorage)) || null;
    this.token = (!!authTokenStorage && authTokenStorage) || null;

    this.state =
      !!this.user && !!this.token
        ? AuthStateType.AUTHENTICATED
        : AuthStateType.UNAUTHENTICATED;
  }

  setUser(user: AuthUser | null = null) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }

  setToken(token: string | null = null) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  setAuthStorage(data: { user: AuthUser; token: string }) {
    this.setUser(data.user);
    this.setToken(data.token);

    localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(data.user));
    localStorage.setItem(STORAGE_KEY_TOKEN, data.token);

    this.state = AuthStateType.AUTHENTICATED;
  }

  clearAuthStorage() {
    this.setUser();
    this.setToken();

    localStorage.setItem(STORAGE_KEY_USER, '');
    localStorage.setItem(STORAGE_KEY_TOKEN, '');

    this.state = AuthStateType.UNAUTHENTICATED;
  }
}
