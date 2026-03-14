import React, { useState } from 'react';
import { CardProps } from './types';

const shadowClassMap: Record<string, string> = {
  none: 'add-shadow-none',
  sm: 'add-shadow-sm',
  md: 'add-shadow-md',
  lg: 'add-shadow-lg',
  xl: 'add-shadow-xl',
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  imageAlt = '',
  imageHeight = '200px',
  footer,
  children,
  variant = 'default',
  shadow = 'md',
  borderRadius = '12px',
  padding = '1.5rem',
  backgroundColor = '#fff',
  borderColor = '#e5e7eb',
  titleColor = '#1a1a2e',
  descriptionColor = '#666',
  hoverEffect = false,
  link,
  linkTarget = '_self',
  className = '',
  style = {},
}) => {
  const [hovered, setHovered] = useState(false);

  const shadowClass =
    variant === 'elevated' ? 'add-shadow-lg' :
    variant === 'flat' ? 'add-shadow-none' :
    (shadowClassMap[shadow] || 'add-shadow-md');

  const cardDynamicStyle: React.CSSProperties = {
    backgroundColor,
    borderRadius,
    ...(variant === 'outlined' ? { border: `1px solid ${borderColor}` } : {}),
    ...(hoverEffect && hovered ? { transform: 'translateY(-4px)', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' } : {}),
    ...style,
  };

  const content = (
    <div
      className={`eru-card eru-card--${variant} make-card make-flex flex-column overflow-hidden transition ${shadowClass} ${className}`}
      style={cardDynamicStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {image && (
        <div className="overflow-hidden" style={{ flexShrink: 0 }}>
          <img
            src={image}
            alt={imageAlt}
            className="width-full make-block object-cover transition"
            style={{
              height: imageHeight,
              transform: hoverEffect && hovered ? 'scale(1.05)' : 'scale(1)',
            }}
          />
        </div>
      )}
      <div className="card-body" style={{ padding, flex: 1 }}>
        {title && (
          <h3
            className="text-bold set-text-20 line-height-tight add-margin-bottom-2"
            style={{ margin: '0 0 0.5rem 0', color: titleColor }}
          >
            {title}
          </h3>
        )}
        {description && (
          <p
            className="set-text-14 line-height-relaxed"
            style={{ margin: 0, color: descriptionColor }}
          >
            {description}
          </p>
        )}
        {children}
      </div>
      {footer && (
        <div
          className="card-footer background-gray-50"
          style={{ padding: `0.75rem ${padding}`, borderTop: `1px solid ${borderColor}` }}
        >
          {footer}
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target={linkTarget}
        rel={linkTarget === '_blank' ? 'noopener noreferrer' : undefined}
        className="make-block"
        style={{ textDecoration: 'none' }}
      >
        {content}
      </a>
    );
  }

  return content;
};

export default Card;
