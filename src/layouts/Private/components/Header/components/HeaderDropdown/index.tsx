import { useSignOut } from '@/core/hooks';
import { useLayoutContext } from '@/layouts/Private';
import { Menu, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconColorSwatch,
  IconLogout,
  IconUserCircle,
} from '@tabler/icons-react';
import { useState } from 'react';
import HeaderSettingThemeModal from '../HeaderSettingThemeModal';
import HeaderUserInfo from '../HeaderUserInfo';
import { useUserDetails } from '@/core/domains/users/user.hooks';
import { useAuthContext } from '@/core/auth';
import HeaderUserDetailsModal from '../HeaderUserDetailsModal';

const HeaderDropdown: React.FC = () => {
  const { isMobile } = useLayoutContext();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const signOut = useSignOut();
  const [settingThemeModalOpened, settingThemeModalAction] =
    useDisclosure(false);
  const [userModalOpened, userModalAction] = useDisclosure(false);

  const { user } = useAuthContext();
  const { data } = useUserDetails(user?.id ? user.id : '');

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
          <HeaderUserInfo opened={opened} name={data?.name || ''} />
        </Menu.Target>

        <Menu.Dropdown>
          {isMobile && (
            <>
              <Menu.Label>
                <HeaderUserInfo name={data?.name || ''} showInfo />
              </Menu.Label>

              <Menu.Divider />
            </>
          )}
          <Menu.Item
            icon={<IconUserCircle />}
            onClick={() => userModalAction.open()}
          >
            Dados da conta
          </Menu.Item>

          <Menu.Divider />

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

      {data && (
        <HeaderUserDetailsModal
          user={data}
          opened={userModalOpened}
          onClose={userModalAction.close}
        />
      )}
    </>
  );
};

export default HeaderDropdown;
