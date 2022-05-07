import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Preview from "../components/Preview";
import app from "../appwrite/config";
function UserName() {
  const route = useRouter();
  useEffect(() => {
    const { username }: any = route.query;
    username &&
      app.database
        .getDocument("627505b352fea363d3c1", username)
        .then((Response) => {
          console.log(Response);
        })
        .catch((Error) => {
          console.log(Error);
        });
  });
  return (
    <div data-theme="synthwave" className="w-full h-screen">
      <div className="container mx-auto lg:w-1/3 md:w-1/2">
        <Preview />
      </div>
    </div>
  );
}

export default UserName;
