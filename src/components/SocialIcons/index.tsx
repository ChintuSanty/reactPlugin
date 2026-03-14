import React from 'react';
import { SocialIconsProps, SocialPlatform } from './types';

const platformConfig: Record<SocialPlatform, { color: string; label: string; icon: string }> = {
  facebook: { color: '#1877F2', label: 'Facebook', icon: 'f' },
  twitter: { color: '#1DA1F2', label: 'Twitter', icon: '𝕏' },
  instagram: { color: '#E4405F', label: 'Instagram', icon: '📷' },
  linkedin: { color: '#0A66C2', label: 'LinkedIn', icon: 'in' },
  youtube: { color: '#FF0000', label: 'YouTube', icon: '▶' },
  github: { color: '#181717', label: 'GitHub', icon: '⌥' },
  pinterest: { color: '#E60023', label: 'Pinterest', icon: 'P' },
  tiktok: { color: '#000000', label: 'TikTok', icon: '♪' },
  snapchat: { color: '#FFFC00', label: 'Snapchat', icon: '👻' },
  reddit: { color: '#FF4500', label: 'Reddit', icon: 'R' },
  whatsapp: { color: '#25D366', label: 'WhatsApp', icon: '💬' },
  telegram: { color: '#26A5E4', label: 'Telegram', icon: '✈' },
  discord: { color: '#5865F2', label: 'Discord', icon: '🎮' },
  dribbble: { color: '#EA4C89', label: 'Dribbble', icon: '⚽' },
  behance: { color: '#1769FF', label: 'Behance', icon: 'Be' },
};

const shapeClassMap: Record<string, string> = {
  circle: 'make-circle',
  square: 'round-corners-1',
  rounded: 'round-corners-3',
  none: '',
};

const SocialIcons: React.FC<SocialIconsProps> = ({
  platforms,
  size = '40px',
  shape = 'circle',
  iconSize = '1rem',
  gap = '0.75rem',
  hoverEffect = true,
  className = '',
  style = {},
}) => {
  const shapeClass = shapeClassMap[shape] || 'make-circle';

  return (
    <div
      className={`eru-social-icons make-flex flex-wrap ${className}`}
      style={{ gap, ...(Object.keys(style).length > 0 ? style : {}) }}
    >
      {platforms.map((item, index) => {
        const config = platformConfig[item.platform];
        const color = item.color || config?.color || '#555';

        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label || config?.label || item.platform}
            className={`make-inline-flex align-center justify-center text-bold transition ${shapeClass} ${hoverEffect ? 'on-hover:add-shadow-md' : ''}`}
            style={{
              width: size,
              height: size,
              backgroundColor: `${color}22`,
              color,
              fontSize: iconSize,
              textDecoration: 'none',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              if (hoverEffect) {
                (e.currentTarget as HTMLElement).style.backgroundColor = color;
                (e.currentTarget as HTMLElement).style.color = '#fff';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (hoverEffect) {
                (e.currentTarget as HTMLElement).style.backgroundColor = `${color}22`;
                (e.currentTarget as HTMLElement).style.color = color;
                (e.currentTarget as HTMLElement).style.transform = 'none';
              }
            }}
          >
            {config?.icon || item.platform.charAt(0).toUpperCase()}
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
