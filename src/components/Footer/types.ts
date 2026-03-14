import React from 'react';

export interface FooterLink {
  label: string;
  href: string;
  target?: '_blank' | '_self';
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export interface FooterProps {
  columns?: FooterColumn[];
  copyright?: string;
  socialLinks?: FooterSocialLink[];
  logo?: React.ReactNode;
  logoText?: string;
  description?: string;
  colorScheme?: 'light' | 'dark';
  className?: string;
  style?: React.CSSProperties;
}
