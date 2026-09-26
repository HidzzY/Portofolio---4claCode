import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { AmbientBackground } from './components/AmbientBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';
import { MusicPlayer } from './components/MusicPlayer';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('4lca_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('4lca_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home', 'projects', 'about', 'community'];
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop - 120;
          const height = element.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a12] dark:bg-[#0a0a12] light:bg-[#f8f9fc] text-zinc-100 dark:text-zinc-100 light:text-zinc-900 transition-colors duration-300 selection:bg-amber-500/30 selection:text-amber-300">
      {/* Background Ambience & Scroll Progress */}
      <AmbientBackground />

      {/* Main Navbar */}
      <Navbar 
        theme={theme} 
        onToggleTheme={toggleTheme} 
        activeSection={activeSection} 
      />

      {/* Page Content */}
      <main className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <CommunitySection />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Background Audio Player & FAB */}
      <MusicPlayer />
    </div>
  );
}
