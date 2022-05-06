/* eslint-disable @next/next/no-img-element */
import React from "react";
import app from "../appwrite/config";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
const NavBar = (status: any) => {
  const router = useRouter();
  const handleLogout = () => {
    app.account
      .deleteSessions()
      .then((Response) => {
        toast.success("logged out");
        router.push("/");
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  return (
    <div className="container mx-auto pt-4">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a
            className="btn btn-ghost normal-case text-xl"
            onClick={() => {
              router.push("/");
            }}
          >
            LinkHub
          </a>
        </div>
        <div className="flex-none">
          {status.status ? (
            <>
              <div className="dropdown dropdown-end">
                <label tabIndex={0}>
                  <div className="avatar cursor-pointer">
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src="https://api.lorem.space/image/face?hash=3174"
                        alt="user"
                      />
                    </div>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li onClick={handleLogout}>
                    <a>Dashboard</a>
                  </li>
                  <li onClick={handleLogout}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              {router.pathname === "/auth/create-account" ||
                (router.pathname === "/" && (
                  <button
                    className="btn btn-ghost"
                    onClick={() => {
                      router.push("/auth/login");
                    }}
                  >
                    Login
                  </button>
                ))}
              {router.pathname === "/auth/login" && (
                <button
                  className="btn btn-ghost"
                  onClick={() => {
                    router.push("/auth/create-account");
                  }}
                >
                  Create Account
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
