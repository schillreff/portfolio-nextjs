// import HireMe from '@/components/HireMe';
import AnimatedTitle from '@/components/AnimatedTitle';
import { LinkArrowIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Banner from './../../public/images/banner.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Schillreff | Home Page</title>
      </Head>
      {/* <main className="container mx-auto flex items-center text-dark dark:text-light min-h-screen px-4 sm:px-6 lg:px-8"> */}
      <main className="flex items-center w-full min-h-screen text-dark dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 lg:w-full">
              <Image
                src={Banner}
                alt="banner"
                placeholder="blur"
                blurDataURL="./../../public/images/banner.svg"
                className="w-full h-auto md:inline-block"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full">
              <AnimatedTitle
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center 
                lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium text-justify">
                As a skilled full-stack developer, I am dedicated to turning ideas into
                innovative web applications. Explore my latest projects, showcasing my
                expertise in full-stack development.
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
        {/* <HireMe /> */}
      </main>
    </>
  );
}
