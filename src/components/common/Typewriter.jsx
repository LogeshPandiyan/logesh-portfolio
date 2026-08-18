import React, { useState, useEffect } from 'react';

const Typewriter = ({
  words = [
    'Full Stack MERN Developer',
    'Full Stack PERN Developer',
    'Frontend React.js  Developer',
    'Backend Node.js Developer',
  ],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1800
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullWord = words[wordIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(currentFullWord.substring(0, currentText.length + 1));

        // If completed typing current word
        if (currentText.length + 1 === currentFullWord.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      } else {
        // Deleting backward
        setCurrentText(currentFullWord.substring(0, currentText.length - 1));

        // If completed deleting
        if (currentText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }
    };

    const timer = setTimeout(
      handleType,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-flex items-center gap-1">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 font-extrabold">
        {currentText}
      </span>
      <span className="w-[3px] h-6 bg-cyan-400 inline-block animate-pulse rounded-full"></span>
    </span>
  );
};

export default Typewriter;
