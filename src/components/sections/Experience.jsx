import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight, Building2 } from 'lucide-react';
import { getTechIcon } from '../common/TechLogos';

const Experience = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 bg-slate-950/60 relative">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-12">
        
        <SectionHeader
          badge="Career Journey"
          title="Professional"
          highlight="Work Experience"
          subtitle="Hands-on experience developing production-grade MERN stack enterprise solutions."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="relative bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 group"
            >
              {/* Top Row: Role, Type, Period, Company & Location */}
              <div className="pb-6 border-b border-slate-800 space-y-3">
                {/* Row 1: Full-time Type Badge (Left) & Period Badge (Right) */}
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Briefcase className="w-3.5 h-3.5" />
                    {exp.type}
                  </div>
                  <span className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-cyan-300 font-semibold text-xs font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                {/* Row 2: Role Title (Left) & Location Badge (Right) */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/60 text-xs text-slate-400 font-mono shrink-0 self-start sm:self-auto">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>

                {/* Row 3: Company Name */}
                <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                  <Building2 className="w-4 h-4 text-teal-400" />
                  <span>{exp.company}</span>
                </div>
              </div>

              {/* Achievements List */}
              <div className="mt-6 space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Key Achievements & Impact
                </h4>
                <ul className="space-y-3">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used Bar */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <span className="text-xs font-semibold text-slate-400 shrink-0">Tech Stack:</span>
                <div className="flex flex-wrap items-center gap-2">
                  {(exp.techStack || ['React.js', 'Tailwind CSS', 'MUI', 'Axios', 'RTK Query', 'Node.js', 'Express.js', 'MongoDB, Mongoose & Atlas', 'JWT/RBAC', 'Vercel', 'Render']).map((tech, tIdx) => (
                    <div key={tIdx} className="relative group/tooltip">
                      {/* Icon Avatar Badge */}
                      <div className="w-9 h-9 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center hover:scale-110 hover:border-cyan-400/80 hover:bg-slate-800 transition-all duration-200 shadow-sm cursor-pointer">
                        {getTechIcon(tech)}
                      </div>

                      {/* Tooltip Bubble */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md bg-slate-800 text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none border border-slate-700/80 shadow-xl z-20">
                        {tech}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
