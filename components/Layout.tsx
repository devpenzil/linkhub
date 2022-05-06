import React, { useEffect, useState } from "react";
import app from "../appwrite/config";
import NavBar from "./NavBar";

function Layout({ children }: any) {
  const [isLogged, SetisLogged] = useState(false);
  useEffect(() => {
    app.account
      .getSessions()
      .then((Response) => {
        SetisLogged(true);
      })
      .catch((Error) => {
        SetisLogged(false);
      });
  }, []);
  return (
    <div className="container mx-auto min-h-screen">
      <NavBar status={isLogged} />
      {children}
    </div>
  );
}

export default Layout;
