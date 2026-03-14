import React from 'react';
import { ButtonProps } from './types';

const sizeClassMap: Record<string, string> = {
  xs: 'size-small',
  sm: 'size-small',
  md: 'size-medium',
  lg: 'size-large',
  xl: 'size-xl',
};

const variantClassMap: Record<string, string> = {
  primary: 'style-primary',
  secondary: 'style-secondary',
  outline: 'style-secondary',
  ghost: 'style-ghost',
  link: 'style-link',
  danger: 'style-danger',
  success: 'style-success',
  warning: 'style-warning',
};

const Button: React.FC<ButtonProps> = ({
  text = 'Click Me',
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  href,
  onClick,
  color,
  backgroundColor,
  borderRadius,
  fullWidth = false,
  disabled = false,
  loading = false,
  target = '_self',
  className = '',
  style = {},
  type = 'button',
}) => {
  const variantClass = variantClassMap[variant] || 'style-primary';
  const sizeClass = sizeClassMap[size] || 'size-medium';
  const widthClass = fullWidth ? 'width-full' : '';
  const shapeClass = borderRadius === '9999px' ? 'shape-pill' : borderRadius ? 'shape-rounded' : '';

  const dynamicStyle: React.CSSProperties = {
    ...(color ? { color } : {}),
    ...(backgroundColor ? { backgroundColor } : {}),
    ...(borderRadius && borderRadius !== '9999px' ? { borderRadius } : {}),
    ...style,
  };

  const content = (
    <>
      {loading && <span className="make-spinner" style={{ width: '1em', height: '1em' }} />}
      {icon && iconPosition === 'left' && !loading && icon}
      {text}
      {icon && iconPosition === 'right' && !loading && icon}
    </>
  );

  const btnClasses = `make-button ${variantClass} ${sizeClass} ${shapeClass} ${widthClass} transition ${className}`.trim();

  if (href && !disabled) {
    return (
      <a
        href={href}
        target={target}
        className={btnClasses}
        style={Object.keys(dynamicStyle).length > 0 ? dynamicStyle : undefined}
        onClick={onClick}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={btnClasses}
      style={Object.keys(dynamicStyle).length > 0 ? dynamicStyle : undefined}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
