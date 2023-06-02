import AuthProvider from './core/auth';
import { MantineConfigProvider } from './core/configs/mantine';
import { QueryClientProvider, queryClient } from './core/configs/react-query';
import RouterConfigProvider from './core/router';

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <MantineConfigProvider>
          <RouterConfigProvider />
        </MantineConfigProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
