import React, { Fragment, useState, useEffect } from 'react';
import NavItem from './NavItem';
import { userData } from '../constants';
import { useTheme } from 'next-themes';
import { MenuIcon } from '@heroicons/react/outline';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navItems = [
  { href: '/', name: 'Home' },
  { href: '/projects', name: 'Projects' },
  { href: '/contact', name: 'Contact' },
];

const Nav = ({ isOpen, setIsOpen }: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currTheme = theme === 'system' ? systemTheme : theme;

  return (
    <nav className="w-full p-6 md:px-12 lg:px-0 lg:max-w-4xl 2xl:max-w-6xl mx-auto fixed top-0 inset-x-0 backdrop-blur-lg z-10">
      <div className="flex justify-between items-center">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className={`w-9 h-9 rounded-lg flex items-center md:hidden`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon className="w-4/5 h-4/5 text-blue-1100 dark:text-indigo-100" />
        </button>

        <ul className="flex items-center space-x-6">
          {navItems.map(({ href, name }) => (
            <Fragment key={name}>
              <NavItem href={href} name={name} />
            </Fragment>
          ))}
        </ul>

        <div className="flex justify-between space-x-3">
          <a
            href={userData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg flex items-center justify-center hover:ring-2 ring-rose-600 dark:ring-orange-500 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-blue-1100 dark:fill-indigo-100"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href={userData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg flex items-center justify-center hover:ring-2 ring-rose-600 dark:ring-orange-500 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="w-5 h-5 fill-blue-1100 dark:fill-indigo-100"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>

          {mounted && (
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:ring-2 ring-rose-600 dark:ring-orange-500  transition-all"
              onClick={() => {
                setTheme(currTheme === 'dark' ? 'light' : 'dark');
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-blue-1100 dark:text-indigo-100"
              >
                {currTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
