import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import ProjectModal from '../modals/ProjectModal';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { ExternalLink, Sparkles, FolderGit, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

const Projects = () => {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Frontend', 'Full Stack MERN', 'AI & Web App'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-12">
        
        <SectionHeader
          badge="Featured Portfolio"
          title="Innovative"
          highlight="Projects & Products"
          subtitle="Enterprise MERN applications & AI music recommendation systems developed with clean architecture."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const visibleTech = project.techStack.slice(0, 4);
            const remainingTech = project.techStack.slice(4);

            return (
              <div
                key={project.id}
                className="bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-950/30 group"
              >
                <div className="space-y-4">
                  {/* Header Badge & Category */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {project.category}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-cyan-400 transition-colors">
                      <FolderGit className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="relative group/title">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1 cursor-default">
                      {project.title}
                    </h3>
                    {/* Floating Title Tooltip */}
                    <div className="absolute bottom-full left-0 mb-2 px-3 py-1.5 rounded-lg bg-slate-800 text-white text-xs font-semibold whitespace-normal max-w-xs opacity-0 group-hover/title:opacity-100 transition-opacity duration-200 pointer-events-none border border-slate-700 shadow-xl z-20">
                      {project.title}
                      <div className="absolute top-full left-4 border-4 border-transparent border-t-slate-800"></div>
                    </div>
                    <p className="text-xs text-slate-400 font-medium mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {visibleTech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {remainingTech.length > 0 && (
                      <div className="relative group/techcount inline-flex items-center">
                        <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-cyan-400 border border-slate-700/80 font-semibold cursor-pointer inline-flex items-center justify-center">
                          +{remainingTech.length}
                        </span>
                        {/* Floating Remaining Tech Stack Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-300 text-xs font-mono whitespace-nowrap opacity-0 group-hover/techcount:opacity-100 transition-opacity duration-200 pointer-events-none border border-slate-700 shadow-xl z-20">
                          {remainingTech.join(', ')}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              {/* Footer Action Buttons */}
              <div className="mt-4 pt-3.5 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/btn"
                >
                  <span>View Details & Features</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>

                <div className="relative group/github">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition flex items-center justify-center"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  {/* GitHub Tooltip Bubble */}
                  <div className="absolute bottom-full right-0 mb-2 px-2.5 py-1 rounded-md bg-slate-800 text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover/github:opacity-100 transition-opacity duration-200 pointer-events-none border border-slate-700 shadow-xl z-20">
                    GitHub Source Code
                    <div className="absolute top-full right-3 border-4 border-transparent border-t-slate-800"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        {/* Modal Window */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

export default Projects;
