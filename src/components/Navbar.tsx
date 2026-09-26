import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'BERANDA', href: '#home', id: 'home' },
    { label: 'PROJECT', href: '#projects', id: 'projects' },
    { label: 'TENTANG', href: '#about', id: 'about' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'py-3.5 bg-[#0a0a12]/85 dark:bg-[#0a0a12]/85 light:bg-white/85 backdrop-blur-md border-b border-white/[0.06] dark:border-white/[0.06] light:border-black/[0.06] shadow-lg shadow-black/20' 
            : 'py-5 bg-transparent'
        }`}
        aria-label="Navigasi utama"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-1.5 group select-none text-xl sm:text-2xl font-bold tracking-tight"
            aria-label="4lcaDev beranda"
          >
            <span className="text-amber-500 font-display font-extrabold text-2xl sm:text-3xl transition-transform group-hover:scale-110 duration-200">
              4
            </span>
            <span className="text-zinc-100 dark:text-zinc-100 light:text-zinc-900 font-sans tracking-wide">
              lcaDev
            </span>
            <span 
              className="inline-block w-2 h-2 rounded-full bg-cyan-400 ml-1 shadow-[0_0_8px_#22d3ee] animate-pulse-glow" 
              aria-hidden="true" 
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative py-1 font-semibold transition-colors duration-200 ${
                    isActive 
                      ? 'text-amber-400 dark:text-amber-400 light:text-amber-600' 
                      : 'text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-zinc-200 dark:hover:text-zinc-200 light:hover:text-zinc-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span 
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400 dark:bg-amber-400 light:bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)] rounded-full animate-fadeIn" 
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Nav Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-amber-400 dark:hover:text-amber-400 light:hover:text-amber-600 hover:border-amber-500/40 transition-all duration-200 cursor-pointer"
              aria-label="Ganti tema"
              type="button"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-zinc-800" />
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:border-amber-500/40 cursor-pointer transition-colors"
              aria-label="Buka menu"
              aria-expanded={mobileMenuOpen}
              type="button"
            >
              <span 
                className={`w-4 h-[2px] bg-current rounded-full transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''
                }`}
              />
              <span 
                className={`w-4 h-[2px] bg-current rounded-full transition-opacity duration-200 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`w-4 h-[2px] bg-current rounded-full transition-transform duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div 
        className={`md:hidden fixed inset-x-0 top-[60px] z-30 transition-all duration-300 transform ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="mx-4 p-4 rounded-2xl bg-[#0f0f18]/95 dark:bg-[#0f0f18]/95 light:bg-white/95 backdrop-blur-xl border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl flex flex-col gap-2 font-mono text-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-3 rounded-xl transition-all flex items-center justify-between ${
                  isActive 
                    ? 'bg-amber-500/10 text-amber-400 font-semibold border border-amber-500/20' 
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]" />}
              </a>
            );
          })}
        </div>
      </div>

      {/* Backdrop for Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="md:hidden fixed inset-0 z-20 bg-black/50 backdrop-blur-sm"
          aria-hidden="true"
        />
      )}
    </>
  );
};
