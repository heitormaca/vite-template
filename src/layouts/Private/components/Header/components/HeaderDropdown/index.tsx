import { useSignOut } from '@/core/hooks';
import { useLayoutContext } from '@/layouts/Private';
import { Group, Menu, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconColorSwatch,
  IconExclamationCircle,
  IconLogout,
  IconUserCircle,
} from '@tabler/icons-react';
import { useState } from 'react';
import HeaderSettingThemeModal from '../HeaderSettingThemeModal';
import HeaderUserInfo from '../HeaderUserInfo';

const HeaderDropdown: React.FC = () => {
  const { isMobile } = useLayoutContext();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const signOut = useSignOut();
  const [settingThemeModalOpened, settingThemeModalAction] =
    useDisclosure(false);

  return (
    <>
      <Menu
        opened={opened}
        onChange={setOpened}
        shadow="md"
        position="bottom-end"
        withinPortal
      >
        <Menu.Target>
          <HeaderUserInfo opened={opened} />
        </Menu.Target>

        <Menu.Dropdown>
          {isMobile && (
            <>
              <Menu.Label>
                <HeaderUserInfo showInfo />
              </Menu.Label>

              <Menu.Divider />
            </>
          )}
          <Menu.Item icon={<IconUserCircle />} disabled>
            <Group>
              <span>Dados da conta</span>
              <IconExclamationCircle style={{ width: 14, height: 14 }} />
            </Group>
          </Menu.Item>

          <Menu.Item
            icon={<IconColorSwatch />}
            onClick={settingThemeModalAction.open}
          >
            Configurar tema
          </Menu.Item>

          <Menu.Divider />

          <Menu.Item
            icon={<IconLogout color={theme.colors.red[6]} />}
            onClick={signOut}
          >
            Desconectar
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <HeaderSettingThemeModal
        opened={settingThemeModalOpened}
        onClose={settingThemeModalAction.close}
      />
    </>
  );
};

export default HeaderDropdown;
