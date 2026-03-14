import React, { useState } from 'react';
import { GalleryProps } from './types';

const Gallery: React.FC<GalleryProps> = ({
  images,
  columns = 3,
  gap = '1rem',
  lightbox = true,
  hoverEffect = 'zoom',
  borderRadius = '8px',
  aspectRatio = '1 / 1',
  className = '',
  style = {},
}) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    if (lightbox) setLightboxIndex(index);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };

  const getImgTransform = (index: number): React.CSSProperties => {
    const isHovered = hoveredIndex === index;
    if (hoverEffect === 'zoom') return { transform: isHovered ? 'scale(1.08)' : 'scale(1)' };
    if (hoverEffect === 'grayscale') return { filter: isHovered ? 'none' : 'grayscale(50%)' };
    return {};
  };

  const colsClass = columns <= 12 ? `grid-cols-${columns}` : 'grid-cols-3';

  return (
    <>
      <div
        className={`eru-gallery make-grid ${colsClass} ${className}`}
        style={{ gap, ...(Object.keys(style).length > 0 ? style : {}) }}
      >
        {images.map((image, index) => (
          <div
            key={image.id || index}
            onClick={() => openLightbox(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="overflow-hidden position-relative"
            style={{
              cursor: lightbox ? 'pointer' : 'default',
              borderRadius,
              aspectRatio,
            }}
          >
            <img
              src={image.thumbnail || image.src}
              alt={image.alt || ''}
              className="width-full height-full object-cover make-block transition"
              style={getImgTransform(index)}
            />
            {hoverEffect === 'overlay' && hoveredIndex === index && (
              <div className="position-absolute pin-inset-0 make-flex align-center justify-center color-white transition"
                style={{ background: 'rgba(0,0,0,0.45)', fontSize: '2rem' }}>
                🔍
              </div>
            )}
            {image.caption && hoveredIndex === index && (
              <div
                className="position-absolute color-white set-text-12 transition"
                style={{
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  padding: '0.5rem 0.75rem',
                }}
              >
                {image.caption}
              </div>
            )}
          </div>
        ))}
      </div>

      {lightbox && lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="position-fixed pin-inset-0 make-flex align-center justify-center"
          style={{ background: 'rgba(0,0,0,0.9)', zIndex: 9999 }}
        >
          <button
            onClick={closeLightbox}
            className="position-absolute border-none color-white cursor-pointer background-transparent"
            style={{ top: '1rem', right: '1.5rem', fontSize: '2.5rem', lineHeight: 1, zIndex: 10000 }}
          >
            &times;
          </button>
          <button
            onClick={goPrev}
            className="position-absolute border-none color-white cursor-pointer make-flex align-center justify-center make-circle"
            style={{ left: '1rem', background: 'rgba(255,255,255,0.2)', fontSize: '2rem', width: '48px', height: '48px' }}
          >
            &#8249;
          </button>
          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt || ''}
            onClick={(e) => e.stopPropagation()}
            className="object-contain add-shadow-2xl"
            style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: '4px' }}
          />
          <button
            onClick={goNext}
            className="position-absolute border-none color-white cursor-pointer make-flex align-center justify-center make-circle"
            style={{ right: '1rem', background: 'rgba(255,255,255,0.2)', fontSize: '2rem', width: '48px', height: '48px' }}
          >
            &#8250;
          </button>
          {images[lightboxIndex].caption && (
            <div
              className="position-absolute text-center color-gray-300 set-text-14"
              style={{ bottom: '1.5rem' }}
            >
              {images[lightboxIndex].caption}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Gallery;
