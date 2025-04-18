import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';

interface IDetaisl {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({ position, company, companyLink, time, address, work }: IDetaisl) => {
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
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-justify">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Experience</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark dark:bg-light origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Front-End Developer"
            company="Kenzie"
            companyLink="https://www.kenzie.com.br/"
            time="2022-2023"
            address="São José dos Pinhais, PR"
            work="Guidance and assistance for students in the programming area in 
            activities relating to programming logic, CSS, HTML, React, NodeJS, 
            Python."
          />
          <Details
            position="Logic Instructor of Programming"
            company="UFRR"
            companyLink="https://ufrr.br/"
            time="2020-2021"
            address="Boa Vista, RR"
            work="Guidance and assistance for students in the programming area in 
            activities relating to programming logic, Python."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
