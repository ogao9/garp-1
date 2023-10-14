import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    {/* <div className="">I am the body</div> */}
    <div className="flex-1">
      {props.children}
    </div>
  </div >
);

export default Layout;
