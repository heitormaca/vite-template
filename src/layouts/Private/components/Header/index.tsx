import {
  ActionIcon,
  Box,
  Group,
  Header,
  Image,
  useMantineTheme,
} from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { IconMenu2 } from '@tabler/icons-react';
import { useLayoutContext } from '../..';
import { HeaderDropdown } from './components';
import HeaderMenu from './components/HeaderMenu';
import { useHeaderStyle } from './Header.style';
import { useEffect } from 'react';

const LayoutPrivateHeader: React.FC = () => {
  const { classes } = useHeaderStyle();
  const { collapsed } = useLayoutContext();
  const [menuOpened, toggleMenu] = useToggle();
  const theme = useMantineTheme();
  const brandScheme = theme.colorScheme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    if (menuOpened) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
  }, [menuOpened]);

  return (
    <>
      <Header height={80} className={classes.header}>
        <Group
          w={collapsed ? 80 : 300}
          position="center"
          className={classes.headerBrand}
        >
          {collapsed && (
            <Image src={`/images/brand-icon-${brandScheme}.svg`} width={30} />
          )}
          {!collapsed && (
            <Image src={`/images/brand-${brandScheme}.svg`} width={110} />
          )}
        </Group>

        <Group position="apart" sx={{ flex: 1 }} px="xl">
          <Box className={classes.headerMenuAction}>
            <ActionIcon
              variant="default"
              size="lg"
              onClick={() => toggleMenu()}
            >
              <IconMenu2 />
            </ActionIcon>
          </Box>
          <Box sx={{ marginLeft: 'auto' }}>
            <HeaderDropdown />
          </Box>
        </Group>
      </Header>

      <HeaderMenu opened={menuOpened} onClose={toggleMenu} />
    </>
  );
};

export default LayoutPrivateHeader;
