import React from 'react';

export interface CarouselItem {
  id?: string;
  content: React.ReactNode;
}

export interface CarouselProps {
  items: CarouselItem[];
  autoplay?: boolean;
  autoplaySpeed?: number;
  showArrows?: boolean;
  showDots?: boolean;
  slidesToShow?: number;
  infinite?: boolean;
  speed?: number;
  arrowColor?: string;
  dotColor?: string;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (index: number) => void;
}
