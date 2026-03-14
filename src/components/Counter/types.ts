import React from 'react';

export interface CounterProps {
  start?: number;
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  decimals?: number;
  fontSize?: string;
  color?: string;
  fontWeight?: string | number;
  label?: string;
  labelColor?: string;
  labelFontSize?: string;
  animateOnView?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
