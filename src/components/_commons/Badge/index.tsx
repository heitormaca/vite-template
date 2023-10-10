import { Badge as MantineBadge, Text } from '@mantine/core';
import { BadgeProps, badgeVariants } from './Badge.types';

const Badge: React.FC<BadgeProps> = ({ type, ...props }) => {
  return (
    <MantineBadge bg={badgeVariants[type].colorType} {...props}>
      <Text color="black">{badgeVariants[type].text}</Text>
    </MantineBadge>
  );
};

export default Badge;
