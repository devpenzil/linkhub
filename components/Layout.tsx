import React from "react";
import NavBar from "./NavBar";

function Layout({ children }: any) {
  return (
    <div className="container mx-auto">
      <NavBar />
      {children}
    </div>
  );
}

export default Layout;
