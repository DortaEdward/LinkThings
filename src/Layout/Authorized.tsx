import type { PropsWithChildren } from "react";
import AuthNav from "../components/AuthNav";
import Header from "../components/Header";

const AuthorizedLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="container">
      <div className="my-4"></div>
        <AuthNav />
        {children}
      </div>
    </div>
  );
};

export default AuthorizedLayout;
