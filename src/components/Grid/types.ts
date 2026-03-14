import React from 'react';

export interface ResponsiveColumns {
  mobile?: number;
  tablet?: number;
  desktop?: number;
}

export interface GridProps {
  children: React.ReactNode;
  columns?: number | ResponsiveColumns;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  className?: string;
  style?: React.CSSProperties;
}
