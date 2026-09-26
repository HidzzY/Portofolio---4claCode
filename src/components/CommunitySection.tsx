import React from 'react';
import { Users, Radio, ArrowRight } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between pb-8 mb-12 border-b border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08]">
          <div>
            <span className="block font-mono text-xs text-amber-500 font-semibold tracking-widest uppercase mb-1">
              Komunitas
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight">
              Yuk Ngobrol Santai
            </h2>
          </div>
          <span className="font-mono text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 light:text-zinc-400 tabular-nums">
            03 / 03
          </span>
        </div>

        {/* 2 Community Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: WhatsApp Group Chat */}
          <a
            href="https://chat.whatsapp.com/GmcTUpF2XemDj8AitPsy4J"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-[#0f0f18]/80 dark:bg-[#0f0f18]/80 light:bg-white/90 backdrop-blur-sm border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-between shadow-lg shadow-black/10"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-zinc-100 border border-white/[0.06] dark:border-white/[0.06] light:border-black/[0.06] flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-sans font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 group-hover:text-emerald-400 dark:group-hover:text-emerald-400 light:group-hover:text-emerald-600 transition-colors">
                  Grup Chat
                </h3>
                <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-1 leading-relaxed max-w-sm">
                  Tempat ngobrol santai, tanya-tanya, atau sekadar say hi. Terbuka buat siapa saja.
                </p>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0">
              <ArrowRight className="w-5 h-5" />
            </div>
          </a>

          {/* Card 2: WhatsApp Channel */}
          <a
            href="https://whatsapp.com/channel/0029Vb82nkLEwEjtLSQ49I44"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-[#0f0f18]/80 dark:bg-[#0f0f18]/80 light:bg-white/90 backdrop-blur-sm border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-between shadow-lg shadow-black/10"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-zinc-100 border border-white/[0.06] dark:border-white/[0.06] light:border-black/[0.06] flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 transition-transform">
                <Radio className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-sans font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 group-hover:text-amber-400 dark:group-hover:text-amber-400 light:group-hover:text-amber-600 transition-colors">
                  Channel
                </h3>
                <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-1 leading-relaxed max-w-sm">
                  Kalau ada progress project baru, saya kabari di sini.
                </p>
              </div>
            </div>

            <div className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0">
              <ArrowRight className="w-5 h-5" />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};
