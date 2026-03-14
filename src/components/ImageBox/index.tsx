import React from 'react';
import { ImageBoxProps } from './types';

const ImageBox: React.FC<ImageBoxProps> = ({
  image,
  imageAlt = '',
  imageSize = '100%',
  imageBorderRadius = '8px',
  title,
  description,
  layout = 'top',
  titleColor = '#222',
  descriptionColor = '#666',
  align = 'left',
  gap = '1rem',
  link,
  linkTarget = '_self',
  className = '',
  style = {},
}) => {
  const isHorizontal = layout === 'left' || layout === 'right';

  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';

  const imageEl = (
    <img
      src={image}
      alt={imageAlt}
      className="object-cover make-block"
      style={{
        width: isHorizontal ? imageSize : '100%',
        maxWidth: isHorizontal ? imageSize : '100%',
        height: 'auto',
        borderRadius: imageBorderRadius,
        flexShrink: 0,
      }}
    />
  );

  const textEl = (
    <div style={{ flex: 1 }}>
      {title && (
        <h4
          className={`set-text-18 text-bold ${alignClass}`}
          style={{ margin: '0 0 0.5rem 0', color: titleColor }}
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

  const flexDirectionClass =
    layout === 'top' ? 'flex-column' :
    layout === 'bottom' ? 'flex-column' :
    'flex-row';

  const flexAlignClass = isHorizontal ? 'align-start' : align === 'center' ? 'align-center' : align === 'right' ? 'align-end' : 'align-start';

  const content = (
    <div
      className={`eru-image-box make-flex ${flexDirectionClass} ${flexAlignClass} ${className}`}
      style={{
        gap,
        flexFlow: layout === 'right' ? 'row-reverse' : layout === 'bottom' ? 'column-reverse' : undefined,
        ...(Object.keys(style).length > 0 ? style : {}),
      }}
    >
      {imageEl}
      {textEl}
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target={linkTarget}
        className="make-block"
        style={{ textDecoration: 'none' }}
        rel={linkTarget === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return content;
};

export default ImageBox;
