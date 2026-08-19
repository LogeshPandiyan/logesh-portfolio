import { 
  FaReact, 
  FaJs, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaGitAlt, 
  FaDatabase,
  FaUserShield,
} from 'react-icons/fa6';
import { FaPython } from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiExpress, 
  SiMongodb, 
  SiRedux, 
  SiPostman, 
  SiJest, 
  SiRender,
  SiAxios,
  SiMui,
  SiTensorflow
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { BiLogoPostgresql } from 'react-icons/bi';
import { IoLogoVercel } from 'react-icons/io5';
import { IoIosLock } from 'react-icons/io';
import { Globe, Wrench, Brain } from 'lucide-react';

export const getTechIcon = (name) => {
  try {
    const n = name ? name.toLowerCase() : '';

    // 1. Dual / Multi-Tech Combined Icons (Checked FIRST)
    if (n.includes('bootstrap') && n.includes('tailwind')) return (
      <div className="flex items-center gap-1">
        <FaBootstrap className="w-4 h-4 text-purple-400" title="Bootstrap 5" />
        <SiTailwindcss className="w-4 h-4 text-cyan-400" title="Tailwind CSS" />
      </div>
    );
    if (n.includes('node') && n.includes('express')) return (
      <div className="flex items-center gap-1">
        <FaNodeJs className="w-4 h-4 text-green-400" title="Node.js" />
        <SiExpress className="w-4 h-4 text-slate-200" title="Express.js" />
      </div>
    );
    if (n.includes('axios') && (n.includes('rtk') || n.includes('redux'))) return (
      <div className="flex items-center gap-1">
        <SiAxios className="w-4 h-4 text-purple-400" title="Axios" />
        <SiRedux className="w-4 h-4 text-purple-400" title="RTK Query" />
      </div>
    );
    if ((n.includes('jwt') || n.includes('auth')) && n.includes('rbac')) return (
      <div className="flex items-center gap-1">
        <IoIosLock className="w-4 h-4 text-emerald-400" title="JWT Auth" />
        <FaUserShield className="w-4 h-4 text-emerald-400" title="RBAC Architecture" />
      </div>
    );
    if (n.includes('mysql') && n.includes('postgres')) return (
      <div className="flex items-center gap-1">
        <GrMysql className="w-4 h-4 text-blue-400" title="MySQL" />
        <BiLogoPostgresql className="w-4 h-4 text-indigo-400" title="PostgreSQL" />
      </div>
    );
    if (n.includes('vercel') && n.includes('render')) return (
      <div className="flex items-center gap-1">
        <IoLogoVercel className="w-4 h-4 text-slate-100" title="Vercel" />
        <SiRender className="w-4 h-4 text-cyan-400" title="Render" />
        <SiMongodb className="w-4 h-4 text-emerald-400" title="MongoDB Atlas" />
      </div>
    );
    if (n.includes('html5') || n.includes('html') || (n.includes('css3') && !n.includes('tailwind'))) return (
      <div className="flex items-center gap-1">
        <FaHtml5 className="w-4 h-4 text-orange-500" />
        <FaCss3Alt className="w-4 h-4 text-blue-500" />
      </div>
    );

    // 2. Python & AI/ML Icons (Use exact word boundary so 'tailwind' doesn't trigger 'ai')
    if (n.includes('python')) return <FaPython className="w-5 h-5 text-sky-400" />;
    if (n.includes('tensorflow')) return <SiTensorflow className="w-5 h-5 text-orange-500" />;
    if (/\b(ai|ml|cnn|neural)\b/i.test(n) || n.includes('ai &')) return <Brain className="w-5 h-5 text-purple-400" />;

    // 3. Official Single Framework / Library Icons
    if (n.includes('react')) return <FaReact className="w-5 h-5 text-cyan-400" />;
    if (n.includes('mui') || n.includes('material')) return <SiMui className="w-5 h-5 text-blue-400" />;
    if (n.includes('bootstrap')) return <FaBootstrap className="w-5 h-5 text-purple-400" />;
    if (n.includes('tailwind')) return <SiTailwindcss className="w-5 h-5 text-cyan-400" />;

    if (n.includes('vercel')) return <IoLogoVercel className="w-5 h-5 text-slate-100" />;
    if (n.includes('render')) return <SiRender className="w-5 h-5 text-cyan-400" />;
    if (n.includes('atlas')) return <SiMongodb className="w-5 h-5 text-emerald-400" />;
    if (n.includes('node')) return <FaNodeJs className="w-5 h-5 text-green-400" />;
    if (n.includes('express')) return <SiExpress className="w-5 h-5 text-slate-200" />;

    if (n.includes('javascript') || n === 'js' || n.includes('js')) return <FaJs className="w-5 h-5 text-amber-400" />;
    if (n.includes('mongo')) return <SiMongodb className="w-5 h-5 text-emerald-400" />;
    if (n.includes('rtk') || n.includes('redux')) return <SiRedux className="w-5 h-5 text-purple-400" />;
    if (n.includes('axios')) return <SiAxios className="w-5 h-5 text-purple-400" />;

    if (n.includes('mysql')) return <GrMysql className="w-5 h-5 text-blue-400" />;
    if (n.includes('postgres')) return <BiLogoPostgresql className="w-5 h-5 text-indigo-400" />;
    if (n.includes('sql') || n.includes('db')) return <FaDatabase className="w-5 h-5 text-blue-400" />;

    if (n.includes('rbac')) return <FaUserShield className="w-5 h-5 text-emerald-400" />;
    if (n.includes('jwt') || n.includes('auth')) return <IoIosLock className="w-5 h-5 text-emerald-400" />;

    if (n.includes('git')) return <FaGitAlt className="w-5 h-5 text-orange-500" />;
    if (n.includes('postman')) return <SiPostman className="w-5 h-5 text-amber-500" />;
    if (n.includes('jest')) return <SiJest className="w-5 h-5 text-rose-500" />;
    if (n.includes('api')) return <Globe className="w-5 h-5 text-cyan-400" />;

    return <Wrench className="w-5 h-5 text-cyan-400" />;
  } catch {
    return <Wrench className="w-5 h-5 text-cyan-400" />;
  }
};
