import type { PropsWithChildren } from "react";
import AuthNav from "../components/AuthNav";
import Header from "../components/Header";

const AuthorizedLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="container px-2">
        <div className="my-4"></div>
        <AuthNav />
        {children}
        <div className="my-4"></div>
        <footer className="w-full py-6 shadow-md">
          <p>Footer</p>
        </footer>
      </div>
    </div>
  );
};

export default AuthorizedLayout;
