import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CarouselProps } from './types';

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoplay = false,
  autoplaySpeed = 3000,
  showArrows = true,
  showDots = true,
  slidesToShow = 1,
  infinite = true,
  speed = 300,
  arrowColor = '#4A90E2',
  dotColor = '#4A90E2',
  className = '',
  style = {},
  onChange,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalSlides = items.length;
  const maxIndex = Math.max(0, totalSlides - slidesToShow);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      let newIndex = index;
      if (infinite) {
        newIndex = ((index % totalSlides) + totalSlides) % totalSlides;
        newIndex = Math.min(newIndex, maxIndex);
      } else {
        newIndex = Math.max(0, Math.min(index, maxIndex));
      }
      setIsAnimating(true);
      setCurrentIndex(newIndex);
      onChange?.(newIndex);
      setTimeout(() => setIsAnimating(false), speed);
    },
    [isAnimating, totalSlides, maxIndex, infinite, speed, onChange]
  );

  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);
  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(next, autoplaySpeed);
      return () => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
      };
    }
  }, [autoplay, autoplaySpeed, next]);

  return (
    <div
      className={`eru-carousel position-relative overflow-hidden ${className}`}
      style={Object.keys(style).length > 0 ? style : undefined}
    >
      <div
        className="make-flex transition"
        style={{
          transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
          transition: `transform ${speed}ms ease`,
          width: `${(totalSlides * 100) / slidesToShow}%`,
        }}
      >
        {items.map((item, i) => (
          <div
            key={item.id || i}
            style={{
              width: `${100 / totalSlides}%`,
              flexShrink: 0,
              padding: '0 0.5rem',
              boxSizing: 'border-box',
            }}
          >
            {item.content}
          </div>
        ))}
      </div>

      {showArrows && totalSlides > slidesToShow && (
        <>
          <button
            onClick={prev}
            className="position-absolute make-flex align-center justify-center background-white make-circle cursor-pointer transition add-shadow-sm"
            style={{
              top: '50%',
              left: '8px',
              transform: 'translateY(-50%)',
              zIndex: 10,
              border: `2px solid ${arrowColor}`,
              color: arrowColor,
              width: '40px',
              height: '40px',
              fontSize: '1rem',
              outline: 'none',
            }}
            aria-label="Previous slide"
          >
            &#8249;
          </button>
          <button
            onClick={next}
            className="position-absolute make-flex align-center justify-center background-white make-circle cursor-pointer transition add-shadow-sm"
            style={{
              top: '50%',
              right: '8px',
              transform: 'translateY(-50%)',
              zIndex: 10,
              border: `2px solid ${arrowColor}`,
              color: arrowColor,
              width: '40px',
              height: '40px',
              fontSize: '1rem',
              outline: 'none',
            }}
            aria-label="Next slide"
          >
            &#8250;
          </button>
        </>
      )}

      {showDots && totalSlides > slidesToShow && (
        <div className="make-flex justify-center gap-1 add-margin-top-4">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="border-none cursor-pointer transition make-pill"
              style={{
                width: currentIndex === i ? '24px' : '10px',
                height: '10px',
                background: currentIndex === i ? dotColor : '#ccc',
                padding: 0,
                outline: 'none',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
