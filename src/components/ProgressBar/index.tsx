import React from 'react';
import { ProgressBarProps } from './types';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value,
  max = 100,
  color = '#4A90E2',
  trackColor = '#e5e7eb',
  height = '12px',
  showValue = true,
  valueFormat = 'percent',
  animate = true,
  animateOnView = true,
  borderRadius = '9999px',
  striped = false,
  className = '',
  style = {},
  labelStyle = {},
}) => {
  const [ref, isInView] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const shouldAnimate = animate && (!animateOnView || isInView);

  const getValueLabel = (): string => {
    switch (valueFormat) {
      case 'percent': return `${Math.round(percentage)}%`;
      case 'value': return `${value}/${max}`;
      case 'both': return `${value}/${max} (${Math.round(percentage)}%)`;
      default: return `${Math.round(percentage)}%`;
    }
  };

  const stripedBg = striped
    ? `repeating-linear-gradient(45deg, ${color}, ${color} 10px, ${color}cc 10px, ${color}cc 20px)`
    : color;

  return (
    <div
      ref={ref}
      className={`eru-progress-bar width-full ${className}`}
      style={Object.keys(style).length > 0 ? style : undefined}
    >
      {(label || showValue) && (
        <div
          className="make-flex justify-between align-center add-margin-bottom-1"
          style={Object.keys(labelStyle).length > 0 ? labelStyle : undefined}
        >
          {label && (
            <span className="set-text-14 text-medium color-gray-700">{label}</span>
          )}
          {showValue && (
            <span className="set-text-13 text-semibold color-gray-500">{getValueLabel()}</span>
          )}
        </div>
      )}
      <div
        className="width-full overflow-hidden make-progress"
        style={{ height, backgroundColor: trackColor, borderRadius }}
      >
        <div
          className="progress-bar transition"
          style={{
            width: shouldAnimate ? `${percentage}%` : '0%',
            height: '100%',
            background: stripedBg,
            borderRadius,
            transition: shouldAnimate ? 'width 1s ease' : 'none',
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
