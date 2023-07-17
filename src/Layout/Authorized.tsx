import type { PropsWithChildren } from "react";
import AuthNav from "../components/AuthNav";
import Header from "../components/Header";

const AuthorizedLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-between">
      <div className="w-full flex flex-col items-center">
        <Header />
        <div className="container px-2">
          <div className="my-4"></div>
          <AuthNav />
          {children}
          <div className="my-4"></div>
        </div>
      </div>
      <footer className="w-full px-6 py-6 shadow-md">
        <p>© Copyright E._Dorta</p>
      </footer>
    </div>
  );
};

export default AuthorizedLayout;
