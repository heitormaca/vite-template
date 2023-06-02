import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useWithRouter } from 'rouper-navigation';
import routes from './routes/index.routes';

const RouterConfig: React.FC = () => {
  const router = createBrowserRouter(useWithRouter(routes));
  return <RouterProvider router={router} />;
};

export default RouterConfig;
