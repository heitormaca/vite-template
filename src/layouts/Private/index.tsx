// import { useAuthContext } from '@/core/auth';
// import { useSignOut } from '@/core/hooks';
import { AppShell, useMantineTheme } from '@mantine/core';
import { useHotkeys, useLocalStorage, useViewportSize } from '@mantine/hooks';
import { createContext, useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutPrivateHeader, LayoutPrivateNavbar } from './components';
import { useLayoutPrivateStyle } from './LayoutPrivate.style';

interface LayoutContextInfo {
  collapsed: boolean;
  isMobile: boolean;
}
interface LayoutContextParams extends LayoutContextInfo {
  setLayoutParams: (data: Partial<LayoutContextInfo>) => void;
}

const LayoutContext = createContext({} as LayoutContextParams);

const LayoutPrivate: React.FC = () => {
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
  // const { tokenError } = useAuthContext();
  // const signOut = useSignOut();

  // useEffect(() => {
  //   if (tokenError) {
  //     signOut();
  //   }
  // }, [tokenError]);

  useHotkeys([
    ['ctrl+T', () => setLayoutParams({ collapsed: !params.collapsed })],
  ]);

  useEffect(() => {
    console.log('Breakpoints', theme.breakpoints);

    setLayoutParams({
      // isMobile: width <= theme.breakpoints.sm,
      // collapsed: width <= theme.breakpoints.lg,
    });
  }, [width]);

  function setLayoutParams(data: Partial<LayoutContextInfo>) {
    setParams((state) => ({ ...state, ...data }));
  }

  return (
    <LayoutContext.Provider value={{ ...params, setLayoutParams }}>
      <AppShell
        header={<LayoutPrivateHeader />}
        navbar={<LayoutPrivateNavbar />}
        classNames={classes}
        padding="xl"
      >
        <Outlet />
      </AppShell>
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => useContext(LayoutContext);

export default LayoutPrivate;
