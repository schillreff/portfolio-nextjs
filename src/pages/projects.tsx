import AnimatedTitle from "@/components/AnimatedTitle";
import Layout from "@/components/Layout";
import { image } from "framer-motion/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface IFeaturedProject {
  type: string;
  title: string;
  summary: string;
  img: string;
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
    <article>
      <Link href={link} target="_blank">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Schillreff | Projects Page</title>
      </Head>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedTitle text="Imagination Trumps Knowledge!" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">Featured Project</div>
            <div className="col-span-6">Project-1</div>
            <div className="col-span-6">Project-2</div>
          </div>
        </Layout>
      </main>
    </>
  );
}
