import React from 'react';

export type CardVariant = 'default' | 'outlined' | 'elevated' | 'flat';

export interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  imageHeight?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  variant?: CardVariant;
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  borderRadius?: string;
  padding?: string;
  backgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  hoverEffect?: boolean;
  link?: string;
  linkTarget?: '_blank' | '_self';
  className?: string;
  style?: React.CSSProperties;
}
