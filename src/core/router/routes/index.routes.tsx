import { Outlet } from 'react-router-dom';
import { RouteObjectPermission } from 'rouper-navigation';
import publicRoutes from './public.routes';
import privateRoutes from './private.routes';
import { FeedbackError } from '../components';

export default [
  {
    path: '/',
    element: <Outlet />,
    errorElement: <FeedbackError />,
    children: [...publicRoutes, ...privateRoutes],
  },
] as RouteObjectPermission[];
