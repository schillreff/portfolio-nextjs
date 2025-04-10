import { motion } from 'framer-motion';

interface ISkill {
  name: string;
  x: string;
  y: string;
}

const Skill = ({ name, x, y }: ISkill) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full 
        font-semibold bg-dark text-light py-3 px-5 shadow-dark 
        cursor-pointer absolute dark:bg-light dark:text-dark"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div
        className="w-full h-[960px] relative flex items-center justify-center 
      rounded-full bg-circularLight dark:bg-circularDark"
      >
        <motion.div
          className="flex items-center justify-center rounded-full 
        font-semibold bg-dark text-light p-5 shadow-dark cursor-pointer 
        dark:bg-light dark:text-dark"
          whileHover={{ scale: 1.05 }}
        >
          Full Stack
        </motion.div>
        <Skill name="HTML" x="0vw" y="12vw" />
        <Skill name="CSS" x="0vw" y="-12vw" />
        <Skill name="TypeScript" x="12vw" y="0vw" />
        <Skill name="Python" x="-12vw" y="0vw" />
        <Skill name="ReactJS" x="16vw" y="14vw" />
        <Skill name="NextJS" x="-16vw" y="-14vw" />
        <Skill name="NestJS" x="-16vw" y="14vw" />
        <Skill name="Django" x="16vw" y="-14vw" />
        <Skill name="Figma" x="-30vw" y="8vw" />
        <Skill name="Tailwind CSS" x="30vw" y="-8vw" />
        <Skill name="SQL" x="-30vw" y="-8vw" />
        <Skill name="NoSQL" x="30vw" y="8vw" />
      </div>
    </>
  );
};

export default Skills;
