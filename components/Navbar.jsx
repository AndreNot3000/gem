'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Words + icons (optional)
const words = [
  { text: 'GemX', icon: '💎' },
  { text: 'Reliable', icon: '🔒' },
  { text: 'Secure', icon: '🛡️' },
  { text: 'Swift', icon: '⚡' },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3500); // change every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-[120px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index} // important! forces re-render each cycle
          initial={{ opacity: 0, x: -120, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 120, scale: 0.8 }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent flex items-center">
            <span className="mr-2">{words[index].icon}</span>
            {words[index].text}
            <motion.span
              className="ml-1 text-white dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 0.5 }}
            >
              |
            </motion.span>
          </h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
