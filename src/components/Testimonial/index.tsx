import React from 'react';
import { TestimonialProps } from './types';

const Stars: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="make-flex gap-1 add-margin-bottom-3">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className="set-text-18"
        style={{ color: star <= rating ? '#FAAD14' : '#d1d5db' }}
      >
        ★
      </span>
    ))}
  </div>
);

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  name,
  position,
  company,
  avatar,
  layout = 'card',
  starRating,
  quoteColor = '#444',
  nameColor = '#222',
  positionColor = '#888',
  backgroundColor = '#fff',
  borderRadius = '12px',
  padding = '1.75rem',
  boxShadow,
  className = '',
  style = {},
}) => {
  const avatarEl = avatar ? (
    <img
      src={avatar}
      alt={name}
      className="make-avatar add-border-3 border-solid border-color-gray-200"
      style={{ width: '56px', height: '56px', objectFit: 'cover', flexShrink: 0 }}
    />
  ) : (
    <div
      className="make-flex align-center justify-center make-circle background-blue-500 color-white text-bold"
      style={{ width: '56px', height: '56px', fontSize: '1.4rem', flexShrink: 0 }}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );

  const authorInfo = (
    <div className="make-flex align-center gap-3">
      {avatarEl}
      <div>
        <div className="text-bold set-text-16" style={{ color: nameColor }}>{name}</div>
        {(position || company) && (
          <div className="set-text-13" style={{ color: positionColor }}>
            {position}{position && company ? ' · ' : ''}{company}
          </div>
        )}
      </div>
    </div>
  );

  const quoteText = (
    <p
      className="text-italic line-height-relaxed set-text-15"
      style={{ margin: 0, color: quoteColor }}
    >
      {layout === 'quote' ? `"${quote}"` : quote}
    </p>
  );

  const containerDynamicStyle: React.CSSProperties = {
    backgroundColor,
    borderRadius,
    padding,
    boxShadow: layout === 'minimal' ? 'none' : (boxShadow || '0 4px 20px rgba(0,0,0,0.08)'),
    ...(layout === 'bubble' ? { border: '2px solid #e5e7eb' } : {}),
    ...style,
  };

  if (layout === 'quote') {
    return (
      <div
        className={`eru-testimonial eru-testimonial--${layout} position-relative add-border-left-4 border-solid border-color-blue-400 ${className}`}
        style={{ ...containerDynamicStyle, background: 'transparent', boxShadow: 'none', paddingLeft: '1.5rem' }}
      >
        {starRating !== undefined && <Stars rating={starRating} />}
        <span className="color-blue-400 make-block add-margin-bottom-4" style={{ fontSize: '4rem', lineHeight: 0.5 }}>"</span>
        {quoteText}
        <div className="add-margin-top-4">{authorInfo}</div>
      </div>
    );
  }

  return (
    <div
      className={`eru-testimonial eru-testimonial--${layout} position-relative ${className}`}
      style={containerDynamicStyle}
    >
      {starRating !== undefined && <Stars rating={starRating} />}
      {quoteText}
      <div className="add-margin-top-4">{authorInfo}</div>
    </div>
  );
};

export default Testimonial;
