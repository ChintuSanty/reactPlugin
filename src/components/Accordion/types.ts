import React from 'react';

export interface AccordionItem {
  id?: string;
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  icon?: 'plus' | 'arrow' | 'chevron' | React.ReactNode;
  iconPosition?: 'left' | 'right';
  bordered?: boolean;
  separated?: boolean;
  activeColor?: string;
  headerStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (openIds: string[]) => void;
}
