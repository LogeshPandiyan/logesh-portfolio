import { useState, useEffect } from 'react';

const TextRotator = ({
  developerRoles = [
    'Full Stack MERN Developer',
    'PERN Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'React.js & Node.js Specialist'
  ],
  interval = 2500
}) => {

  const [index, setIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('opacity-100 translate-y-0');

  useEffect(() => {
    const timer = setInterval(() => {
      // 1. Slide up and fade out current text
      setAnimationClass('opacity-0 -translate-y-6 scale-95');

      setTimeout(() => {
        // 2. Change word index
        setIndex((prevIndex) => (prevIndex + 1) % developerRoles.length);
        // 3. Prepare next word at bottom
        setAnimationClass('opacity-0 translate-y-6 scale-95 duration-0');

        // 4. Slide up into view cleanly
        setTimeout(() => {
          setAnimationClass('opacity-100 translate-y-0 scale-100 duration-500');
        }, 30);
      }, 350);
    }, interval);

    return () => clearInterval(timer);
  }, [developerRoles.length, interval]);

  return (
    <div className="h-10 overflow-hidden inline-flex items-center justify-center lg:justify-start">
      <span
        className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400
           via-teal-300 to-blue-400 font-extrabold transition-all ease-out transform ${animationClass}`
      }
      >
        {developerRoles[index]}
      </span>
    </div>
  );
};

export default TextRotator;
