import React from 'react';
import { IconListProps } from './types';

const IconList: React.FC<IconListProps> = ({
  items,
  layout = 'vertical',
  iconColor = '#4A90E2',
  iconSize = '1rem',
  textColor = '#444',
  gap = '0.75rem',
  divider = false,
  dividerColor = '#e5e7eb',
  className = '',
  style = {},
}) => {
  const isHorizontal = layout === 'horizontal';

  return (
    <ul
      className={`eru-icon-list make-flex ${isHorizontal ? 'flex-row flex-wrap' : 'flex-column'} ${className}`}
      style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        gap: isHorizontal ? gap : '0',
        ...(Object.keys(style).length > 0 ? style : {}),
      }}
    >
      {items.map((item, index) => (
        <li
          key={index}
          className="make-flex align-center gap-2"
          style={{
            padding: !isHorizontal ? `${gap} 0` : '0',
            borderBottom: divider && !isHorizontal && index < items.length - 1
              ? `1px solid ${dividerColor}`
              : 'none',
          }}
        >
          <span
            className="set-text-16"
            style={{ color: item.color || iconColor, flexShrink: 0, lineHeight: 1, fontSize: iconSize }}
          >
            {item.icon}
          </span>
          {item.link ? (
            <a
              href={item.link}
              target={item.linkTarget || '_self'}
              rel={item.linkTarget === '_blank' ? 'noopener noreferrer' : undefined}
              className="set-text-14"
              style={{ color: textColor, textDecoration: 'none' }}
            >
              {item.text}
            </a>
          ) : (
            <span className="set-text-14" style={{ color: textColor }}>{item.text}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default IconList;
