import React, { useEffect, useCallback } from 'react';
import { ModalProps, ModalSize } from './types';

const sizeMap: Record<ModalSize, string> = {
  sm: '400px',
  md: '560px',
  lg: '720px',
  xl: '960px',
  full: '100%',
};

const animationClassMap: Record<string, string> = {
  fade: 'animate-fade-in',
  slide: 'animate-slide-up',
  zoom: 'animate-zoom-in',
  none: '',
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  animation = 'zoom',
  closeOnBackdrop = true,
  showCloseButton = true,
  footer,
  borderRadius = '12px',
  className = '',
  style = {},
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen) return null;

  const animClass = animationClassMap[animation] || 'animate-zoom-in';

  return (
    <div
      onClick={closeOnBackdrop ? onClose : undefined}
      className="make-modal position-fixed pin-inset-0 make-flex align-center justify-center add-padding-4 animate-fade-in"
      style={{ backgroundColor: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(2px)', zIndex: 9000 }}
    >
      <div
        className={`modal-content eru-modal make-flex flex-column overflow-hidden background-white add-shadow-2xl ${animClass} ${className}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          borderRadius: size === 'full' ? '0' : borderRadius,
          width: '100%',
          maxWidth: sizeMap[size],
          maxHeight: size === 'full' ? '100vh' : '90vh',
          ...style,
        }}
      >
        {(title || showCloseButton) && (
          <div className="modal-header make-flex align-center justify-between add-padding-5 add-padding-x-6 add-border-bottom-1 border-solid border-color-gray-200" style={{ flexShrink: 0 }}>
            {title && (
              <h3 className="text-bold set-text-18 color-gray-900" style={{ margin: 0 }}>
                {title}
              </h3>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="border-none cursor-pointer background-transparent set-text-24 color-gray-400 make-flex align-center justify-center round-corners-1"
                style={{ lineHeight: 1, padding: '0.25rem', marginLeft: 'auto' }}
              >
                &times;
              </button>
            )}
          </div>
        )}
        <div className="modal-body add-padding-6 overflow-auto" style={{ flex: 1 }}>
          {children}
        </div>
        {footer && (
          <div
            className="modal-footer make-flex justify-end gap-3 add-padding-4 add-padding-x-6 add-border-top-1 border-solid border-color-gray-200 background-gray-50"
            style={{ flexShrink: 0 }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
