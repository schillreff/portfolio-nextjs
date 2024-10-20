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
    border border-solid border-dark bg-light shadow-2xl"
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg p-6"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto border border-solid border-dark rounded-3xl"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank">
          <h2>{title}</h2>
        </Link>
        <p>{summary}</p>
        <div>
          <Link href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link href={link} target="_blank">
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
                summary="A website developed using React for buying and selling 
                vehicles, it is also possible to follow the vehicle auction."
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
