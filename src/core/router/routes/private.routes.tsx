import { RouteObjectPermission } from 'rouper-navigation';
import { IconUsers } from '@tabler/icons-react';
import { AuthRole } from '@/core/auth/auth.types';
import LayoutPrivate from '@/layouts/Private';
import { UsersPage } from '@/pages/Private';

export default [
  {
    path: 'app',
    element: <LayoutPrivate />,
    claims: [AuthRole.AUTHORIZED],
    children: [
      {
        path: 'users',
        element: <UsersPage />,
        others: { title: 'Usuários', icon: <IconUsers /> },
      },
    ],
  },
] as RouteObjectPermission[];
