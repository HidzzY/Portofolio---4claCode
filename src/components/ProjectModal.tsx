import React, { useEffect } from 'react';
import { X, ExternalLink, Check, Copy } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleCopyLink = () => {
    if (project.link) {
      navigator.clipboard.writeText(project.link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#0f0f18] dark:bg-[#0f0f18] light:bg-white border border-white/10 dark:border-white/10 light:border-black/10 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header with Unit Index and Close */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-amber-500 font-semibold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
              {project.unitIndex}
            </span>
            <span 
              className={`text-xs font-mono px-2.5 py-0.5 rounded-full font-medium ${
                project.badge === 'Live'
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
              }`}
            >
              {project.badge}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-3">
          {project.name}
        </h3>

        <p className="text-sm sm:text-base text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Detailed specs */}
        {project.details && (
          <div className="space-y-4 mb-6 text-sm">
            <div>
              <h4 className="font-mono text-xs text-amber-400 mb-1.5 uppercase tracking-wider">
                Fitur Utama:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                {project.details.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs text-amber-400 mb-1.5 uppercase tracking-wider">
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.details.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10 font-mono text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2 pb-6 border-b border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md bg-zinc-800/40 dark:bg-zinc-800/40 light:bg-zinc-100 font-mono text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span 
              className={`w-2 h-2 rounded-full ${
                project.statusType === 'live' ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-amber-400 shadow-[0_0_8px_#f59e0b]'
              }`} 
            />
            <span>{project.status}</span>
          </div>

          <div className="flex items-center gap-2">
            {project.link ? (
              <>
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 border border-white/10 dark:border-white/10 light:border-black/10 text-xs font-mono text-zinc-300 hover:text-amber-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Salin tautan"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Disalin' : 'Copy'}</span>
                </button>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-mono font-medium text-xs flex items-center gap-1.5 transition-colors shadow-lg shadow-amber-500/20"
                >
                  <span>Kunjungi Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </>
            ) : (
              <span className="text-xs font-mono text-zinc-500 italic">
                Segera hadir di 4lcaDev
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
