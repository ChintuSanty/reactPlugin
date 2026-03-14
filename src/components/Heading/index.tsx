import React from 'react';
import { HeadingProps } from './types';

const Heading: React.FC<HeadingProps> = ({
  text = 'Heading Text',
  level = 2,
  color,
  fontSize,
  fontWeight = '600',
  align = 'left',
  letterSpacing,
  lineHeight,
  fontFamily,
  textTransform,
  textDecoration,
  margin,
  padding,
  className = '',
  style = {},
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  const weightClass = fontWeight === '700' || fontWeight === 'bold' ? 'text-bold' : fontWeight === '600' || fontWeight === 'semibold' ? 'text-semibold' : 'text-medium';

  // Only keep truly dynamic values in style
  const dynamicStyle: React.CSSProperties = {
    ...(color ? { color } : {}),
    ...(fontSize ? { fontSize } : {}),
    ...(letterSpacing ? { letterSpacing } : {}),
    ...(lineHeight ? { lineHeight } : {}),
    ...(fontFamily ? { fontFamily } : {}),
    ...(textTransform ? { textTransform: textTransform as React.CSSProperties['textTransform'] } : {}),
    ...(textDecoration ? { textDecoration } : {}),
    ...(margin ? { margin } : {}),
    ...(padding ? { padding } : {}),
    ...style,
  };

  return (
    <Tag className={`eru-heading ${alignClass} ${weightClass} ${className}`} style={dynamicStyle}>
      {text}
    </Tag>
  );
};

export default Heading;
