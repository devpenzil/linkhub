import React from "react";
import { toast } from "react-toastify";
import app from "../appwrite/config";
import { themes } from "../types/dashboard";
function ThemeSection({ uid, updated }: themes) {
  const themes = [
    { name: "light" },
    { name: "dark" },
    { name: "cupcake" },
    { name: "synthwave" },
    { name: "retro" },
    { name: "cyberpunk" },
    { name: "valentine" },
    { name: "halloween" },
    { name: "garden" },
    { name: "forest" },
    { name: "aqua" },
    { name: "luxury" },
    { name: "dracula" },
    { name: "business" },
    { name: "night" },
    { name: "coffee" },
  ];
  const setTheme = (theme: string) => {
    toast.loading("Loading");
    app.database
      .updateDocument("627505b352fea363d3c1", uid, {
        theme: theme,
      })
      .then((Response) => {
        console.log(Response);
        toast.dismiss();
        updated();
      })
      .catch((Error) => {
        console.log(Error);
        toast.dismiss();
      });
  };
  return (
    <div>
      <div>
        <div className="text-2xl font-bold">Themes</div>
        <div className="mt-3 flex flex-wrap justify-around">
          {themes.map((obj, i) => {
            return (
              <div
                key={i}
                className="border mt-3 p-3 w-[40%] rounded-md cursor-pointer hover:ring-4"
                data-theme={obj.name}
                onClick={() => {
                  setTheme(obj.name);
                }}
              >
                <div>{obj.name}</div>
                <div className="mt-1 space-x-4 ">
                  <button className="btn btn-primary btn-square btn-xs"></button>
                  <button className="btn btn-secondary btn-square btn-xs"></button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ThemeSection;
