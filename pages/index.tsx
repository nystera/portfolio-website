import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { ThemeProvider } from '../components/UseContext';

const Home: NextPage = () => {
  return (
    <ThemeProvider>
      <div
        className="h-screen snap-y snap-mandatory overflow-scroll z-0
      bg-light-bg  text-light-primary
      dark:bg-dark-bg dark:text-dark-primary"
      >
        <Head>
          <title>Nathan&apos;s Portfolio</title>
        </Head>
        <Header />
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* Experience */}
        {/* Skills */}
        {/* Projects */}
        {/* Contact Me */}
      </div>
    </ThemeProvider>
  );
};

export default Home;
