import React from 'react';
import { FooterProps } from './types';

const Footer: React.FC<FooterProps> = ({
  columns = [],
  copyright,
  socialLinks = [],
  logo,
  logoText = 'Brand',
  description,
  colorScheme = 'dark',
  className = '',
  style = {},
}) => {
  const isDark = colorScheme === 'dark';
  const bg = isDark ? '#1a1a2e' : '#f8f9fa';
  const textColor = isDark ? '#e0e0e0' : '#444';
  const headingColor = isDark ? '#ffffff' : '#1a1a2e';
  const linkColor = isDark ? '#a0b0c8' : '#666';
  const borderColor = isDark ? '#2d3a4e' : '#e5e7eb';
  const subBg = isDark ? '#141424' : '#f0f0f0';

  const totalCols = Math.max(1, columns.length + (description ? 1 : 0));
  const colsClass = totalCols >= 1 && totalCols <= 12 ? `grid-cols-${totalCols}` : 'grid-cols-3';

  return (
    <footer
      className={`eru-footer ${className}`}
      style={{ backgroundColor: bg, color: textColor, ...style }}
    >
      <div className="margin-x-auto add-padding-y-12 add-padding-x-8" style={{ maxWidth: '1200px' }}>
        <div className={`make-grid ${colsClass} gap-8`}>
          {(logo || logoText || description) && (
            <div>
              <div className={description ? 'add-margin-bottom-4' : ''}>
                {logo || (
                  <span
                    className="text-bold set-text-24 letter-space-tight"
                    style={{ color: headingColor }}
                  >
                    {logoText}
                  </span>
                )}
              </div>
              {description && (
                <p className="set-text-14 line-height-relaxed" style={{ color: textColor, margin: 0 }}>
                  {description}
                </p>
              )}
            </div>
          )}

          {columns.map((col, i) => (
            <div key={i}>
              <h4
                className="text-bold set-text-14 text-uppercase letter-space-wide add-margin-bottom-4"
                style={{ color: headingColor, marginTop: 0 }}
              >
                {col.title}
              </h4>
              <ul className="make-flex flex-column gap-2" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      target={link.target}
                      rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                      className="set-text-14 transition transition-colors"
                      style={{ color: linkColor, textDecoration: 'none' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className="add-border-top-1 border-solid add-padding-y-5 add-padding-x-8"
        style={{ backgroundColor: subBg, borderColor }}
      >
        <div
          className="make-flex justify-between align-center flex-wrap gap-4 margin-x-auto"
          style={{ maxWidth: '1200px' }}
        >
          <p className="set-text-13" style={{ margin: 0, color: linkColor }}>
            {copyright || `© ${new Date().getFullYear()} ${logoText}. All rights reserved.`}
          </p>
          {socialLinks.length > 0 && (
            <div className="make-flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="set-text-18 transition transition-colors"
                  style={{ color: linkColor, textDecoration: 'none' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
