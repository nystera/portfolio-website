import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import heroPic from '../public/me.png';
import Link from 'next/link';

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Nathan",
      'Aspiring full-stack developer',
      "{Hobbies: 'bowling', 'football'}",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center
    overflow-hidden"
    >
      <BackgroundCircles />
      <div className="relative object-cover h-64 w-64 mx-auto rounded">
        <Image
          src={heroPic}
          alt="Picture of me"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
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
        </div>
      </div>
    </div>
  );
}

export default Hero;
