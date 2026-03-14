import React from 'react';

export const mergeStyles = (
  ...styles: (React.CSSProperties | undefined)[]
): React.CSSProperties => {
  return styles.reduce<React.CSSProperties>((acc, style) => {
    if (style) return { ...acc, ...style };
    return acc;
  }, {});
};

export const sizeMap: Record<string, string> = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
};

export const spacingMap: Record<string, string> = {
  none: '0',
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
};

export const shadowMap: Record<string, string> = {
  none: 'none',
  sm: '0 1px 2px rgba(0,0,0,0.05)',
  md: '0 4px 6px rgba(0,0,0,0.07)',
  lg: '0 10px 15px rgba(0,0,0,0.1)',
  xl: '0 20px 25px rgba(0,0,0,0.15)',
  '2xl': '0 25px 50px rgba(0,0,0,0.25)',
};

export const baseButtonStyles: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  fontFamily: 'inherit',
  fontWeight: '600',
  letterSpacing: '0.025em',
  transition: 'all 0.2s ease',
  textDecoration: 'none',
  lineHeight: 1.5,
};

export const colorPalette = {
  primary: '#4A90E2',
  secondary: '#7B68EE',
  success: '#52C41A',
  warning: '#FAAD14',
  error: '#FF4D4F',
  info: '#1890FF',
  dark: '#1a1a2e',
  light: '#f8f9fa',
  white: '#ffffff',
  black: '#000000',
};
