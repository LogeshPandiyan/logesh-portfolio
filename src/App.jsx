import { useState, useEffect, useRef } from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const isClickScrollingRef = useRef(false);

  useEffect(() => {
    // 1. Initial Load: Extract clean path or hash from URL (e.g. /about, /projects/dsms or #about)
    const rawPath = window.location.pathname.replace('/', '').toLowerCase();
    const rawHash = window.location.hash.replace('#', '').toLowerCase();
    const fullPath = rawPath || rawHash || 'home';
    const baseSection = fullPath.split('/')[0] || 'home';

    const validSections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
    const targetSection = validSections.includes(baseSection) ? baseSection : 'home';

    const targetElement = document.getElementById(targetSection);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      setActiveSection(targetSection);
      if (!window.location.pathname.startsWith('/projects/')) {
        window.history.replaceState(null, '', `/${targetSection}`);
      }
    } else {
      window.history.replaceState(null, '', '/home');
    }

    // 2. Scroll event handler with click-scroll lock to eliminate flickering/blinking
    const handleScroll = () => {
      // If user clicked a nav link, skip scroll detection until smooth scroll finishes
      if (isClickScrollingRef.current) return;

      const scrollY = window.scrollY;
      if (scrollY < 100) {
        setActiveSection('home');
        if (window.location.pathname !== '/home' && !window.location.pathname.startsWith('/projects/')) {
          window.history.replaceState(null, '', '/home');
        }
        return;
      }

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150;
        const sectionId = current.getAttribute('id');

        if (sectionId && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
          if (window.location.pathname !== `/${sectionId}` && !window.location.pathname.startsWith('/projects/')) {
            window.history.replaceState(null, '', `/${sectionId}`);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Smooth nav click scroll with temporary lock to prevent URL flickering
  const handleNavClick = (sectionId, path) => {
    isClickScrollingRef.current = true;
    setActiveSection(sectionId);
    window.history.pushState(null, '', path);

    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Release click-scroll lock after smooth scroll animation completes (700ms)
    setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 700);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Header Navbar */}
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
