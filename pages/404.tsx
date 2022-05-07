import Link from "next/link";
import React from "react";
import Lottie from "react-lottie";
import anim from "../assets/animation/404.json";
function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: anim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="container mx-auto">
      <div className="h-20" />
      <Lottie options={defaultOptions} width={400}></Lottie>
      <div className="flex justify-center">
        <Link href={"/"}>Back to Home</Link>
      </div>
    </div>
  );
}

export default NotFound;
