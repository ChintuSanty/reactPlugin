import React from 'react';

export type IconBoxLayout = 'top' | 'left' | 'right';

export interface IconBoxProps {
  icon: React.ReactNode;
  title?: string;
  description?: string;
  layout?: IconBoxLayout;
  iconColor?: string;
  iconSize?: string;
  iconBackground?: string;
  iconBorderRadius?: string;
  iconPadding?: string;
  titleColor?: string;
  descriptionColor?: string;
  align?: 'left' | 'center' | 'right';
  gap?: string;
  className?: string;
  style?: React.CSSProperties;
}
