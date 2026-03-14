import React from 'react';

export interface TabItem {
  id?: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export type TabsStyle = 'default' | 'pills' | 'underline' | 'boxed';
export type TabsOrientation = 'horizontal' | 'vertical';

export interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  orientation?: TabsOrientation;
  tabStyle?: TabsStyle;
  activeColor?: string;
  tabBarStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (tabId: string) => void;
}
