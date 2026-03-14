import React from 'react';

export type SocialPlatform =
  | 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube'
  | 'github' | 'pinterest' | 'tiktok' | 'snapchat' | 'reddit'
  | 'whatsapp' | 'telegram' | 'discord' | 'dribbble' | 'behance';

export type SocialIconShape = 'circle' | 'square' | 'rounded' | 'none';

export interface SocialIconItem {
  platform: SocialPlatform;
  url: string;
  color?: string;
  label?: string;
}

export interface SocialIconsProps {
  platforms: SocialIconItem[];
  size?: string;
  shape?: SocialIconShape;
  iconSize?: string;
  gap?: string;
  hoverEffect?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
