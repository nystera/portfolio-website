import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/future/image';
import mePic from '../public/italy-me.png';

const About = () => {
  return (
    <div
      className="h-screen flex flex-col relative text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] text-2xl
      text-light-secondary dark:text-dark-secondary"
      >
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
        }}
      >
        <Image
          src={mePic}
          alt="about me"
          className="-mb-20 flex-shrink-0 w-56 h-56"
        />
      </motion.div>
    </div>
  );
};

export default About;
