import Link from 'next/link';
import { CircularText } from './Icons';

const HireMe = () => {
  return (
    <div
      className="fixed ml-0 bottom-4 flex items-center justify-center
      overflow-hidden"
    >
      <div className="w-40 h-40 flex items-center justify-center relative">
        <CircularText className="fill-dark dark:fill-light animate-spin-slow" />
        <Link
          href="mailto:leandroschilreff@gmail.com"
          className="flex items-center 
        justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
        bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 
        rounded-full font-semibold hover:bg-light hover:text-dark 
        dark:bg-light dark:text-dark dark:border-light dark:hover:bg-dark 
        dark:hover:text-light"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
