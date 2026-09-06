import React, { useState, useEffect } from 'react';
import { Menu, X, Wine, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenWineCellar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, onOpenWineCellar }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Cellar', onClick: onOpenWineCellar },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reserve', href: '#reserve' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#131313]/95 backdrop-blur-xl border-b border-[#4e4639]/80 shadow-2xl py-3'
          : 'bg-[#131313]/80 backdrop-blur-md border-b border-[#4e4639]/40 py-4'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-16 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <a
          id="brand-logo-link"
          href="#home"
          className="text-primary tracking-widest flex items-center gap-2 group transition-transform duration-300 hover:scale-[1.02]"
        >
          <span className="font-serif text-2xl md:text-3xl font-medium tracking-[0.15em] text-[#e9c176]">
            Éclat
          </span>
          <span className="font-sans text-[10px] tracking-[0.25em] text-[#d1c5b4] hidden sm:inline-block border-l border-[#4e4639] pl-2 uppercase">
            Restaurant &amp; Lounge
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href ? (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                className="font-serif text-base text-[#d1c5b4] hover:text-[#e9c176] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#e9c176] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ) : (
              <button
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                onClick={link.onClick}
                className="font-serif text-base text-[#d1c5b4] hover:text-[#e9c176] transition-colors duration-300 relative py-1 cursor-pointer flex items-center gap-1.5"
              >
                <Wine className="w-3.5 h-3.5 text-[#e9c176]" />
                {link.name}
              </button>
            )
          )}
        </nav>

        {/* Trailing Action & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            id="navbar-reserve-btn"
            onClick={onOpenReservation}
            className="px-5 py-2.5 rounded text-[#0e0e0e] bg-[#e9c176] hover:bg-[#c5a059] transition-all duration-300 font-sans tracking-widest uppercase text-xs font-semibold gold-glow cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Reserve a Table</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#d1c5b4] hover:text-[#e9c176] p-1.5 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-[#131313]/98 border-b border-[#4e4639] px-6 py-6 transition-all duration-300"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) =>
              link.href ? (
                <a
                  key={link.name}
                  id={`mobile-nav-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-lg text-[#e5e2e1] hover:text-[#e9c176] py-1 border-b border-[#201f1f]"
                >
                  {link.name}
                </a>
              ) : (
                <button
                  key={link.name}
                  id={`mobile-nav-${link.name.toLowerCase()}`}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    link.onClick?.();
                  }}
                  className="font-serif text-lg text-[#e5e2e1] hover:text-[#e9c176] py-1 text-left border-b border-[#201f1f] flex items-center gap-2"
                >
                  <Wine className="w-4 h-4 text-[#e9c176]" />
                  {link.name} (Sommelier Vault)
                </button>
              )
            )}
            <div className="pt-2">
              <button
                id="mobile-reserve-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 rounded text-[#0e0e0e] bg-[#e9c176] font-sans tracking-widest uppercase text-xs font-semibold text-center gold-glow"
              >
                Instant Reservation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
