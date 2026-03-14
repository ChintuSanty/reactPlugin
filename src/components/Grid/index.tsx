import React, { useState, useEffect } from 'react';
import { GridProps, ResponsiveColumns } from './types';

const Grid: React.FC<GridProps> = ({
  children,
  columns = 3,
  gap = '1.5rem',
  rowGap,
  columnGap,
  align = 'stretch',
  justify = 'start',
  className = '',
  style = {},
}) => {
  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getColumns = (): number => {
    if (typeof columns === 'number') return columns;
    const responsive = columns as ResponsiveColumns;
    if (screenWidth < 640) return responsive.mobile || 1;
    if (screenWidth < 1024) return responsive.tablet || 2;
    return responsive.desktop || 3;
  };

  const colCount = getColumns();
  const colsClass = colCount >= 1 && colCount <= 12 ? `grid-cols-${colCount}` : 'grid-cols-3';

  const alignClassMap: Record<string, string> = {
    start: 'align-start',
    center: 'align-center',
    end: 'align-end',
    stretch: 'align-stretch',
  };
  const justifyClassMap: Record<string, string> = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
  };

  const alignClass = alignClassMap[align] || 'align-stretch';
  const justifyClass = justifyClassMap[justify] || 'justify-start';

  return (
    <div
      className={`eru-grid make-grid ${colsClass} ${alignClass} ${justifyClass} ${className}`}
      style={{
        gap,
        ...(rowGap ? { rowGap } : {}),
        ...(columnGap ? { columnGap } : {}),
        ...(Object.keys(style).length > 0 ? style : {}),
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
