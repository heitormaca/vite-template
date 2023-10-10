import { AppShell, Stack, useMantineTheme } from '@mantine/core';
import { useHotkeys, useLocalStorage, useViewportSize } from '@mantine/hooks';
import { createContext, useContext, useEffect } from 'react';
import { Outlet, useLocation, useMatches, useNavigate } from 'react-router-dom';
import { LayoutPrivateHeader, LayoutPrivateNavbar } from './components';
import { useLayoutPrivateStyle } from './LayoutPrivate.style';
import { useRouperRoutes } from 'rouper-navigation';
import { NavbarItem } from './components/Navbar/components';
import { useSignOut } from '@/core/hooks';
import { useAuthContext } from '@/core/auth';

interface LayoutContextInfo {
  collapsed: boolean;
  isMobile: boolean;
}
interface LayoutContextParams extends LayoutContextInfo {
  setLayoutParams: (data: Partial<LayoutContextInfo>) => void;
}

const LayoutContext = createContext({} as LayoutContextParams);

const LayoutPrivate: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { classes } = useLayoutPrivateStyle();
  const [params, setParams] = useLocalStorage({
    key: 'layout-params',
    defaultValue: {
      collapsed: false,
      isMobile: false,
    },
    getInitialValueInEffect: false,
  });
  const theme = useMantineTheme();
  const { width } = useViewportSize();

  const { tokenError } = useAuthContext();
  const signOut = useSignOut();

  const currentRoute = useMatches().at(-1);
  const rootRoutes = useRouperRoutes()[0];
  const appRoutes =
    rootRoutes.children?.find((route) => route.path === 'app')?.children || [];

  useHotkeys([
    ['ctrl+T', () => setLayoutParams({ collapsed: !params.collapsed })],
  ]);

  useEffect(() => {
    if (tokenError) {
      signOut();
    }
  }, [tokenError]);

  function setLayoutParams(data: Partial<LayoutContextInfo>) {
    setParams((state) => ({ ...state, ...data }));
  }

  function routeActive(path?: string) {
    if (!path) return false;
    return !!currentRoute?.pathname.split('/').includes(path);
  }

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/app') {
      navigate('/app/users');
    }
  }, [location.pathname]);

  useEffect(() => {
    setLayoutParams({
      isMobile: width <= Number(theme.breakpoints.sm.replace('em', '')) * 16,
      collapsed: width <= Number(theme.breakpoints.md.replace('em', '')) * 16,
    });
  }, [width]);

  useEffect(() => {
    const routeFinded = appRoutes.find(
      (route) => route.path && currentRoute?.pathname.includes(route.path)
    );

    if (routeFinded) {
      document.title = `${routeFinded.others?.title}`;
    }
  }, [currentRoute]);

  return (
    <LayoutContext.Provider value={{ ...params, setLayoutParams }}>
      <AppShell
        header={<LayoutPrivateHeader />}
        navbar={
          <LayoutPrivateNavbar
            menuSectionComponent={
              <Stack spacing={0}>
                {appRoutes.map((route) => (
                  <NavbarItem
                    key={route.path}
                    to={route.path || ''}
                    label={route.others?.title}
                    icon={route.others?.icon}
                    active={routeActive(route.path)}
                    disabled={route.others?.disabled}
                    collapsed={params.collapsed}
                  />
                ))}
              </Stack>
            }
          />
        }
        classNames={classes}
      >
        <Outlet />
      </AppShell>
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);

export default LayoutPrivate;
