import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/future/image';
import mePic from '../public/italy-me.png';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative px-10 text-center
      max-w-7xl justify-evenly items-center
      md:text-left md:flex-row mx-auto"
    >
      <h3 className="header-title">About</h3>
      <motion.div
        className="shrink-0"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.75,
        }}
      >
        <Image
          src={mePic}
          alt="about me"
          className="object-cover border border-black
          w-56 h-56 rounded-full
          md:mb-0 md:rounded-lg md:w-96 md:h-96
          xl:w-[500px] xl:h-[500px]"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10 max-w-3xl">
        <h4 className="text-4xl font-semibold">Here is a little background</h4>
        <p className="text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          voluptas culpa accusamus, necessitatibus nemo illo quidem,
          dignissimos, deserunt nostrum doloribus saepe consequatur accusantium
          natus quod nihil unde enim! Eum soluta, natus dolorum laboriosam,
          totam nemo laborum expedita nulla nisi minus accusantium molestias
          quae quia quis! Quis distinctio quam blanditiis libero maiores
          repellendus, aliquid culpa porro quidem a. Accusantium, delectus
          alias.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
