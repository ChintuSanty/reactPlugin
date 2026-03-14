import React from 'react';

export type ImageBoxLayout = 'top' | 'left' | 'right' | 'bottom';

export interface ImageBoxProps {
  image: string;
  imageAlt?: string;
  imageSize?: string;
  imageBorderRadius?: string;
  title?: string;
  description?: string;
  layout?: ImageBoxLayout;
  titleColor?: string;
  descriptionColor?: string;
  align?: 'left' | 'center' | 'right';
  gap?: string;
  link?: string;
  linkTarget?: '_blank' | '_self';
  className?: string;
  style?: React.CSSProperties;
}
