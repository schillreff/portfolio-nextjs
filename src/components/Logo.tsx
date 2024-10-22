import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion.create(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-[6rem] h-8 bg-dark text-light flex items-center justify-center 
        rounded-full text-2xl font-bold border-2 border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: [
            "#121212",
            "#833AB4",
            "#FD1D1D",
            "#58E6D9",
            "#FCB045",
            "#B63E96",
            "#833AB4",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        LS
      </MotionLink>
    </div>
  );
};

export default Logo;
