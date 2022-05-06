import { NextPage } from "next";
import app from "../../appwrite/config";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import { login } from "../../types/auth";
import uniqid from "uniqid";
import Head from "next/head";
import { toast } from "react-toastify";
import AppButton from "../../components/AppButton";
import AppInput from "../../components/AppInput";

const Login: NextPage = () => {
  const route = useRouter();
  const [user, Setuser] = useState<login>({
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    if (user.email === "" || user.password === "") {
      toast.error("All fields are mandatory");
      return false;
    }
    app.account
      .createSession(user.email, user.password)
      .then((Response) => {
        toast.success("Suucess");
        route.push("/dashboard");
      })
      .catch((Error) => {
        toast.error(Error.message);
      });
  };
  return (
    <>
      <Head>
        <title>Login - LinkHub</title>
      </Head>
      <div className="container mx-auto h-full py-20 flex justify-center items-center ">
        <div className="card w-[400px] border shadow-2xl">
          <div className="card-body">
            <div className="card-title">Login to your Account</div>

            <AppInput
              label="Your Email"
              triggerChange={(e) => {
                Setuser({ ...user, email: e });
              }}
              type="email"
            />
            <AppInput
              label="Your Password"
              triggerChange={(e) => {
                Setuser({ ...user, password: e });
              }}
              type="password"
            />
            <AppButton
              label="Login"
              triggerClick={() => {
                handleSubmit();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
