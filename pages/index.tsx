import type { NextPage } from "next";
import Head from "next/head";
import Lottie from "react-lottie";
import app from "../appwrite/config";
import anim from "../assets/animation/link.json";
const Home: NextPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: anim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Head>
        <title>Home - LinkHub</title>
      </Head>
      <section className="container mx-auto">
        <div className="pt-28">
          <div className="md:text-9xl text-3xl text-center font-semibold">
            The Only Link you need
          </div>
          <div>
            <Lottie options={defaultOptions} width={400}></Lottie>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
