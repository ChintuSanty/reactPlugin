import React from 'react';

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
  target?: '_blank' | '_self';
}

export type NavbarColorScheme = 'light' | 'dark' | 'transparent' | 'primary';

export interface NavbarProps {
  logo?: React.ReactNode;
  logoText?: string;
  logoHref?: string;
  links?: NavLink[];
  sticky?: boolean;
  transparent?: boolean;
  colorScheme?: NavbarColorScheme;
  rightContent?: React.ReactNode;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
}
