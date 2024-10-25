import AnimatedTitle from "@/components/AnimatedTitle";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import VehicleCommerceImage from "./../../public/images/projects/vehicles-commerce.png";

interface IFeaturedProject {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  github: string;
}

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
}: IFeaturedProject) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
       rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl p-8"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[calc(100%+12px)] 
      h-[calc(100%+14px)] rounded-br-3xl rounded-[2.5rem] bg-dark dark:bg-light"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg p-6"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto border border-solid border-dark rounded-xl"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 gap-1">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2  w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light text-justify">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank">
            <GithubIcon className="w-[54px] h-[54px] dark:text-light" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-6 rounded-lg bg-dark dark:bg-light text-light dark:text-dark py-2 px-6 text-lg 
            font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

interface IProject {
  type: string;
  title: string;
  img: StaticImageData;
  link: string;
  github: string;
}

const Project = ({ type, title, img, link, github }: IProject) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border 
    border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[calc(100%+12px)] 
      h-[calc(100%+14px)] rounded-br-3xl rounded-[2rem] bg-dark dark:bg-light"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto border border-solid border-dark rounded-xl"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline dark:text-light"
          >
            Visit
          </Link>
          <Link href={github} target="_blank">
            <GithubIcon className="w-[40px] h-[40px] dark:text-light" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Schillreff | Projects Page</title>
      </Head>
      <main
        className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex 
      flex-col items-center justify-center"
      >
        <Layout className="pt-16">
          <AnimatedTitle
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Vehicles Commerce"
                summary="A simple website for buying and selling vehicles, 
                it is also possible to follow auctions and place bids. Developed
                 using React, Styled Components and Context API."
                link="https://github.com/schillreff/vehicles-commerce-front.git"
                github="https://github.com/schillreff/vehicles-commerce-front.git"
                img={VehicleCommerceImage}
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Featured Project"
                title="Vehicles Commerce"
                link="https://github.com/schillreff/vehicles-commerce-front.git"
                github="https://github.com/schillreff/vehicles-commerce-front.git"
                img={VehicleCommerceImage}
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Featured Project"
                title="Vehicles Commerce"
                link="https://github.com/schillreff/vehicles-commerce-front.git"
                github="https://github.com/schillreff/vehicles-commerce-front.git"
                img={VehicleCommerceImage}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
