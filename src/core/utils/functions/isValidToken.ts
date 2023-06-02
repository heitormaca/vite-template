import { AuthTokenDecoded } from '@/core/auth/auth.types';
import jwtDecode from 'jwt-decode';

export default function isValidToken(token: string) {
  const authToken = jwtDecode<AuthTokenDecoded>(token);

  if (!authToken) return false;

  return new Date(authToken.exp * 1000) > new Date();
}
