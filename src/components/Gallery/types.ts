import React from 'react';

export interface GalleryImage {
  id?: string;
  src: string;
  alt?: string;
  caption?: string;
  thumbnail?: string;
}

export type GalleryHoverEffect = 'none' | 'zoom' | 'overlay' | 'slide' | 'grayscale';

export interface GalleryProps {
  images: GalleryImage[];
  columns?: number;
  gap?: string;
  lightbox?: boolean;
  hoverEffect?: GalleryHoverEffect;
  borderRadius?: string;
  aspectRatio?: string;
  className?: string;
  style?: React.CSSProperties;
}
