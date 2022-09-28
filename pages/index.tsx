import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import Header from '../components/Header';

const Home: NextPage = () => {
  // Checks for theme preference
  if (typeof window !== 'undefined') {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  return (
    <div className="bg-blue-300 dark:bg-black">
      <Head>
        <title>Nathan&apos;s Portfolio</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  );
};

export default Home;
