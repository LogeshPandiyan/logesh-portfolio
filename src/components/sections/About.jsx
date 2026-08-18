import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { ShieldCheck, Server, Cpu, Layout, Award, MapPin, Building2, Mail, CheckCircle } from 'lucide-react';

const About = () => {
  const { personalInfo } = PORTFOLIO_DATA;

  const pillars = [
    {
      icon: <Layout className="w-6 h-6 text-cyan-400" />,
      title: "Frontend Engineering & API Integration",
      description: "Building reactive UIs with React.js & Tailwind CSS, implementing client-side form validations, and seamlessly integrating REST APIs for end-to-end performance."
    },
    {
      icon: <Server className="w-6 h-6 text-teal-400" />,
      title: "Backend, Database & Validations",
      description: "Architecting RESTful APIs using Node.js & Express.js with robust payload validations, MongoDB schema design, JWT Auth, and RBAC authorization."
    },
    {
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      title: "State & Data Fetching",
      description: "Eliminating redundant API requests and optimizing app performance using RTK Query (Redux Toolkit) and Axios."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Clean Code, Quality & Folder Structure",
      description: "Structuring scalable enterprise folder architectures, writing clean, highly readable & reusable modular code, and maintaining strict production quality standards."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-950/60 relative">
      <div className="max-w-[1536px] mx-auto px-6 sm:px-10 lg:px-12">
        
        <SectionHeader
          badge="About Me"
          title="Results-Driven"
          highlight="MERN Stack Developer"
          subtitle="Passionate about building scalable full-stack web applications with modern architecture."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-cyan-400" />
                Professional Summary
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            {/* Location & Quick Details */}
            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-800 text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-xs font-semibold text-white">Coimbatore, TN</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-800 text-teal-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Current Role</p>
                  <p className="text-xs font-semibold text-white">MERN Stack Developer</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-800 text-blue-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email</p>
                  <p className="text-xs font-semibold text-white truncate max-w-[140px]" title={personalInfo.email}>
                    {personalInfo.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-950/20 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 group-hover:scale-110 transition-transform">
                    {pillar.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
