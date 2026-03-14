import React from 'react';

export interface HeroCTA {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  ctaButtons?: HeroCTA[];
  align?: 'left' | 'center' | 'right';
  minHeight?: string;
  titleColor?: string;
  subtitleColor?: string;
  descriptionColor?: string;
  padding?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
