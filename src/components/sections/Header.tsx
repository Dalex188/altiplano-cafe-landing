import React from 'react';

interface HeaderProps {
  menuOpen: boolean;
  onMenuToggle: () => void;
  onNavClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ menuOpen, onMenuToggle, onNavClick }) => (
  <>
    <header className="site-header">
      <div className="header-inner container">
        <a href="#hero" className="header-brand" onClick={onNavClick}>Altiplano Café</a>
        <nav className="header-nav">
          <a href="#hero" onClick={onNavClick}>Home</a>
          <a href="#about" onClick={onNavClick}>About</a>
          <a href="#quality" onClick={onNavClick}>Quality</a>
          <a href="#export" onClick={onNavClick}>Export</a>
          <a href="#process" onClick={onNavClick}>Process</a>
          <a href="#testimonials" onClick={onNavClick}>Testimonials</a>
          <a href="#contact-form" onClick={onNavClick} className="header-nav-cta">Contact</a>
        </nav>
        <button className="hamburger" onClick={onMenuToggle} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
    {menuOpen && (
      <div className="mobile-nav-overlay" onClick={onNavClick}>
        <a href="#hero" onClick={(e) => { e.stopPropagation(); onNavClick(); }}>Home</a>
        <a href="#about" onClick={(e) => { e.stopPropagation(); onNavClick(); }}>About</a>
        <a href="#quality" onClick={(e) => { e.stopPropagation(); onNavClick(); }}>Quality</a>
        <a href="#export" onClick={(e) => { e.stopPropagation(); onNavClick(); }}>Export</a>
        <a href="#process" onClick={(e) => { e.stopPropagation(); onNavClick(); }}>Process</a>
        <a href="#testimonials" onClick={(e) => { e.stopPropagation(); onNavClick(); }}>Testimonials</a>
        <a href="#contact-form" onClick={(e) => { e.stopPropagation(); onNavClick(); }} className="mobile-nav-cta">Contact</a>
      </div>
    )}
  </>
);
