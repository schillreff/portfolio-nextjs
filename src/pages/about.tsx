import AnimatedTitle from "@/components/AnimatedTitle";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import { SchillreffImage } from "@/components/Images";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import { useEffect, useRef } from "react";

interface IAnimatedNumbers {
  value: number;
}

const AnimatedNumbers = ({ value }: IAnimatedNumbers) => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && parseInt(latest.toFixed(0)) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

export default function About() {
  return (
    <>
      <Head>
        <title>Schillreff | About Page</title>
      </Head>
      <main
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col 
      items-center justify-center dark:text-light"
      >
        <Layout className="pt-16 pb-16">
          <AnimatedTitle text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16 ">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium text-justify">
                Hi, I'm Leandro Schilreff, a web developer and UI/UX designer
                with a passion for creating beautiful, functional, and
                user-centered digital experiences. With 2 years of experience in
                the field. I am always looking for new and innovative ways to
                bring my clients' visions to life.
              </p>
              <p className="font-medium text-justify my-4">
                I believe that design is about more than just making things look
                pretty - it's about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium text-justify">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 
            border-solid border-dark dark:border-light bg-light dark:bg-dark p-8"
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[calc(100%+12px)] 
              h-[calc(100%+18px)] rounded-[2rem] bg-dark dark:bg-light"
              />
              <SchillreffImage className="w-full h-auto rounded-2xl" />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  complete projects
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
