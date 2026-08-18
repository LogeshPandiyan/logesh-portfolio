import React from 'react';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { ArrowRight, Mail, Phone, Code, Sparkles, Terminal, CheckCircle2, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import TextRotator from '../common/TextRotator';

const Hero = () => {
  const { personalInfo, stats } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden mt-7">
      {/* Ambient background glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">{personalInfo.name}</span>
              </h1>
              <div className="text-xl sm:text-2xl font-bold min-h-[40px] flex items-center justify-center lg:justify-start">
                <TextRotator />
              </div>
            </div>

            {/* Sub-headline / Short Bio */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.bio}
            </p>

            {/* Social Icon Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 transition-all"
                title={`Send Email (${personalInfo.email})`}
              >
                <Mail className="w-5 h-5 text-white" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 transition-all"
                title="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Divider Border & Download Resume Button Below */}
            <div className="pt-6 border-t border-slate-800/80 flex justify-center lg:justify-start">
              <a
                href="/LOGESH_MERN_RESUME1.pdf"
                download="LOGESH_MERN_RESUME1.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-600 transition-all inline-flex items-center gap-2.5 font-semibold text-xs sm:text-sm"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Senior Developer Code Preview Window */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-xl"></div>
              
              {/* IDE Card Container */}
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                {/* IDE Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="ml-2 text-slate-300 font-sans font-medium flex items-center gap-1">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" /> developer.config.js
                    </span>
                  </div>
                  <span className="text-emerald-400 text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    MERN Senior Architecture
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-300 space-y-2 bg-slate-950/40">
                  <p className="text-slate-500">// Logesh's Full-Stack Architecture</p>
                  <p><span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> = {"{"}</p>
                  <p className="pl-4"><span className="text-teal-300">name</span>: <span className="text-emerald-300">"{personalInfo.name}"</span>,</p>
                  <p className="pl-4"><span className="text-teal-300">role</span>: <span className="text-emerald-300">"MERN Stack Developer"</span>,</p>
                  <p className="pl-4"><span className="text-teal-300">primaryStack</span>: [</p>
                  <p className="pl-8 text-amber-300">"React.js", "Node.js", "Express.js", "MongoDB", "RTK Query"</p>
                  <p className="pl-4">],</p>
                  <p className="pl-4"><span className="text-teal-300">architecture</span>: {"{"}</p>
                  <p className="pl-8"><span className="text-teal-300">auth</span>: <span className="text-emerald-300">"JWT + RBAC"</span>,</p>
                  <p className="pl-8"><span className="text-teal-300">state</span>: <span className="text-emerald-300">"RTK Query (Redux Toolkit)"</span>,</p>
                  <p className="pl-8"><span className="text-teal-300">ui</span>: <span className="text-emerald-300">"Tailwind CSS + Responsive Design"</span></p>
                  <p className="pl-4">{"}"},</p>
                  <p className="pl-4"><span className="text-teal-300">status</span>: <span className="text-emerald-300">"Ready for New Challenges 🚀"</span></p>
                  <p>{"}"};</p>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-sans">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Clean Code Approved
                    </span>
                    <span>ES6+ Async/Await</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
