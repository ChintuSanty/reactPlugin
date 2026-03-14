import React, { useState } from 'react';
import { AlertProps, AlertType } from './types';

const alertConfig: Record<AlertType, { styleClass: string; icon: string; iconBg: string }> = {
  success: { styleClass: 'style-success', icon: '✓', iconBg: '#22c55e' },
  warning: { styleClass: 'style-warning', icon: '⚠', iconBg: '#f59e0b' },
  error: { styleClass: 'style-danger', icon: '✕', iconBg: '#ef4444' },
  info: { styleClass: '', icon: 'ℹ', iconBg: '#3b82f6' },
};

const Alert: React.FC<AlertProps> = ({
  message,
  title,
  type = 'info',
  dismissible = false,
  icon = true,
  onDismiss,
  borderRadius,
  className = '',
  style = {},
}) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const config = alertConfig[type];

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  const iconEl = () => {
    if (icon === false) return null;
    if (icon === true) {
      return (
        <span
          className="make-inline-flex align-center justify-center make-circle text-bold color-white"
          style={{
            width: '20px',
            height: '20px',
            background: config.iconBg,
            fontSize: '0.7rem',
            flexShrink: 0,
          }}
        >
          {config.icon}
        </span>
      );
    }
    return <span style={{ flexShrink: 0 }}>{icon}</span>;
  };

  const alertClass = `make-alert ${config.styleClass} eru-alert eru-alert--${type} ${className}`.trim();

  return (
    <div
      className={alertClass}
      role="alert"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        padding: '1rem 1.25rem',
        ...(borderRadius ? { borderRadius } : {}),
        ...style,
      }}
    >
      {iconEl()}
      <div style={{ flex: 1 }}>
        {title && (
          <div className="text-bold set-text-15 add-margin-bottom-1">{title}</div>
        )}
        <div className="set-text-14 line-height-normal">{message}</div>
      </div>
      {dismissible && (
        <button
          onClick={handleDismiss}
          aria-label="Dismiss alert"
          className="border-none cursor-pointer background-transparent set-text-20"
          style={{ padding: '0', lineHeight: 1, opacity: 0.7, flexShrink: 0 }}
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
