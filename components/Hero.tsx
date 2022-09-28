import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/future/image';
import heroPic from '../public/me.png';
import Link from 'next/link';
import { useTheme } from './UseContext';
import { motion } from 'framer-motion';

function Hero() {
  const { theme } = useTheme();
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Nathan :)",
      "{ 'hobbies': 'bowling', 'football' }",
      "<div className='singapore' />",
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <div
      className="h-screen flex flex-col items-center justify-center text-center
    overflow-hidden"
    >
      <BackgroundCircles />
      <motion.div
        initial={{ opacity: 0, y: -500 }}
        animate={{
          y: 0,
          opacity: 100,
        }}
        transition={{
          duration: 1.5,
        }}
        className="relative z-20 flex flex-row md:space-x-4 pb-32"
      >
        <Link href="#about">
          <button className="hero-button">About</button>
        </Link>
        <Link href="#experience">
          <button className="hero-button">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="hero-button">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="hero-button">Project</button>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 100,
        }}
        transition={{
          duration: 20,
        }}
      >
        <Image
          src={heroPic}
          alt="Picture of me"
          className="relative rounded-full h-64 w-64 mx-auto mb-32 object-cover
          transition duration-300 hover:scale-110"
        />
      </motion.div>
      <motion.div
        className="z-20"
        initial={{ opacity: 0, y: 500 }}
        animate={{
          y: 0,
          opacity: 100,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <h2
          className="text-xl uppercase pb-3 tracking-[15px]
        text-light-secondary dark:text-dark-secondary"
        >
          Software Engineer
        </h2>
        <h1 className="text-3xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor={theme === 'light' ? '#19194d' : '#b3ffff'} />
        </h1>
      </motion.div>
    </div>
  );
}

export default Hero;
