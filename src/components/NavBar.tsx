import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { GithubIcon, LinkedinIcon, XIcon } from "./Icons";
import Logo from "./Logo";

interface ICustomLinkProps {
  href: string;
  title: string;
  className: string;
}

const CustomLink = ({ href, title, className = "" }: ICustomLinkProps) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
      group-hover:w-full transition-[width] duration-300 ${
        router.asPath === href ? "w-full" : "w-0"
      }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className=" container mx-auto h-16 font-medium flex items-center justify-between px-4 sm:px-6 lg:px-8">
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
          <GithubIcon className="w-8 h-auto" />
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
          <LinkedinIcon className="w-8 h-auto" />
        </motion.a>
        <motion.a
          href="https://x.com"
          target="_blank"
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <XIcon className="w-8 h-auto" />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
