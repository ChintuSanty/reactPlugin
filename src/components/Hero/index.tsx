import React from 'react';
import { HeroProps } from './types';

const variantClassMap: Record<string, string> = {
  primary: 'style-primary',
  secondary: 'style-secondary',
  outline: 'style-secondary',
  ghost: 'style-ghost',
};

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundColor = '#1a1a2e',
  overlayColor = '#000000',
  overlayOpacity = 0.4,
  ctaButtons = [],
  align = 'center',
  minHeight = '80vh',
  titleColor = '#ffffff',
  subtitleColor = '#a0c4ff',
  descriptionColor = '#e0e0e0',
  padding = '4rem 2rem',
  children,
  className = '',
  style = {},
}) => {
  const alignClass = align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start';
  const textAlignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';

  return (
    <section
      className={`eru-hero position-relative make-flex align-center overflow-hidden ${alignClass} ${className}`}
      style={{
        minHeight,
        backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding,
        ...style,
      }}
    >
      {backgroundImage && (
        <div
          className="position-absolute pin-inset-0"
          style={{ backgroundColor: overlayColor, opacity: overlayOpacity, zIndex: 1 }}
        />
      )}

      <div
        className={`position-relative width-full ${textAlignClass}`}
        style={{ zIndex: 2, maxWidth: '900px' }}
      >
        {subtitle && (
          <p
            className="text-semibold text-uppercase letter-space-wide add-margin-bottom-3"
            style={{ color: subtitleColor, fontSize: '0.9rem', margin: '0 0 0.75rem 0' }}
          >
            {subtitle}
          </p>
        )}
        <h1
          className="text-bold line-height-tight add-margin-bottom-4"
          style={{
            color: titleColor,
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            margin: '0 0 1rem 0',
          }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="line-height-relaxed add-margin-bottom-8"
            style={{
              color: descriptionColor,
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              margin: '0 0 2rem 0',
              maxWidth: '700px',
              marginLeft: align === 'center' ? 'auto' : undefined,
              marginRight: align === 'center' ? 'auto' : undefined,
            }}
          >
            {description}
          </p>
        )}
        {ctaButtons.length > 0 && (
          <div
            className={`make-flex gap-4 flex-wrap ${align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start'}`}
          >
            {ctaButtons.map((btn, i) => {
              const btnVariantClass = variantClassMap[btn.variant || 'primary'] || 'style-primary';
              return (
                <a
                  key={i}
                  href={btn.href || '#'}
                  onClick={(e) => {
                    if (btn.onClick) { e.preventDefault(); btn.onClick(); }
                  }}
                  className={`make-button ${btnVariantClass} size-large shape-rounded transition`}
                >
                  {btn.text}
                </a>
              );
            })}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Hero;
