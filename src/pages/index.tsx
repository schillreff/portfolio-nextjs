import AnimatedText from "@/components/AnimatedTitle";
import HireMe from "@/components/HireMe";
import { LinkArrowIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Banner from "./../../public/images/banner.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Schillreff | Home Page</title>
      </Head>
      <main className="container mx-auto flex items-center text-dark dark:text-light min-h-screen px-4 sm:px-6 lg:px-8">
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={Banner}
                alt="banner"
                placeholder="blur"
                blurDataURL="./../../public/images/banner.svg"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium text-justify">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects, showcasing my expertise in full-stack development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="./resume/resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 
                rounded-lg text-lg font-semibold hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light 
                border-2 border-solid border-transparent hover:border-dark dark:hover:border-light"
                >
                  Resume <LinkArrowIcon className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:leandroschillreff@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  );
}
