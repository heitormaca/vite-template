import { Divider, Navbar, ScrollArea } from '@mantine/core';
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarRightCollapse,
} from '@tabler/icons-react';
import { useLayoutContext } from '../..';
import { NavbarItem } from './components';
import { useNavbarStyle } from './Navbar.style';
import { NavbarProps } from './Navbar.types';

const LayoutPrivateNavbar: React.FC<NavbarProps> = ({
  menuSectionComponent,
}) => {
  const { classes } = useNavbarStyle();

  const layoutParams = useLayoutContext();

  const iconCollapse = layoutParams.collapsed ? (
    <IconLayoutSidebarRightCollapse />
  ) : (
    <IconLayoutSidebarLeftCollapse />
  );

  return (
    <Navbar
      width={{
        base: layoutParams.isMobile ? 0 : layoutParams.collapsed ? 80 : 300,
      }}
      hidden={layoutParams.isMobile}
      classNames={classes}
    >
      <Navbar.Section grow component={ScrollArea}>
        {menuSectionComponent}
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
