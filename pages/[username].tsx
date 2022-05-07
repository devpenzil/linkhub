/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import app from "../appwrite/config";
import Head from "next/head";
function UserName() {
  const route = useRouter();
  const [alldata, SetAlldata] = useState<any>();
  useEffect(() => {
    const { username }: any = route.query;
    username &&
      app.database
        .getDocument("627505b352fea363d3c1", username)
        .then((Response) => {
          SetAlldata(Response);
          alldata &&
            app.database
              .updateDocument("627505b352fea363d3c1", username, {
                views: alldata.views + 1,
              })
              .then((Response) => {
                console.log(Response);
              })
              .catch((Error) => {
                console.log(Error);
              });
        })
        .catch((Error) => {
          if (Error.code === 404) {
            route.push("/404");
          }
          if (Error.code === 401) {
            alert("Please login to linkhub for view the profile");
          }
        });
  }, []);

  return (
    <>
      <Head>
        <title>Ajo Alex</title>
      </Head>
      {alldata ? (
        <div data-theme={alldata?.theme} className="w-full h-screen">
          <div className="h-20" />
          <div className="container mx-auto lg:w-1/3 md:w-1/2">
            <div className="flex flex-col items-center">
              <div className="avatar ">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://api.lorem.space/image/face?hash=3174" />
                </div>
              </div>
              <div className="text-2xl font-bold mt-2">{alldata?.Name}</div>
              <div className="text-justify text-sm font-light mt-2">
                {alldata?.Bio}
              </div>
              <div className="mt-4 w-full">
                {alldata.email !== "" && (
                  <a
                    href={`mailto:${alldata.email}`}
                    className="btn btn-primary rounded-full mt-3 w-full"
                  >
                    Email
                  </a>
                )}
                {alldata.whatsapp !== "" && (
                  <a
                    href={alldata.whatsapp}
                    className="btn btn-primary rounded-full mt-3 w-full"
                  >
                    Whatsapp
                  </a>
                )}
                {alldata.instagram !== "" && (
                  <a
                    href={alldata.instagram}
                    className="btn btn-primary rounded-full mt-3 w-full"
                  >
                    Instagram
                  </a>
                )}
                {alldata.Twitter !== "" && (
                  <a
                    href={alldata.Twitter}
                    className="btn btn-primary rounded-full mt-3 w-full"
                  >
                    Twitter
                  </a>
                )}
                {alldata.github !== "" && (
                  <a
                    href={alldata.github}
                    className="btn btn-primary rounded-full mt-3 w-full"
                  >
                    github
                  </a>
                )}
                {alldata.Linkedin !== "" && (
                  <a
                    href={alldata.Linkedin}
                    className="btn btn-primary rounded-full mt-3 w-full"
                  >
                    Linkedin
                  </a>
                )}
                {alldata.facebook !== "" && (
                  <a
                    href={alldata.facebook}
                    className="btn btn-primary rounded-full mt-3 w-full"
                  >
                    Facebook
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
}

export default UserName;
