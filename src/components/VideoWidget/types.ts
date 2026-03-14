import React from 'react';

export type AspectRatio = '16/9' | '4/3' | '1/1' | '9/16' | '21/9';

export interface VideoWidgetProps {
  url: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
  controls?: boolean;
  aspectRatio?: AspectRatio;
  borderRadius?: string;
  boxShadow?: string;
  className?: string;
  style?: React.CSSProperties;
}
