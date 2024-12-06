import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

interface IDetaisl {
  type: string;
  time: string;
  place: string;
  info: string;
}

const Details = ({ type, time, place, info }: IDetaisl) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col 
    items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full text-justify">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark dark:bg-light origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Full Stack Web Development Course"
            time="2021-2022"
            place="Kenzie Academy"
            info="Full Stack Development course that covers Front End 
            and Back End technologies in addition to soft skills necessary for 
            the job market. Between languages and technologies learned include 
            HTML, CSS, JavaScript, TypeScript, React, Node.js, Python and SQL."
          />
          <Details
            type="Full Stack Web Development Course"
            time="2021-2022"
            place="Kenzie Academy"
            info="Full Stack Development course that covers Front End 
            and Back End technologies in addition to soft skills necessary for 
            the job market. Between languages and technologies learned include 
            HTML, CSS, JavaScript, TypeScript, React,     Node.js, Python and SQL."
          />
        </ul>  
      </div>
    </div>
  );
};

export default Education;
