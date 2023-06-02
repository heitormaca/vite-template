import { RouperProvider } from 'rouper-navigation';
import { rouperNavClient } from './rouperNavClient';
import RouterConfig from './RouterConfig';

const RouterConfigProvider: React.FC = () => {
  return (
    <RouperProvider client={rouperNavClient}>
      <RouterConfig />
    </RouperProvider>
  );
};

export default RouterConfigProvider;
