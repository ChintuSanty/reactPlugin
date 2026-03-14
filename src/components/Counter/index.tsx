import React from 'react';
import { CounterProps } from './types';
import { useCounter } from '../../hooks/useCounter';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { formatNumber } from '../../utils/helpers';

const Counter: React.FC<CounterProps> = ({
  start = 0,
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  separator = ',',
  decimals = 0,
  fontSize,
  color,
  fontWeight = 700,
  label,
  labelColor,
  labelFontSize,
  animateOnView = true,
  className = '',
  style = {},
}) => {
  const [ref, isInView] = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { count } = useCounter({
    start,
    end,
    duration,
    startOnMount: !animateOnView || isInView,
  });

  const displayValue = decimals > 0
    ? count.toFixed(decimals)
    : formatNumber(count, separator);

  const valueDynamicStyle: React.CSSProperties = {
    ...(color ? { color } : {}),
    ...(fontSize ? { fontSize } : {}),
    ...(fontWeight !== 700 ? { fontWeight } : {}),
  };

  const labelDynamicStyle: React.CSSProperties = {
    ...(labelColor ? { color: labelColor } : {}),
    ...(labelFontSize ? { fontSize: labelFontSize } : {}),
  };

  return (
    <div
      ref={ref}
      className={`eru-counter make-flex flex-column align-center text-center ${className}`}
      style={Object.keys(style).length > 0 ? style : undefined}
    >
      <span
        className="text-bold line-height-tight"
        style={{ fontVariantNumeric: 'tabular-nums', fontSize: fontSize || '3rem', ...valueDynamicStyle }}
      >
        {prefix}
        {displayValue}
        {suffix}
      </span>
      {label && (
        <span
          className="add-margin-top-2 text-medium color-gray-500"
          style={Object.keys(labelDynamicStyle).length > 0 ? labelDynamicStyle : undefined}
        >
          {label}
        </span>
      )}
    </div>
  );
};

export default Counter;
