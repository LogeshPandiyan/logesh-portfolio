import SectionHeader from '../common/SectionHeader';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { ShieldCheck, Server, Cpu, Layout, Award, MapPin, Building2, Mail } from 'lucide-react';

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
      <div className="max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-12">
        
        <SectionHeader
          badge="About Me"
          title="Results-Driven"
          highlight="MERN Stack Developer"
          subtitle="Passionate about building scalable full-stack web applications with modern architecture."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 2 Separate Cards (Professional Summary + Quick Details) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            
            {/* Card 1: Professional Summary */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xl flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Award className="w-6 h-6 text-cyan-400 shrink-0" />
                  Professional Summary
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  👋 <strong className="text-white font-bold">Hi, I'm Logesh P</strong>, Computer Science Graduate and Associate MERN Stack Developer with hands-on experience building scalable, secure, and production-oriented full-stack web applications. Skilled in <span className="text-cyan-400 font-bold">React.js, JavaScript, Node.js, Express.js, and MongoDB</span>, with practical experience developing RESTful APIs, responsive user interfaces, authentication and authorization systems, and <span className="text-cyan-400 font-bold">Role-Based Access Control (RBAC)</span>.
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-3 lg:pt-4 border-t border-slate-800/60 mt-3 lg:mt-4">
                Experienced in designing and developing real-world applications such as <strong className="text-white font-semibold">Digital Document Management Systems (DSMS)</strong> and <strong className="text-white font-semibold">Project Management Systems (PMS)</strong>, focusing on clean architecture, reusable components, efficient API integration, data management, and maintainable code. Strong understanding of modern React development, state management, API handling, and full-stack application workflows, with a continuous focus on improving code quality, scalability, and user experience.
              </p>
            </div>

            {/* Card 2: Quick Location & Role Details Box */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400 shrink-0 border border-slate-700/60">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-400">Location</p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate">Coimbatore, TN</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-teal-400 shrink-0 border border-slate-700/60">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-400">Current Role</p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate">MERN Stack Developer</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-blue-400 shrink-0 border border-slate-700/60">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-400">Email</p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate max-w-full" title={personalInfo.email}>
                      {personalInfo.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-950/20 group flex flex-col justify-center"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 group-hover:scale-110 transition-transform shrink-0">
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
