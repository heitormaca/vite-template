import { BadgeProps as MantineBadgesProps } from '@mantine/core';

export type BadgeProps = MantineBadgesProps & {
  type: BadgeType;
};

export const STATUS: BadgeType[] = [
  'new',
  'inProgress',
  'finished',
  'canceled',
  'active',
  'inactive',
];

export type BadgeType =
  | 'new'
  | 'inProgress'
  | 'finished'
  | 'canceled'
  | 'active'
  | 'inactive';

type ColorType = 'red' | 'blue' | 'green' | 'yellow';

const colorVariants: Record<ColorType, string> = {
  red: 'rgba(255, 144, 122, 0.30)',
  blue: 'rgba(82, 177, 255, 0.30)',
  green: 'rgba(116, 186, 31, 0.30)',
  yellow: 'rgba(255, 214, 0, 0.30)',
};

type VariantBadgeProps = {
  colorType: string;
  text: string;
};

export const badgeVariants: Record<BadgeType, VariantBadgeProps> = {
  new: {
    colorType: colorVariants.yellow,
    text: 'Novo',
  },
  inProgress: {
    colorType: colorVariants.blue,
    text: 'Em progresso',
  },
  finished: {
    colorType: colorVariants.green,
    text: 'Finalizado',
  },
  canceled: {
    colorType: colorVariants.red,
    text: 'Cancelado',
  },
  active: {
    colorType: colorVariants.green,
    text: 'Ativo',
  },
  inactive: {
    colorType: colorVariants.red,
    text: 'Inativo',
  },
};
