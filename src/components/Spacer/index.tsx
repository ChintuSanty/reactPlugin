import React, { useEffect, useState } from 'react';
import { SpacerProps } from './types';

const Spacer: React.FC<SpacerProps> = ({
  height = '2rem',
  mobileHeight,
  tabletHeight,
  desktopHeight,
  className = '',
}) => {
  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getHeight = (): string => {
    if (screenWidth < 640 && mobileHeight) return mobileHeight;
    if (screenWidth < 1024 && tabletHeight) return tabletHeight;
    if (desktopHeight) return desktopHeight;
    return height;
  };

  return (
    <div
      className={`eru-spacer make-block ${className}`}
      style={{ height: getHeight() }}
      aria-hidden="true"
    />
  );
};

export default Spacer;
