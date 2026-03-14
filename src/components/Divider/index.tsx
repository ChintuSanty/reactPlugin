import React from 'react';
import { DividerProps } from './types';

const Divider: React.FC<DividerProps> = ({
  dividerStyle = 'solid',
  color = '#e5e7eb',
  width = '100%',
  thickness = '1px',
  text,
  textAlign = 'center',
  textColor = '#888',
  textBackground = '#fff',
  textPadding = '0 1rem',
  margin = '1.5rem 0',
  className = '',
  style = {},
}) => {
  const borderStyleClass = dividerStyle === 'dashed' ? 'border-dashed' : dividerStyle === 'dotted' ? 'border-dotted' : 'border-solid';

  const lineStyle: React.CSSProperties = {
    flex: 1,
    border: 'none',
    borderTop: `${thickness} ${dividerStyle} ${color}`,
    margin: 0,
  };

  if (text) {
    return (
      <div
        className={`eru-divider make-flex align-center ${className}`}
        style={{ width, margin, ...style }}
      >
        {textAlign !== 'left' && <hr style={lineStyle} />}
        <span
          className={`set-text-14 text-medium text-nowrap ${borderStyleClass}`}
          style={{
            color: textColor,
            backgroundColor: textBackground,
            padding: textPadding,
            flexShrink: 0,
          }}
        >
          {text}
        </span>
        {textAlign !== 'right' && <hr style={lineStyle} />}
      </div>
    );
  }

  return (
    <hr
      className={`eru-divider ${borderStyleClass} ${className}`}
      style={{
        border: 'none',
        borderTop: `${thickness} ${dividerStyle} ${color}`,
        width,
        margin,
        ...style,
      }}
    />
  );
};

export default Divider;
