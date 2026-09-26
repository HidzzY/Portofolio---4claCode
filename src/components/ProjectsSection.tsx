import React, { useState } from 'react';
import { UploadCloud, Files, ExternalLink, Info } from 'lucide-react';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: '4lcacdn',
      unitIndex: 'N.01',
      name: '4lcaCDN',
      badge: 'Live',
      iconType: 'cdn',
      description: 'Upload file ke URL dengan cepat dan mudah. Storage kapasitas besar, siap untuk kebutuhan hosting file kamu.',
      tags: ['File Hosting', 'Storage Besar'],
      status: 'Online',
      statusType: 'live',
      link: 'https://updfile.vercel.app',
      details: {
        overview: 'Layanan Content Delivery Network dan file hosting gratis untuk membagikan file, gambar, video, dan dokumen secara publik dengan URL langsung.',
        features: [
          'Direct upload & instant CDN link generator',
          'Dukungan MIME type lengkap (foto, video, zip, audio)',
          'High bandwidth throughput dengan caching cepat',
        ],
        tech: ['Next.js', 'Vercel', 'Object Storage (S3 API)', 'React'],
        highlights: 'Platform file hosting cepat yang sudah digunakan untuk kebutuhan hosting aset web dan file bot.',
      },
    },
    {
      id: '4lcafile',
      unitIndex: 'N.02',
      name: '4lca file',
      badge: 'Live',
      iconType: 'file',
      description: 'Pusat penyimpanan, pengiriman, dan pengelolaan file online praktis dengan direct link yang cepat dan stabil.',
      tags: ['File Manager', 'Cloud Storage', 'Direct Link'],
      status: 'Online',
      statusType: 'live',
      link: 'https://clco.w4xd.my.id',
      details: {
        overview: 'Layanan manajemen file dan penyimpanan cloud serbaguna dengan akses direct download dan antarmuka responsif.',
        features: [
          'Akses direct file URL untuk kemudahan berbagi',
          'Kecepatan transmisi data tinggi tanpa limit membingungkan',
          'Tampilan simpel, cepat, dan ramah pengguna',
        ],
        tech: ['Node.js', 'Express', 'Cloud Server', 'TailwindCSS'],
        highlights: 'Solusi sharing berkas dan aset digital yang efisien untuk berbagai keperluan.',
      },
    },
  ];

  const renderIcon = (type: string) => {
    switch (type) {
      case 'cdn':
        return <UploadCloud className="w-6 h-6 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 group-hover:text-amber-400 transition-colors" />;
      case 'file':
        return <Files className="w-6 h-6 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 group-hover:text-amber-400 transition-colors" />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-end justify-between pb-8 mb-12 border-b border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08]">
          <div>
            <span className="block font-mono text-xs text-amber-500 font-semibold tracking-widest uppercase mb-1">
              Project
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-tight">
              Karya &amp; Project
            </h2>
          </div>
          <span className="font-mono text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 light:text-zinc-400 tabular-nums">
            01 / 03
          </span>
        </div>

        {/* Projects Grid (2 projects balanced layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => {
            const isClickableLink = !!project.link;

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-[#0f0f18]/80 dark:bg-[#0f0f18]/80 light:bg-white/90 backdrop-blur-sm border border-white/[0.08] dark:border-white/[0.08] light:border-black/[0.08] p-6 flex flex-col justify-between transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
              >
                {/* Card Top: Unit Index & Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs text-zinc-500 dark:text-zinc-500 light:text-zinc-400 tracking-wider">
                      {project.unitIndex}
                    </span>
                    <span 
                      className={`font-mono text-[11px] px-2.5 py-0.5 rounded-full font-medium ${
                        project.badge === 'Live'
                          ? 'bg-emerald-500/15 text-emerald-400 dark:text-emerald-400 light:text-emerald-600 border border-emerald-500/30'
                          : 'bg-amber-500/15 text-amber-400 dark:text-amber-400 light:text-amber-600 border border-amber-500/30'
                      }`}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-zinc-100 border border-white/[0.06] dark:border-white/[0.06] light:border-black/[0.06] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-amber-500/30 transition-all duration-300">
                    {renderIcon(project.iconType)}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-sans font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mb-2 group-hover:text-amber-400 dark:group-hover:text-amber-400 light:group-hover:text-amber-600 transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Card Bottom: Tags & Status */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-zinc-100 font-mono text-[11px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 border border-white/[0.04] dark:border-white/[0.04] light:border-black/[0.04]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] dark:border-white/[0.06] light:border-black/[0.06] flex items-center justify-between text-xs font-mono">
                    {/* Status indicator */}
                    <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                      <span 
                        className={`w-2 h-2 rounded-full ${
                          project.statusType === 'live' 
                            ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' 
                            : 'bg-amber-400 shadow-[0_0_8px_#f59e0b]'
                        }`} 
                      />
                      <span>{project.status}</span>
                    </div>

                    {/* Action buttons: Info detail + external link */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-1.5 rounded-lg text-zinc-400 hover:text-amber-400 hover:bg-white/5 transition-colors cursor-pointer"
                        title="Lihat detail project"
                        aria-label={`Detail ${project.name}`}
                      >
                        <Info className="w-4 h-4" />
                      </button>

                      {isClickableLink && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-zinc-400 hover:text-amber-400 hover:bg-white/5 transition-colors"
                          title="Buka website"
                          aria-label={`Buka ${project.name}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
