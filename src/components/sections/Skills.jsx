import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { Code, Database, Server, Wrench, CheckCircle2, Sparkles } from 'lucide-react';
import { getTechIcon } from '../common/TechLogos';

const Skills = () => {
  const { skills } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech Stack', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'frontend', label: 'Frontend', icon: <Code className="w-4 h-4" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-4 h-4" /> },
    { id: 'database', label: 'Database', icon: <Database className="w-4 h-4" /> },
    { id: 'tools', label: 'Tools & Deploy', icon: <Wrench className="w-4 h-4" /> },
  ];

  const allSkillsList = [
    ...skills.frontend,
    ...(skills.backend ? skills.backend.slice(0, 3) : []),
    ...skills.database,
    ...(skills.backend ? skills.backend.slice(3) : []),
    ...skills.tools,
  ];

  const displayedSkills = activeTab === 'all'
    ? allSkillsList
    : skills[activeTab] || [];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-12">
        
        <SectionHeader
          badge="Technical Skills"
          title="My Core"
          highlight="Developer Toolkit"
          subtitle="Comprehensive overview of frontend, backend, database, and engineering tools I use daily."
        />

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3.5 sm:gap-5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedSkills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 group"
            >
              <div className="flex items-center justify-between mb-3.5">
                {/* Left: Aqua Dot + Skill Name */}
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform shadow-sm shadow-cyan-400/50"></div>
                  <h4 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h4>
                </div>

                {/* Right: Tech Icon Badge */}
                <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 transition-transform">
                  {getTechIcon(skill.name)}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Proficiency</span>
                  <span className="font-mono text-cyan-300 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Additional Skills Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Soft Skills */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-teal-400" />
              Soft Skills & Methodologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.softSkills.map((soft, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700/60"
                >
                  {soft}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Skills */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Additional Skills & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {["English Type Writing", "Photoshop", "Canva", "MS Office", "Drawing", "Documentation"].map((item, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
