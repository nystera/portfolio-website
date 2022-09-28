import React, { useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import { useTheme } from './UseContext';
type Props = {};

const Header = (props: Props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="sticky top-0 p-5 flex items-start justify-between
      max-w-7xl mx-auto xl:items-center"
    >
      <div className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/nathan-yeo/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/nystera/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://t.me/nystera/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://wasap.my/6593894987"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      <div className="flex flex-row items-center text--gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-gray-400">
          Get In Touch
        </p>
        <button
          id="theme-toggle"
          type="button"
          className="text-gray-500 hover:bg-gray-100 focus:ring-gray-200 focus:outline-none focus:ring-4   rounded-lg text-sm p-2.5
          dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          onClick={() => toggleTheme()}
        >
          click Me
        </button>
      </div>
    </header>
  );
};

export default Header;
