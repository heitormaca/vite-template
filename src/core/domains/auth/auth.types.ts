export interface AuthLogin {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export enum Profile {
  Admin = 0,
  Supplier = 1,
}
