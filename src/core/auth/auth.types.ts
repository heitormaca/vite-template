export interface AuthUser {
  name: string;
  id: string;
}

export type AuthState = 'AUTHENTICATED' | 'UNAUTHENTICATED';

export enum AuthStateType {
  AUTHENTICATED = 'AUTHENTICATED',
  UNAUTHENTICATED = 'UNAUTHENTICATED',
}

export interface SetterAuthData {
  user: AuthUser;
  token: string;
}

export interface AuthContextParams {
  user: AuthUser | null;
  token: string | null;
  tokenError?: 'InvalidToken';
  state: AuthState;
  setAuthData(data: SetterAuthData): void;
  clearAuthData(): void;
}

export enum AuthRole {
  AUTHORIZED = 'AUTHORIZED',
}

export interface AuthTokenDecoded {
  sub: string;
  name: string;
  email: string;
  role: string;
  profile: string;
  exp: number;
  iss: string;
  aud: string;
}
