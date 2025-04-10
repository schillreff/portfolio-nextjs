import Link from 'next/link';
import Layout from './Layout';

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium 
    text-lg dark:text-light dark:border-light"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Layout className="py-8 flex items-center justify-between">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
          <div className="flex items-center">
            Built With{' '}
            <span className="text-primary dark:text-primaryDark text-2xl px-1">
              &#9825;
            </span>
            by&nbsp;
            <Link
              href="https://github.com/schillreff"
              target="_blank"
              className="underline underline-offset-2"
            >
              Schillreff
            </Link>
          </div>
          <Link
            href="https://www.linkedin.com/in/leandroschillreff"
            target="_blank"
            className="underline underline-offset-2"
          >
            Say Hello
          </Link>
        </Layout>
      </div>
    </footer>
  );
};

export default Footer;
