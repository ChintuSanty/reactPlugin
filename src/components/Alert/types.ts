import React from 'react';

export type AlertType = 'success' | 'warning' | 'error' | 'info';

export interface AlertProps {
  message: string;
  title?: string;
  type?: AlertType;
  dismissible?: boolean;
  icon?: React.ReactNode | boolean;
  onDismiss?: () => void;
  borderRadius?: string;
  className?: string;
  style?: React.CSSProperties;
}
