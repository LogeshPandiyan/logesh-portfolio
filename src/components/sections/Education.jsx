import SectionHeader from '../common/SectionHeader';
import { PORTFOLIO_DATA } from '../../constants/portfolioData';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 bg-slate-950/60 relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-10 lg:px-12">
        
        <SectionHeader
          badge="Academic Background"
          title="Education &"
          highlight="Qualifications"
          subtitle="Strong foundation in Computer Science, Data Structures, Algorithms, and Software Engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-4 sm:p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:shadow-cyan-950/20 group relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Header Row: Graduation Cap Icon (Left) & Score Badge (Right) */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  <div className="bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full inline-flex items-center justify-center">
                    <span className="text-xs font-mono font-bold text-cyan-400 leading-none">
                      {edu.score}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-semibold text-slate-300 mt-1 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    {edu.institution}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{edu.period}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Grade/Stream:</span>
                <span className="text-cyan-300 font-semibold">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
