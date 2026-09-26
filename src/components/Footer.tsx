import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] py-12 relative z-10 bg-[#0a0a12]/60 dark:bg-[#0a0a12]/60 light:bg-white/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright */}
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-500 light:text-zinc-600">
          <span>&copy; 2026 4lcaDev</span>
          <span>&bull;</span>
          <span>Dibuat dengan dedikasi &amp; passion ngoding</span>
        </div>

        {/* Right: Quick Links & Back to Top */}
        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href="https://www.youtube.com/@Hidzy.Insight"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-amber-400 dark:hover:text-amber-400 light:hover:text-amber-600 transition-colors"
          >
            YouTube
          </a>
          <a
            href="https://www.instagram.com/w.hidzy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-amber-400 dark:hover:text-amber-400 light:hover:text-amber-600 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/6289502003601"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-amber-400 dark:hover:text-amber-400 light:hover:text-amber-600 transition-colors"
          >
            Kontak
          </a>

          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 transition-all cursor-pointer"
            title="Kembali ke atas"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
