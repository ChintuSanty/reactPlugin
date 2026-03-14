import React, { useState, useEffect, useCallback } from 'react';
import { ToastProps, ToastContainerProps, ToastPosition } from './types';

const toastConfig = {
  success: { styleClass: 'style-success', icon: '✓', iconBg: '#22c55e', color: '#166534' },
  warning: { styleClass: 'style-warning', icon: '⚠', iconBg: '#f59e0b', color: '#92400e' },
  error: { styleClass: 'style-danger', icon: '✕', iconBg: '#ef4444', color: '#991b1b' },
  info: { styleClass: '', icon: 'ℹ', iconBg: '#3b82f6', color: '#1e40af' },
};

const getPositionStyles = (position: ToastPosition): React.CSSProperties => {
  const base: React.CSSProperties = {
    position: 'fixed',
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    maxWidth: '380px',
    width: 'calc(100% - 2rem)',
  };

  switch (position) {
    case 'top-right': return { ...base, top: '1rem', right: '1rem' };
    case 'top-left': return { ...base, top: '1rem', left: '1rem' };
    case 'top-center': return { ...base, top: '1rem', left: '50%', transform: 'translateX(-50%)' };
    case 'bottom-right': return { ...base, bottom: '1rem', right: '1rem' };
    case 'bottom-left': return { ...base, bottom: '1rem', left: '1rem' };
    case 'bottom-center': return { ...base, bottom: '1rem', left: '50%', transform: 'translateX(-50%)' };
    default: return { ...base, top: '1rem', right: '1rem' };
  }
};

export const ToastContainer: React.FC<ToastContainerProps> = ({
  position = 'top-right',
  children,
}) => (
  <div style={getPositionStyles(position)}>
    {children}
  </div>
);

const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 3000,
  position = 'top-right',
  title,
  onDismiss,
  isVisible = true,
  className = '',
  style = {},
}) => {
  const [visible, setVisible] = useState(isVisible);
  const [exiting, setExiting] = useState(false);

  const dismiss = useCallback(() => {
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, 300);
  }, [onDismiss]);

  useEffect(() => {
    setVisible(isVisible);
    setExiting(false);
  }, [isVisible]);

  useEffect(() => {
    if (visible && duration > 0) {
      const timer = setTimeout(dismiss, duration);
      return () => clearTimeout(timer);
    }
  }, [visible, duration, dismiss]);

  if (!visible) return null;

  const config = toastConfig[type];

  return (
    <div
      className={`eru-toast eru-toast--${type} make-alert ${config.styleClass} make-flex align-start gap-3 round-corners-2 add-shadow-md ${exiting ? 'animate-fade-out' : 'animate-slide-up'} ${className}`}
      style={{
        padding: '0.875rem 1rem',
        ...style,
      }}
    >
      <span
        className="make-inline-flex align-center justify-center make-circle text-bold color-white"
        style={{
          width: '22px',
          height: '22px',
          backgroundColor: config.iconBg,
          fontSize: '0.7rem',
          flexShrink: 0,
          marginTop: '1px',
        }}
      >
        {config.icon}
      </span>
      <div style={{ flex: 1 }}>
        {title && (
          <div className="text-bold set-text-14 add-margin-bottom-1" style={{ color: config.color }}>
            {title}
          </div>
        )}
        <div className="set-text-13 line-height-normal" style={{ color: config.color }}>
          {message}
        </div>
      </div>
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        className="border-none cursor-pointer background-transparent set-text-18"
        style={{ padding: '0', lineHeight: 1, opacity: 0.6, flexShrink: 0, marginTop: '-2px', color: config.color }}
      >
        &times;
      </button>
    </div>
  );
};

export default Toast;
