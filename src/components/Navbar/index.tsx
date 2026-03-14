import React, { useState, useEffect } from 'react';
import { NavbarProps, NavLink } from './types';

const colorSchemeConfig = {
  light: { bg: '#ffffff', text: '#1a1a2e', border: '#e5e7eb', hoverBg: '#f3f4f6' },
  dark: { bg: '#1a1a2e', text: '#ffffff', border: '#374151', hoverBg: '#2d2d4e' },
  transparent: { bg: 'transparent', text: '#ffffff', border: 'transparent', hoverBg: 'rgba(255,255,255,0.1)' },
  primary: { bg: '#4A90E2', text: '#ffffff', border: 'transparent', hoverBg: '#357ABD' },
};

const Navbar: React.FC<NavbarProps> = ({
  logo,
  logoText = 'Brand',
  logoHref = '/',
  links = [],
  sticky = false,
  transparent = false,
  colorScheme = 'light',
  rightContent,
  height = '64px',
  className = '',
  style = {},
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const config = colorSchemeConfig[colorScheme];
  const actualBg = transparent && !scrolled ? 'transparent' : config.bg;
  const actualText = transparent && !scrolled && colorScheme === 'transparent' ? '#ffffff' : config.text;

  useEffect(() => {
    if (sticky || transparent) {
      const handler = () => setScrolled(window.scrollY > 20);
      window.addEventListener('scroll', handler);
      return () => window.removeEventListener('scroll', handler);
    }
  }, [sticky, transparent]);

  const renderLink = (link: NavLink, index: number) => (
    <li key={index} className="position-relative" style={{ listStyle: 'none' }}>
      <a
        href={link.href}
        target={link.target}
        rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
        className="nav-link make-block text-medium set-text-14 round-corners-2 transition add-padding-2 add-padding-x-3"
        style={{ color: actualText, textDecoration: 'none' }}
      >
        {link.label}
        {link.children && <span style={{ marginLeft: '0.25rem', fontSize: '0.65rem' }}>▼</span>}
      </a>
    </li>
  );

  return (
    <nav
      className={`eru-navbar make-navbar transition ${sticky ? 'position-sticky pin-top-0' : 'position-relative'} ${className}`}
      style={{
        backgroundColor: actualBg,
        borderBottom: `1px solid ${scrolled ? config.border : 'transparent'}`,
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
        zIndex: sticky ? 1000 : undefined,
        ...style,
      }}
    >
      <div
        className="make-flex align-center justify-between margin-x-auto add-padding-x-8"
        style={{ height, maxWidth: '1200px' }}
      >
        <a
          href={logoHref}
          className="make-flex align-center gap-2"
          style={{ textDecoration: 'none', flexShrink: 0 }}
        >
          {logo || (
            <span
              className="text-bold set-text-24 letter-space-tight"
              style={{ color: actualText }}
            >
              {logoText}
            </span>
          )}
        </a>

        <ul
          className="make-flex align-center gap-1 eru-navbar__desktop-links"
          style={{ listStyle: 'none', margin: 0, padding: 0 }}
        >
          {links.map(renderLink)}
        </ul>

        <div className="make-flex align-center gap-4">
          {rightContent}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="eru-navbar__hamburger border-none cursor-pointer background-transparent make-flex flex-column gap-1"
            style={{ display: 'none', padding: '0.25rem', color: actualText }}
          >
            <span style={{ display: 'block', width: '24px', height: '2px', background: 'currentColor', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', width: '24px', height: '2px', background: 'currentColor', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '24px', height: '2px', background: 'currentColor', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .eru-navbar__desktop-links { display: none !important; }
          .eru-navbar__hamburger { display: flex !important; }
        }
      `}</style>

      {menuOpen && (
        <div
          className="add-border-top-1 border-solid add-padding-4"
          style={{
            backgroundColor: config.bg === 'transparent' ? '#1a1a2e' : config.bg,
            borderColor: config.border,
          }}
        >
          <ul className="make-flex flex-column" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  target={link.target}
                  onClick={() => setMenuOpen(false)}
                  className="make-block add-padding-y-3 text-medium add-border-bottom-1 border-solid"
                  style={{
                    color: config.text,
                    textDecoration: 'none',
                    borderColor: config.border,
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
