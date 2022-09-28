import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import Header from '../components/Header';
import { ThemeProvider } from '../components/UseContext';

const Home: NextPage = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

export default Home;
