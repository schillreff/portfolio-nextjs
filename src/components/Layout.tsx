import { ReactNode } from "react";

interface ILayoutProps {
  className?: string;
  children: ReactNode;
}

const Layout = ({ className = "", children }: ILayoutProps) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light dark:bg-dark ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
