import React from 'react';

export interface HeadingProps {
  text?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: string;
  fontSize?: string;
  fontWeight?: string | number;
  align?: 'left' | 'center' | 'right' | 'justify';
  letterSpacing?: string;
  lineHeight?: string | number;
  fontFamily?: string;
  textTransform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  textDecoration?: string;
  margin?: string;
  padding?: string;
  className?: string;
  style?: React.CSSProperties;
}
