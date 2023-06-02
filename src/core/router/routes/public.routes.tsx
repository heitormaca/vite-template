import { RouteObjectPermission } from 'rouper-navigation';
import { redirect } from 'react-router-dom';
import { authClient } from '@/core/auth';
import { LoginPage } from '@/pages/Public';
import { isValidToken } from '@/core/utils/functions';

export default [
  {
    index: true,
    element: <LoginPage />,
    loader: () => {
      const token = authClient.getToken();
      if (token && isValidToken(token)) {
        return redirect('/app');
      }

      authClient.clearAuthStorage();

      return null;
    },
  },
] as RouteObjectPermission[];
