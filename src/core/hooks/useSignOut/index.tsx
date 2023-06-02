import { useRouperClaimsState } from 'rouper-navigation';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '@/core/auth';

export default function useSignOut() {
  const { clearAuthData } = useAuthContext();
  const [, setClaims] = useRouperClaimsState();
  const navigate = useNavigate();

  return () => {
    clearAuthData();
    setClaims(null);
    navigate('/');
  };
}
