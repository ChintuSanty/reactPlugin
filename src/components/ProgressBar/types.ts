import React from 'react';

export interface ProgressBarProps {
  label?: string;
  value: number;
  max?: number;
  color?: string;
  trackColor?: string;
  height?: string;
  showValue?: boolean;
  valueFormat?: 'percent' | 'value' | 'both';
  animate?: boolean;
  animateOnView?: boolean;
  borderRadius?: string;
  striped?: boolean;
  className?: string;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}
