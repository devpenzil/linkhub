/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Email from "../assets/icons/Email";
import Whatsapp from "../assets/icons/Whatsapp";
import { preview } from "../types/dashboard";

function Preview({ data }: any) {
  const [links] = useState(data?.documents || null);
  console.log(links);

  return (
    <div className="w-full h-full p-5 flex flex-col items-center mt-4">
      <div className="avatar ">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://api.lorem.space/image/face?hash=3174" />
        </div>
      </div>
      <div className="text-2xl font-bold mt-2">Ajo Alex</div>
      <div className="text-justify text-sm font-light mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In harum ad
        suscipit veniam ex ass facere sequi rem expedita at.
      </div>
      <div className="mt-4 w-full">
        {links?.email !== " " && (
          <button className="btn-primary btn btn-block rounded-full mt-2 gap-3">
            {/* <Whatsapp /> */}
            Email
          </button>
        )}
        {links?.whatsapp !== null && (
          <button className="btn-primary btn btn-block rounded-full mt-2 gap-3">
            {/* <Whatsapp /> */}
            Whatsapp
          </button>
        )}
        {links?.instagram !== null && (
          <button className="btn-primary btn btn-block rounded-full mt-2 gap-3">
            {/* <Whatsapp /> */}
            Instagram
          </button>
        )}
        {links?.Twitter !== null && (
          <button className="btn-primary btn btn-block rounded-full mt-2 gap-3">
            {/* <Whatsapp /> */}
            Twitter
          </button>
        )}
        {links?.github !== null && (
          <button className="btn-primary btn btn-block rounded-full mt-2 gap-3">
            {/* <Whatsapp /> */}
            Github
          </button>
        )}
        {links?.Linkedin !== null && (
          <button className="btn-primary btn btn-block rounded-full mt-2 gap-3">
            {/* <Whatsapp /> */}
            Linkedin
          </button>
        )}
        {links?.facebook !== null && (
          <button className="btn-primary btn btn-block rounded-full mt-2 gap-3">
            {/* <Whatsapp /> */}
            Facebook
          </button>
        )}
      </div>
    </div>
  );
}

export default Preview;
