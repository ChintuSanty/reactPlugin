import React from 'react';
import { IconBoxProps } from './types';

const IconBox: React.FC<IconBoxProps> = ({
  icon,
  title,
  description,
  layout = 'top',
  iconColor = '#4A90E2',
  iconSize = '2.5rem',
  iconBackground,
  iconBorderRadius = '8px',
  iconPadding,
  titleColor = '#222',
  descriptionColor = '#666',
  align = 'left',
  gap = '1rem',
  className = '',
  style = {},
}) => {
  const isHorizontal = layout === 'left' || layout === 'right';

  const iconDynamicStyle: React.CSSProperties = {
    fontSize: iconSize,
    color: iconColor,
    ...(iconBackground ? { backgroundColor: iconBackground } : {}),
    ...(iconBackground ? { borderRadius: iconBorderRadius } : {}),
    ...(iconBackground ? { padding: iconPadding || '0.75rem' } : {}),
  };

  const iconEl = (
    <div
      className="make-inline-flex align-center justify-center"
      style={{ flexShrink: 0, lineHeight: 1, ...iconDynamicStyle }}
    >
      {icon}
    </div>
  );

  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';

  const textEl = (
    <div style={{ flex: 1 }}>
      {title && (
        <h4
          className={`set-text-18 text-bold add-margin-bottom-1 ${alignClass}`}
          style={{ margin: '0 0 0.4rem 0', color: titleColor }}
        >
          {title}
        </h4>
      )}
      {description && (
        <p
          className={`set-text-14 line-height-relaxed ${alignClass}`}
          style={{ margin: 0, color: descriptionColor }}
        >
          {description}
        </p>
      )}
    </div>
  );

  const flexAlignClass = isHorizontal
    ? 'align-start'
    : align === 'center'
    ? 'align-center'
    : align === 'right'
    ? 'align-end'
    : 'align-start';

  const flexDirectionClass = isHorizontal
    ? layout === 'right'
      ? 'flex-row'
      : 'flex-row'
    : 'flex-column';

  return (
    <div
      className={`eru-icon-box make-flex ${flexDirectionClass} ${flexAlignClass} ${alignClass} ${className}`}
      style={{
        gap,
        flexFlow: layout === 'right' ? 'row-reverse' : undefined,
        ...(Object.keys(style).length > 0 ? style : {}),
      }}
    >
      {iconEl}
      {textEl}
    </div>
  );
};

export default IconBox;
