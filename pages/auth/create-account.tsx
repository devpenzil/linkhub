import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import app from "../../appwrite/config";
import AppButton from "../../components/AppButton";
import AppInput from "../../components/AppInput";
import { signup } from "../../types/auth";
import uniqid from "uniqid";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const CreateAccount: NextPage = () => {
  const route = useRouter();
  const [user, Setuser] = useState<signup>({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    app.account
      .create(uniqid(), user.email, user.password, user.name)
      .then((Response) => {
        toast.success("Suucess.");
        route.push("/auth/login");
      })
      .catch((Error) => {
        toast.error(Error.message);
      });
  };

  return (
    <>
      <Head>
        <title>Create Account - LinkHub</title>
      </Head>
      <div className="container mx-auto h-full py-20 flex justify-center items-center ">
        <div className="card w-[400px] border shadow-2xl">
          <div className="card-body">
            <div className="card-title">Create an Account</div>
            <AppInput
              label="Your Name"
              triggerChange={(e) => {
                Setuser({ ...user, name: e });
              }}
              type="text"
            />
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
              label="Create Account"
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

export default CreateAccount;
