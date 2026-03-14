import React from 'react';

export type TestimonialLayout = 'card' | 'quote' | 'bubble' | 'minimal';

export interface TestimonialProps {
  quote: string;
  name: string;
  position?: string;
  company?: string;
  avatar?: string;
  layout?: TestimonialLayout;
  starRating?: number;
  quoteColor?: string;
  nameColor?: string;
  positionColor?: string;
  backgroundColor?: string;
  borderRadius?: string;
  padding?: string;
  boxShadow?: string;
  className?: string;
  style?: React.CSSProperties;
}
