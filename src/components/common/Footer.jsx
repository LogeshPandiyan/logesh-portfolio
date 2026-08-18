import React from 'react';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { Code, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-5 sm:py-6">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold shrink-0">
              <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div>
              <p className="text-white font-bold tracking-tight text-xs sm:text-sm">
                LOGESH<span className="text-cyan-400">.P</span>
              </p>
              <p className="text-slate-500 font-semibold text-xs">Full stack MERN Developer</p>
            </div>
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center gap-3 text-xs">
            <p className="text-slate-400 text-xs">© {new Date().getFullYear()} Logesh P.</p>
            <button
              onClick={scrollToTop}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
