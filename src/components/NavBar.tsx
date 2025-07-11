import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { GithubIcon, LinkedinIcon, MoonIcon, SunIcon, XIcon } from './Icons';
import Logo from './Logo';
import UseThemeSwitcher from './hooks/UseThemeSwitcher';

interface ICustomLinkProps {
  href: string;
  title: string;
  className: string;
  toggle?: () => void;
}

const CustomLink = ({ href, title, className = '' }: ICustomLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] duration-300 ${
        router.asPath === href ? 'w-full' : 'w-0'
      }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = '', toggle }: ICustomLinkProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (toggle) toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 
          -bottom-0.5 group-hover:w-full transition-[width] duration-300 
          ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [activeTheme, setActiveTheme] = UseThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <header
    //   className=" container mx-auto h-16 font-medium flex items-center
    // justify-between px-4 sm:px-6 lg:px-8 dark:text-light"
    // >
    <header
      className="w-full px-32 py-8 font-medium flex items-center 
     justify-between dark:text-light relative"
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 
            ease-out h-0.5 w-6 rounded-sm 
            ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 
            ease-out h-0.5 w-6 rounded-sm my-0.5 
            ${isOpen ? 'opacity-0' : 'opacity-100'}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 
            ease-out h-0.5 w-6 rounded-sm 
            ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/contact" title="Contact" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/schillreff"
            target="_blank"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            className="mr-3"
          >
            <GithubIcon className="" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/leandroschillreff"
            target="_blank"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
            className="mr-3"
          >
            <LinkedinIcon className="" />
          </motion.a>
          <motion.a
            href="https://x.com"
            target="_blank"
            whileHover={{
              y: -2,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <XIcon className="" />
          </motion.a>

          <button
            onClick={() => setActiveTheme(activeTheme === 'dark' ? 'light' : 'dark')}
            className={`ml-3 flex items-center justify-center rounded-full p-1 w-[28px] h-[28px] 
            ${activeTheme === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
            type="button"
          >
            {activeTheme === 'dark' ? (
              <MoonIcon className="fill-dark" />
            ) : (
              <SunIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center 
          fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 
          dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contact"
              title="Contact"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a
              href="https://github.com/schillreff"
              target="_blank"
              whileHover={{
                y: -2,
              }}
              whileTap={{ scale: 0.9 }}
              className="mr-3"
            >
              <GithubIcon className="text-light dark:text-dark" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/leandroschillreff"
              target="_blank"
              whileHover={{
                y: -2,
              }}
              whileTap={{ scale: 0.9 }}
              className="mr-3"
            >
              <LinkedinIcon className="" />
            </motion.a>
            <motion.a
              href="https://x.com"
              target="_blank"
              whileHover={{
                y: -2,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <XIcon className="text-light dark:text-dark" />
            </motion.a>

            <button
              onClick={() => setActiveTheme(activeTheme === 'dark' ? 'light' : 'dark')}
              className={`ml-3 flex items-center justify-center rounded-full p-1 w-[28px] h-[28px] 
            ${activeTheme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}
              type="button"
            >
              {activeTheme === 'dark' ? (
                <MoonIcon className="fill-dark" />
              ) : (
                <SunIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
