import React from 'react';

export interface IconListItem {
  icon: React.ReactNode;
  text: string;
  link?: string;
  linkTarget?: '_blank' | '_self';
  color?: string;
}

export interface IconListProps {
  items: IconListItem[];
  layout?: 'vertical' | 'horizontal';
  iconColor?: string;
  iconSize?: string;
  textColor?: string;
  gap?: string;
  divider?: boolean;
  dividerColor?: string;
  className?: string;
  style?: React.CSSProperties;
}
