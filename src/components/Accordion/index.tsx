import React, { useState, useRef, useEffect } from 'react';
import { AccordionProps, AccordionItem } from './types';
import { generateId } from '../../utils/helpers';

const AccordionItemComponent: React.FC<{
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  icon: AccordionProps['icon'];
  iconPosition: AccordionProps['iconPosition'];
  activeColor: string;
  bordered: boolean;
  headerStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}> = ({
  item,
  isOpen,
  onToggle,
  icon,
  iconPosition,
  activeColor,
  bordered,
  headerStyle = {},
  contentStyle = {},
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>(isOpen ? 'auto' : '0px');

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  const renderIcon = () => {
    if (icon === 'plus') {
      return (
        <span
          className="transition"
          style={{ fontSize: '1.25rem', lineHeight: 1, display: 'inline-block', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}
        >
          +
        </span>
      );
    }
    if (icon === 'arrow' || icon === 'chevron') {
      return (
        <span
          className="transition"
          style={{ fontSize: '0.75rem', display: 'inline-block', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
        >
          ▼
        </span>
      );
    }
    return icon;
  };

  const itemClasses = bordered
    ? 'add-border-1 border-solid border-color-gray-200 round-corners-2 overflow-hidden add-margin-bottom-2'
    : 'overflow-hidden';

  const headerDynamicStyle: React.CSSProperties = {
    background: isOpen ? `${activeColor}10` : 'transparent',
    color: isOpen ? activeColor : '#333',
    flexDirection: iconPosition === 'left' ? 'row-reverse' : 'row',
    ...headerStyle,
  };

  return (
    <div className={itemClasses}>
      <button
        onClick={() => !item.disabled && onToggle()}
        disabled={item.disabled}
        className={`width-full make-flex align-center justify-between add-padding-4 border-none cursor-pointer text-left text-semibold transition ${item.disabled ? 'cursor-not-allowed opacity-50' : ''}`}
        style={headerDynamicStyle}
      >
        <span className="make-flex align-center gap-2">
          {item.icon && item.icon}
          {item.title}
        </span>
        {renderIcon()}
      </button>
      <div
        className="overflow-hidden transition"
        style={{ height, transition: 'height 0.3s ease' }}
      >
        <div
          ref={contentRef}
          className="add-padding-3 add-padding-top-2 color-gray-600 line-height-relaxed"
          style={Object.keys(contentStyle).length > 0 ? contentStyle : undefined}
        >
          {item.content}
        </div>
      </div>
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpen = [],
  icon = 'chevron',
  iconPosition = 'right',
  bordered = false,
  separated = false,
  activeColor = '#4A90E2',
  headerStyle,
  contentStyle,
  className = '',
  style = {},
  onChange,
}) => {
  const itemsWithIds = items.map((item, i) => ({
    ...item,
    id: item.id || generateId(`acc-${i}`),
  }));

  const [openIds, setOpenIds] = useState<string[]>(defaultOpen);

  const handleToggle = (id: string) => {
    let newOpenIds: string[];
    if (openIds.includes(id)) {
      newOpenIds = openIds.filter((oid) => oid !== id);
    } else {
      newOpenIds = allowMultiple ? [...openIds, id] : [id];
    }
    setOpenIds(newOpenIds);
    onChange?.(newOpenIds);
  };

  const containerDynamicStyle: React.CSSProperties = {
    ...(Object.keys(style).length > 0 ? style : {}),
  };

  return (
    <div
      className={`eru-accordion make-flex flex-column ${separated ? 'gap-2' : ''} ${className}`}
      style={Object.keys(containerDynamicStyle).length > 0 ? containerDynamicStyle : undefined}
    >
      {itemsWithIds.map((item) => (
        <AccordionItemComponent
          key={item.id}
          item={item}
          isOpen={openIds.includes(item.id!)}
          onToggle={() => handleToggle(item.id!)}
          icon={icon}
          iconPosition={iconPosition}
          activeColor={activeColor}
          bordered={bordered}
          headerStyle={headerStyle}
          contentStyle={contentStyle}
        />
      ))}
    </div>
  );
};

export default Accordion;
