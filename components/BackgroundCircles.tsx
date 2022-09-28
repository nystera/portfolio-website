import { motion } from 'framer-motion';
import React from 'react';

const BackgroundCircles = () => {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{
        scale: [0.5, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
    >
      <div
        className="absolute rounded-full border-2 border-dark-bg opacity-20 h-[900px] w-[900px] mt-[625px]
      animate-pulse dark:border-light-bg"
      />
      <div
        className="z-0 absolute rounded-full border-2  h-[800px] w-[800px] mt-[625px]
      animate-ping-slow duration-500
      border-light-secondary dark:border-dark-secondary"
      />
    </motion.div>
  );
};

export default BackgroundCircles;
