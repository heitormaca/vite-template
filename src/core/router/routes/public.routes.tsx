import { RouteObjectPermission } from 'rouper-navigation';
import { redirect } from 'react-router-dom';
import { authClient } from '@/core/auth';
import { LoginPage } from '@/pages/Public';
import { isValidToken } from '@/core/utils/functions';
import ResetPasswordPage, {
  loader as resetPasswordLoader,
} from '@/pages/Public/ResetPasswordPage';

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
  {
    path: 'resetPassword/:codeId',
    element: <ResetPasswordPage />,
    loader: resetPasswordLoader,
  },
] as RouteObjectPermission[];
