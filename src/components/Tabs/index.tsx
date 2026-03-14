import React, { useState } from 'react';
import { TabsProps } from './types';
import { generateId } from '../../utils/helpers';

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTab,
  orientation = 'horizontal',
  tabStyle = 'default',
  activeColor = '#4A90E2',
  tabBarStyle = {},
  contentStyle = {},
  className = '',
  style = {},
  onChange,
}) => {
  const tabsWithIds = tabs.map((tab, i) => ({
    ...tab,
    id: tab.id || generateId(`tab-${i}`),
  }));

  const [activeTab, setActiveTab] = useState<string>(
    defaultTab || tabsWithIds[0]?.id || ''
  );

  const handleTabClick = (id: string, disabled?: boolean) => {
    if (disabled) return;
    setActiveTab(id);
    onChange?.(id);
  };

  const getTabButtonClass = (tabId: string, disabled?: boolean): string => {
    const isActive = activeTab === tabId;
    const base = `make-flex align-center gap-1 cursor-pointer border-none transition text-nowrap ${disabled ? 'cursor-not-allowed opacity-50' : ''}`;

    switch (tabStyle) {
      case 'pills':
        return `${base} add-padding-2 add-padding-x-4 make-pill ${isActive ? 'style-primary' : 'background-transparent color-gray-600'}`;
      case 'underline':
        return `${base} add-padding-2 add-padding-x-4 background-transparent ${isActive ? '' : 'color-gray-600'}`;
      case 'boxed':
        return `${base} add-padding-2 add-padding-x-4 ${isActive ? 'background-white' : 'background-gray-100 color-gray-600'}`;
      default:
        return `${base} add-padding-2 add-padding-x-4 round-corners-2 ${isActive ? 'style-primary' : 'background-gray-100 color-gray-600'}`;
    }
  };

  const getTabButtonStyle = (tabId: string): React.CSSProperties => {
    const isActive = activeTab === tabId;
    const base: React.CSSProperties = {
      fontFamily: 'inherit',
      fontSize: '0.95rem',
      fontWeight: isActive ? 600 : 400,
      outline: 'none',
      whiteSpace: 'nowrap',
    };
    if (tabStyle === 'pills' && isActive) {
      return { ...base, backgroundColor: activeColor, color: '#fff' };
    }
    if (tabStyle === 'underline') {
      return {
        ...base,
        color: isActive ? activeColor : undefined,
        borderBottom: isActive ? `2px solid ${activeColor}` : '2px solid transparent',
        borderRadius: 0,
        paddingBottom: '0.75rem',
        background: 'transparent',
      };
    }
    if (tabStyle === 'boxed') {
      return {
        ...base,
        borderColor: isActive ? activeColor : '#e5e7eb',
        border: '1px solid',
        borderRadius: '6px 6px 0 0',
        borderBottom: isActive ? '1px solid #fff' : '1px solid #e5e7eb',
        marginBottom: isActive ? '-1px' : '0',
        color: isActive ? activeColor : undefined,
      };
    }
    if (isActive) {
      return { ...base, backgroundColor: activeColor, color: '#fff' };
    }
    return base;
  };

  const isVertical = orientation === 'vertical';

  return (
    <div
      className={`eru-tabs make-flex ${isVertical ? 'flex-row gap-4' : 'flex-column'} ${className}`}
      style={Object.keys(style).length > 0 ? style : undefined}
    >
      <div
        className={`make-flex ${isVertical ? 'flex-column gap-1' : 'flex-row gap-1'} ${!isVertical && tabStyle !== 'pills' ? 'add-border-bottom-1 border-solid border-color-gray-200' : ''} ${isVertical && tabStyle !== 'pills' ? 'add-border-right-1 border-solid border-color-gray-200' : ''}`}
        style={Object.keys(tabBarStyle).length > 0 ? tabBarStyle : undefined}
      >
        {tabsWithIds.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id!, tab.disabled)}
            className={getTabButtonClass(tab.id!, tab.disabled)}
            style={getTabButtonStyle(tab.id!)}
            disabled={tab.disabled}
          >
            {tab.icon && tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className={`add-padding-4 ${tabStyle === 'boxed' ? 'add-border-1 border-solid border-color-gray-200 round-corners-2' : ''}`}
        style={{ flex: 1, ...(Object.keys(contentStyle).length > 0 ? contentStyle : {}) }}
      >
        {tabsWithIds.find((t) => t.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
