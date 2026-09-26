import React, { useState } from 'react';
import { User, Code2, Wrench, Check, Copy } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `// setup
const developer = {
  name: "4lcaDev",
  focus: ["web", "automation", "tools"],
  projects: 2,
  status: "masih belajar..."
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between pb-8 mb-12 border-b border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08]">
          <div>
            <span className="block font-mono text-xs text-amber-500 font-semibold tracking-widest uppercase mb-1">
              Tentang
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight">
              Sedikit Tentang Saya
            </h2>
          </div>
          <span className="font-mono text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 light:text-zinc-400 tabular-nums">
            02 / 03
          </span>
        </div>

        {/* 3 About Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Siapa Saya */}
          <div className="p-6 rounded-2xl bg-[#0f0f18]/80 dark:bg-[#0f0f18]/80 light:bg-white/90 backdrop-blur-sm border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] transition-all duration-300 hover:border-amber-500/30">
            <div className="w-10 h-10 rounded-xl bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-zinc-100 border border-white/[0.06] dark:border-white/[0.06] light:border-black/[0.06] flex items-center justify-center text-amber-400 mb-5">
              <User className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-sans font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-3">
              Siapa Saya
            </h3>
            <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
              Masih belajar coding dan senang ngulik hal-hal baru, terutama seputar web development dan otomasi. Beberapa project di bawah ini lahir dari proses belajar itu.
            </p>
          </div>

          {/* Card 2: Yang Lagi Dipelajari */}
          <div className="p-6 rounded-2xl bg-[#0f0f18]/80 dark:bg-[#0f0f18]/80 light:bg-white/90 backdrop-blur-sm border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] transition-all duration-300 hover:border-amber-500/30">
            <div className="w-10 h-10 rounded-xl bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-zinc-100 border border-white/[0.06] dark:border-white/[0.06] light:border-black/[0.06] flex items-center justify-center text-amber-400 mb-5">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-sans font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-3">
              Yang Lagi Dipelajari
            </h3>
            <div className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 space-y-2 leading-relaxed">
              <div>
                <strong className="text-zinc-200 dark:text-zinc-200 light:text-zinc-800 font-semibold font-mono text-xs">Frontend:</strong> React, HTML5, CSS3, JavaScript
              </div>
              <div>
                <strong className="text-zinc-200 dark:text-zinc-200 light:text-zinc-800 font-semibold font-mono text-xs">Backend:</strong> Node.js, Python, Express
              </div>
              <div>
                <strong className="text-zinc-200 dark:text-zinc-200 light:text-zinc-800 font-semibold font-mono text-xs">Infra:</strong> Cloud Server, Docker, MongoDB
              </div>
            </div>
          </div>

          {/* Card 3: Apa yang Saya Kerjain */}
          <div className="p-6 rounded-2xl bg-[#0f0f18]/80 dark:bg-[#0f0f18]/80 light:bg-white/90 backdrop-blur-sm border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] transition-all duration-300 hover:border-amber-500/30">
            <div className="w-10 h-10 rounded-xl bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-zinc-100 border border-white/[0.06] dark:border-white/[0.06] light:border-black/[0.06] flex items-center justify-center text-amber-400 mb-5">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-sans font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-3">
              Apa yang Saya Kerjain
            </h3>
            <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
              Dari platform digital, bot otomasi, layanan file hosting, sampai tools kecil buat urusan OTP — semuanya jadi ajang belajar sekaligus latihan.
            </p>
          </div>
        </div>

        {/* Code Snippet Block */}
        <div className="rounded-2xl bg-[#0c0c14] dark:bg-[#0c0c14] light:bg-zinc-900 border border-white/10 dark:border-white/10 light:border-black/20 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="px-5 py-3.5 bg-zinc-900/70 border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="font-mono text-xs text-zinc-400 ml-2">4lca.config.ts</span>
            </div>

            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-zinc-200 font-mono text-xs transition-colors cursor-pointer"
              title="Copy code"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Body */}
          <pre className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-zinc-300">
            <code>
              <span className="text-zinc-500 italic">// setup</span>{'\n'}
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-400">developer</span> = {'{'}{'\n'}
              {'  '}<span className="text-amber-300">name</span>:{' '}
              <span className="text-emerald-400">"4lcaDev"</span>,{'\n'}
              {'  '}<span className="text-amber-300">focus</span>:{' '}
              [<span className="text-emerald-400">"web"</span>,{' '}
              <span className="text-emerald-400">"automation"</span>,{' '}
              <span className="text-emerald-400">"tools"</span>],{'\n'}
              {'  '}<span className="text-amber-300">projects</span>:{' '}
              <span className="text-orange-400">2</span>,{'\n'}
              {'  '}<span className="text-amber-300">status</span>:{' '}
              <span className="text-emerald-400">"masih belajar..."</span>{'\n'}
              {'}'};
            </code>
          </pre>
        </div>

      </div>
    </section>
  );
};
