import React, { useState } from 'react';
import { ImageWidgetProps } from './types';

const ImageWidget: React.FC<ImageWidgetProps> = ({
  src,
  alt = '',
  width,
  height,
  objectFit = 'cover',
  borderRadius,
  caption,
  link,
  linkTarget = '_self',
  hoverEffect = 'none',
  boxShadow,
  className = '',
  style = {},
  captionStyle = {},
}) => {
  const [hovered, setHovered] = useState(false);

  const getHoverFilter = (): string => {
    if (!hovered || hoverEffect === 'none') return '';
    switch (hoverEffect) {
      case 'grayscale': return 'grayscale(100%)';
      case 'blur': return 'blur(4px)';
      case 'brightness': return 'brightness(1.2)';
      case 'opacity': return 'opacity(0.7)';
      default: return '';
    }
  };

  const imgDynamicStyle: React.CSSProperties = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    ...(boxShadow ? { boxShadow } : {}),
    ...(getHoverFilter() ? { filter: getHoverFilter() } : {}),
    ...(hovered && hoverEffect === 'zoom' ? { transform: 'scale(1.05)' } : {}),
    ...style,
  };

  const containerDynamicStyle: React.CSSProperties = {
    ...(borderRadius ? { borderRadius } : {}),
  };

  const image = (
    <figure style={{ margin: 0 }}>
      <div
        className="make-inline-block overflow-hidden position-relative transition"
        style={Object.keys(containerDynamicStyle).length > 0 ? containerDynamicStyle : undefined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={src}
          alt={alt}
          className={`make-block object-cover transition ${objectFit === 'contain' ? 'object-contain' : ''}`}
          style={Object.keys(imgDynamicStyle).length > 0 ? imgDynamicStyle : undefined}
        />
      </div>
      {caption && (
        <figcaption
          className="text-center set-text-14 color-gray-500 add-margin-top-2 line-height-normal"
          style={Object.keys(captionStyle).length > 0 ? captionStyle : undefined}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );

  if (link) {
    return (
      <a
        href={link}
        target={linkTarget}
        rel={linkTarget === '_blank' ? 'noopener noreferrer' : undefined}
        className={`eru-image-widget make-inline-block ${className}`}
      >
        {image}
      </a>
    );
  }

  return (
    <div className={`eru-image-widget ${className}`}>
      {image}
    </div>
  );
};

export default ImageWidget;
