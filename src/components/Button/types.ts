import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps {
  text?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
}
