import React from 'react';

export type ToastType = 'success' | 'warning' | 'error' | 'info';
export type ToastPosition =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center';

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  position?: ToastPosition;
  title?: string;
  onDismiss?: () => void;
  isVisible?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface ToastContainerProps {
  position?: ToastPosition;
  children: React.ReactNode;
}
