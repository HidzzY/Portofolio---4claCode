import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const techStack = ['JavaScript', 'Node.js', 'Python', 'React', 'Cloud'];

  return (
    <section id="home" className="min-h-[90vh] pt-28 pb-16 flex items-center justify-center relative">
      <div className="max-w-6xl w-full mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Hero Copy */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Eyebrow Status */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10 font-mono text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            <span>Status: <span className="text-zinc-200 dark:text-zinc-200 light:text-zinc-800 font-medium">Online</span></span>
          </div>

          {/* Huge Hero Title */}
          <h1 className="font-display font-black text-7xl sm:text-8xl lg:text-[7.5rem] tracking-tight leading-[0.9] select-none mb-6">
            <span className="text-amber-500 hover:text-amber-400 transition-colors drop-shadow-[0_0_25px_rgba(245,158,11,0.25)]">
              4
            </span>
            <span className="text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
              lcaDev
            </span>
          </h1>

          {/* Subtitle / Tagline */}
          <p className="font-mono text-base sm:text-lg text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mb-4 tracking-tight">
            Pelajar yang Doyan Vibe Coding
          </p>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-xl leading-relaxed mb-8">
            Masih belajar coding, senang ngulik hal-hal baru soal web, otomasi, dan teknologi pada umumnya.
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg bg-zinc-900/70 dark:bg-zinc-900/70 light:bg-zinc-100/90 border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] font-mono text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:border-amber-500/40 hover:text-amber-400 dark:hover:text-amber-400 light:hover:text-amber-600 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Socials Action Buttons */}
          <div className="flex items-center gap-3">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/@Hidzy.Insight"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-zinc-900/70 dark:bg-zinc-900/70 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-red-400 hover:border-red-500/40 hover:bg-zinc-800/80 transition-all duration-200 group"
            >
              <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6289502003601?text=Hai%20Kak%204lca."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-zinc-900/70 dark:bg-zinc-900/70 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-zinc-800/80 transition-all duration-200 group"
            >
              <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/w.hidzy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-zinc-900/70 dark:bg-zinc-900/70 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10 text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-pink-400 hover:border-pink-500/40 hover:bg-zinc-800/80 transition-all duration-200 group"
            >
              <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Cyber Visual Frame with Chips */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
          <div className="relative">
            
            {/* Top-Right Floating Chip */}
            <div className="absolute -top-5 right-[-10px] sm:-right-4 z-20 px-3 py-1.5 rounded-lg bg-[#0e0e17]/90 dark:bg-[#0e0e17]/90 light:bg-white/90 backdrop-blur-md border border-white/10 dark:border-white/10 light:border-black/10 font-mono text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700 shadow-xl flex items-center gap-2 animate-subtle-float">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <span>masih belajar</span>
            </div>

            {/* Bottom-Left Floating Chip */}
            <div className="absolute -bottom-5 -left-4 sm:-left-10 z-20 px-3.5 py-1.5 rounded-lg bg-[#0e0e17]/90 dark:bg-[#0e0e17]/90 light:bg-white/90 backdrop-blur-md border border-white/10 dark:border-white/10 light:border-black/10 font-mono text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700 shadow-xl flex items-center gap-2">
              <span>belajar sambil bikin project</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
            </div>

            {/* The Cyber Visual Frame */}
            <div className="relative w-[280px] h-[280px] sm:w-[330px] sm:h-[330px] rounded-2xl bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-100/60 border border-white/10 dark:border-white/10 light:border-black/10 p-6 flex items-center justify-center overflow-hidden shadow-2xl backdrop-blur-sm">
              
              {/* Corner Cyber Accents */}
              <span className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-amber-500/80 rounded-tl-sm pointer-events-none" />
              <span className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-amber-500/80 rounded-tr-sm pointer-events-none" />
              <span className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-amber-500/80 rounded-bl-sm pointer-events-none" />
              <span className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-amber-500/80 rounded-br-sm pointer-events-none" />

              {/* Animated Scanline */}
              <div 
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent pointer-events-none animate-scanline shadow-[0_0_12px_rgba(245,158,11,0.8)]" 
                aria-hidden="true"
              />

              {/* Circular Avatar Container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-zinc-700/60 dark:border-zinc-700/60 light:border-zinc-300 bg-zinc-950 flex items-center justify-center group shadow-inner">
                {!imageError ? (
                  <img
                    src="/alcaLogo.jpg"
                    alt="4lcaDev Avatar"
                    className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                    width={224}
                    height={224}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  /* Stylized Cyber SVG Avatar Fallback */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-900 text-amber-400 p-4 select-none">
                    <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2a5 5 0 0 1 5 5v3a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z" />
                      <path d="M20 21v-2a7 7 0 0 0-14 0v2" />
                    </svg>
                    <span className="font-display font-bold text-lg mt-2 text-zinc-100 tracking-wider">4LCA</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
