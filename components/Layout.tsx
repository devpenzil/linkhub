import React, { useEffect, useState } from "react";
import app from "../appwrite/config";
import NavBar from "./NavBar";
import { useRouter } from "next/router";

function Layout({ children }: any) {
  const route = useRouter();
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
    <div className=" min-h-screen">
      {route.pathname !== "/[username]" && <NavBar status={isLogged} />}
      {children}
    </div>
  );
}

export default Layout;
