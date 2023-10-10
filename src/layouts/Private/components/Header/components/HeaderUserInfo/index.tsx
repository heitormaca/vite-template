import { useLayoutContext } from '@/layouts/Private';
import {
  Box,
  Group,
  Avatar,
  Text,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { forwardRef } from 'react';
import { HeaderUserInfoProps } from './HeaderUserInfo.types';

const HeaderUserInfo = forwardRef<HTMLButtonElement, HeaderUserInfoProps>(
  ({ opened, showInfo, name, ...props }, ref) => {
    const { isMobile } = useLayoutContext();
    const initialName = name.slice(0, 1).toUpperCase();
    const { colorScheme } = useMantineTheme();
    const displayInfo = showInfo || (!showInfo && !isMobile);

    return (
      <UnstyledButton sx={{ cursor: 'pointer' }} ref={ref} {...props}>
        <Group spacing="md">
          <Avatar
            radius="xl"
            size={40}
            variant="filled"
            color={colorScheme === 'dark' ? 'gray.7' : 'primary'}
          >
            {initialName}
          </Avatar>

          {displayInfo && (
            <Group spacing="md">
              <Box>
                <Text weight="bold" size="sm">
                  {name}
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
