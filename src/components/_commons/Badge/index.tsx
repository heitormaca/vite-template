import { Badge as MBadge, Text } from '@mantine/core';
import { BadgeProps, badgeVariants } from './Badge.types';

const Badge: React.FC<BadgeProps> = ({ type, ...props }) => {
  return (
    <MBadge bg={badgeVariants[type].colorType} {...props}>
      <Text color="black">{badgeVariants[type].text}</Text>
    </MBadge>
  );
};

export default Badge;
