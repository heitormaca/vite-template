import {
  Box,
  Group,
  Image,
  Kbd,
  Modal,
  ModalProps,
  Stack,
  Text,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import { useOs } from '@mantine/hooks';
import { useChangeThemeModalStyle } from './HeaderSettingThemeModal.style';

const HeaderSettingThemeModal: React.FC<ModalProps> = (props) => {
  const { classes, cx } = useChangeThemeModalStyle();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const os = useOs();
  const invalidOs = ['android', 'ios', 'undetermined'];

  const textCommand = (
    <>
      , ou utilize o atalho <Kbd>{os === 'macos' ? '⌘' : 'Ctrl'}</Kbd>
      {` + `}
      <Kbd>j</Kbd>
    </>
  );

  return (
    <Modal {...props} title="Configurar tema">
      <Stack>
        <Text color="gray.6">
          Selecione o tipo de tema entre modo claro e escuro
          {!invalidOs.includes(os) ? textCommand : ''}
        </Text>

        <Group>
          <Box className={classes.changeThemeWrapper}>
            <UnstyledButton
              onClick={() => toggleColorScheme('light')}
              className={cx(classes.changeThemeButton, {
                [classes.changeThemeButtonActive]: colorScheme === 'light',
              })}
            >
              <Image src="/images/theme-light.svg" width="100%" />
            </UnstyledButton>
            <Text>Modo claro</Text>
          </Box>

          <Box className={classes.changeThemeWrapper}>
            <UnstyledButton
              onClick={() => toggleColorScheme('dark')}
              className={cx(classes.changeThemeButton, {
                [classes.changeThemeButtonActive]: colorScheme === 'dark',
              })}
            >
              <Image src="/images/theme-dark.svg" width="100%" />
            </UnstyledButton>
            <Text>Modo escuro</Text>
          </Box>
        </Group>
      </Stack>
    </Modal>
  );
};

export default HeaderSettingThemeModal;
