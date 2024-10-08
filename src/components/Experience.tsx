import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

interface IDetaisl {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: IDetaisl) => {
  return (
    <li
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col 
    items-center justify-between"
    >
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-justify">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top"
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
            position="Front-End Developer"
            company="Kenzie"
            companyLink="https://www.kenzie.com.br/"
            time="2022-2023"
            address="São José dos Pinhais, PR"
            work="Guidance and assistance for students in the programming area in 
            activities relating to programming logic, CSS, HTML, React, NodeJS, 
            Python."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
