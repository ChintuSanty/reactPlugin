import React from 'react';

export type ImageSize = 'thumbnail' | 'medium' | 'large' | 'full' | string;
export type HoverEffect = 'none' | 'zoom' | 'grayscale' | 'blur' | 'brightness' | 'opacity';

export interface ImageWidgetProps {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  borderRadius?: string;
  caption?: string;
  link?: string;
  linkTarget?: '_blank' | '_self';
  hoverEffect?: HoverEffect;
  boxShadow?: string;
  className?: string;
  style?: React.CSSProperties;
  captionStyle?: React.CSSProperties;
}
