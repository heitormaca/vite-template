import { useAuthContext } from '@/core/auth';
import { useLayoutContext } from '@/layouts/Private';
import {
  Box,
  Group,
  Avatar,
  Text,
  UnstyledButton,
  UnstyledButtonProps,
  useMantineTheme,
} from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { forwardRef } from 'react';

interface Props extends UnstyledButtonProps {
  opened?: boolean;
  showInfo?: boolean;
}

const HeaderUserInfo = forwardRef<HTMLButtonElement, Props>(
  ({ opened, showInfo, ...props }, ref) => {
    const { isMobile } = useLayoutContext();
    const { user } = useAuthContext();
    const initialName = user?.name?.slice(0, 1).toUpperCase();
    const { colorScheme } = useMantineTheme();
    const displayInfo = showInfo || (!showInfo && !isMobile);

    return (
      <UnstyledButton sx={{ cursor: 'pointer' }} ref={ref} {...props}>
        <Group spacing="md">
          <Avatar
            radius="xl"
            size={40}
            variant="filled"
            color={colorScheme === 'dark' ? 'gray.7' : 'gray.3'}
          >
            {initialName}
          </Avatar>

          {displayInfo && (
            <Group spacing="md">
              <Box>
                <Text weight="bold" size="sm">
                  {user?.name}
                </Text>
              </Box>
              {!isMobile && (
                <>{opened ? <IconChevronUp /> : <IconChevronDown />}</>
              )}
            </Group>
          )}
        </Group>
      </UnstyledButton>
    );
  }
);

export default HeaderUserInfo;
