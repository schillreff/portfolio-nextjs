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
      className="w-full flex items-center justify-between rounded-3xl 
    border border-solid border-dark bg-light shadow-2xl p-6"
    >
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
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2  w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark text-justify">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank">
            <GithubIcon className="w-[48px] h-[48px]" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-6 rounded-lg bg-dark text-light py-2 px-6 text-lg 
            font-semibold"
          >
            Visit Project
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
          <AnimatedTitle text="Imagination Trumps Knowledge!" />
          <div className="grid grid-cols-12 gap-24">
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
            <div className="col-span-6">Project-1</div>
            <div className="col-span-6">Project-2</div>
          </div>
        </Layout>
      </main>
    </>
  );
}
