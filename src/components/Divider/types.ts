import React from 'react';

export type DividerStyle = 'solid' | 'dashed' | 'dotted' | 'double';
export type DividerTextAlign = 'left' | 'center' | 'right';

export interface DividerProps {
  dividerStyle?: DividerStyle;
  color?: string;
  width?: string;
  thickness?: string;
  text?: string;
  textAlign?: DividerTextAlign;
  textColor?: string;
  textBackground?: string;
  textPadding?: string;
  margin?: string;
  className?: string;
  style?: React.CSSProperties;
}
