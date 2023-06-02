import { Box, Group, Text, UnstyledButton } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';
import { cloneElement } from 'react';
import { Link } from 'react-router-dom';
import { useNavbarItemStyle } from './NavbarItem.style';
import { NavbarItemProps } from './NavbarItem.types';

const NavbarItem: React.FC<NavbarItemProps> = (props) => {
  const { classes, cx } = useNavbarItemStyle({
    disabled: props.disabled,
    active: props.active,
    collapsed: props.collapsed,
  });

  const icon = cloneElement(props.icon, { className: classes.navbarItemIcon });

  return (
    <UnstyledButton<typeof Link>
      component={Link}
      to={props.to}
      className={cx(classes.navbarItemLink)}
      onClick={(e) => {
        if (props.onClick) {
          e.preventDefault();
          props.onClick(props.to);
        }
      }}
    >
      <Group spacing="md" noWrap>
        <Box className={classes.navbarItemIconWrapper}>{icon}</Box>

        <Text className={classes.navbarItemLabel} truncate>
          {props.label}
        </Text>

        {!!props.disabled && (
          <IconExclamationCircle
            style={{ width: 14, height: 14 }}
            className={classes.navbarItemInfoIcon}
          />
        )}
      </Group>
    </UnstyledButton>
  );
};

export default NavbarItem;
