import { Divider, Navbar, ScrollArea, Stack } from '@mantine/core';
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarRightCollapse,
} from '@tabler/icons-react';
import { useEffect } from 'react';
import { useMatches } from 'react-router-dom';
import { useRouperRoutes } from 'rouper-navigation';
import { useLayoutContext } from '../..';
import { NavbarItem } from './components';
import { useNavbarStyle } from './Navbar.style';

const LayoutPrivateNavbar: React.FC = () => {
  const { classes } = useNavbarStyle();
  const rootRoutes = useRouperRoutes()[0];
  const appRoutes =
    rootRoutes.children?.find((route) => route.path === 'app')?.children || [];
  const currentRoute = useMatches().at(-1);
  const layoutParams = useLayoutContext();

  const iconCollapse = layoutParams.collapsed ? (
    <IconLayoutSidebarRightCollapse />
  ) : (
    <IconLayoutSidebarLeftCollapse />
  );

  useEffect(() => {
    const routeFinded = appRoutes.find(
      (route) => route.path && currentRoute?.pathname.includes(route.path),
    );

    if (routeFinded) {
      document.title = `${routeFinded.others?.title}`;
    }
  }, [currentRoute]);

  function routeActive(path?: string) {
    console.log(currentRoute, path);

    if (!path) return false;
    return !!currentRoute?.pathname.split('/').includes(path);
  }

  return (
    <Navbar
      width={{
        base: layoutParams.isMobile ? 0 : layoutParams.collapsed ? 80 : 300,
      }}
      hidden={layoutParams.isMobile}
      classNames={classes}
    >
      <Navbar.Section grow component={ScrollArea}>
        <Stack spacing={0}>
          {appRoutes.map((route) => (
            <NavbarItem
              key={route.path}
              to={route.path || ''}
              label={route.others?.title}
              icon={route.others?.icon}
              active={routeActive(route.path)}
              disabled={route.others?.disabled}
              collapsed={layoutParams.collapsed}
            />
          ))}
        </Stack>
      </Navbar.Section>

      <Divider className={classes.navbarDivider} />

      <Navbar.Section>
        <NavbarItem
          label={layoutParams.collapsed ? 'Expandir menu' : 'Recolher menu'}
          icon={iconCollapse}
          to=""
          onClick={() =>
            layoutParams.setLayoutParams({ collapsed: !layoutParams.collapsed })
          }
          collapsed={layoutParams.collapsed}
        />
      </Navbar.Section>
    </Navbar>
  );
};

export default LayoutPrivateNavbar;
