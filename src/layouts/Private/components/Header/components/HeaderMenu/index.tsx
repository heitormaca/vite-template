import { Navbar, Portal, ScrollArea, Stack } from '@mantine/core';
import { useLocation, useMatches } from 'react-router-dom';
import { useRouperRoutes } from 'rouper-navigation';
import { NavbarItem } from '@/layouts/Private/components/Navbar/components';
import { useNavbarStyle } from '@/layouts/Private/components/Navbar/Navbar.style';
import { useEffect } from 'react';
import { useLayoutContext } from '@/layouts/Private';
import { HeaderMenuProps } from './HeaderMenu.types';

const HeaderMenu: React.FC<HeaderMenuProps> = ({ opened, onClose }) => {
  const { classes } = useNavbarStyle();
  const rootRoutes = useRouperRoutes()[0];
  const appRoutes =
    rootRoutes.children?.find((route) => route.path === 'app')?.children || [];
  const currentRoute = useMatches().at(-1);
  const history = useLocation();
  const { isMobile } = useLayoutContext();

  useEffect(() => {
    if (opened) {
      onClose();
    }
  }, [history.pathname, isMobile]);

  function routeActive(path?: string) {
    if (!path) return false;
    return !!currentRoute?.pathname.includes(path);
  }

  if (!isMobile) return null;

  if (!opened) return null;

  return (
    <Portal>
      <Navbar
        width={{
          base: '100vw',
        }}
        classNames={classes}
      >
        <Navbar.Section grow component={ScrollArea}>
          <Stack py="xl">
            {appRoutes.map((route) => (
              <NavbarItem
                key={route.path}
                to={route.path || ''}
                label={route.others?.title}
                icon={route.others?.icon}
                active={routeActive(route.path)}
                disabled={route.others?.disabled}
              />
            ))}
          </Stack>
        </Navbar.Section>
      </Navbar>
    </Portal>
  );
};

export default HeaderMenu;
