import { ReactElement } from 'react';

export interface NavbarItemProps {
  to: string;
  label: string;
  icon: ReactElement;
  active?: boolean;
  disabled?: boolean;
  onClick?: (to: string) => void;
  collapsed?: boolean;
}
