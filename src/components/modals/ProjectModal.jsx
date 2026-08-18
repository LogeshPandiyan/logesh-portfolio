import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import { getTechIcon } from '../common/TechLogos';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Horizontal Landscape Rectangular Modal Box */}
      <div className="relative w-full max-w-4xl lg:max-w-5xl bg-slate-900 border border-slate-700/80 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-4 overflow-hidden">
        
        {/* Close Button fitted right in top-right corner */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors z-20 border border-slate-700/60"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Section: Category & Title */}
        <div className="border-b border-slate-800 pb-3.5 pr-12 space-y-2">
          {/* Category Badge on top-left (fitted near top edge) */}
          <div className="flex items-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {project.category}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* 2-Column Horizontal Rectangular Grid Body (Scroll-Free Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Overview & Tech Stack */}
          <div className="md:col-span-6 space-y-5 flex flex-col justify-between">
            {/* Overview Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold tracking-wider text-slate-400 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" /> Project Overview
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                {project.description}
              </p>
            </div>

            {/* Technologies Used */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold tracking-wider text-slate-400 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" /> Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700/80 shadow-sm"
                  >
                    <span className="shrink-0 scale-90">{getTechIcon(tech)}</span>
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Features & Footer Action Buttons */}
          <div className="md:col-span-6 space-y-5 flex flex-col justify-between border-t md:border-t-0 md:border-l border-slate-800 pt-5 md:pt-0 md:pl-6">
            
            {/* Key Features List */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400" /> Key Features & Architecture
              </h4>
              <ul className="space-y-2.5">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition border border-slate-700/60"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition shadow-lg shadow-cyan-500/20"
              >
                Close
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
