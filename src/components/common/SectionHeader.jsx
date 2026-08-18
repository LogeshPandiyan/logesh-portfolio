import React from 'react';

const SectionHeader = ({ badge, title, highlight, subtitle }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
      {badge && (
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
        {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
