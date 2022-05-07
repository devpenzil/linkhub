/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import app from "../appwrite/config";
import { bio, themes } from "../types/dashboard";
import AppButton from "./AppButton";
import AppInput from "./AppInput";

function BioSection({ uid, updated }: themes) {
  const [biodata, Setbiodata] = useState<bio>({
    name: "",
    bio: "",
  });
  useEffect(() => {
    app.database
      .getDocument("627505b352fea363d3c1", uid)
      .then((Response: any) => {
        Setbiodata({ ...biodata, name: Response.Name, bio: Response.Bio });
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);
  const uploadImg = (file: any) => {
    toast.loading("uploading image");
    app.storage
      .createFile("627505fe2735f876ce27", uid, file)
      .then((Response) => {
        toast.dismiss();
        console.log(Response);
        toast.success("Uploaded");
      })
      .catch((Error) => {
        toast.error("Upload failed");
        console.log(Error);
      });
  };
  const triggerImg = () => {
    let filepic = document.getElementById("profilepic");
    filepic?.click();
  };
  const updateData = () => {
    app.database
      .updateDocument("627505b352fea363d3c1", uid, {
        Name: biodata.name,
        Bio: biodata.bio,
      })
      .then((Response) => {
        console.log(Response);
        toast.success("Updated");
      })
      .catch((Error) => {
        console.log(Error);
        toast.error("Try again");
      });
  };
  return (
    <div className="py-4">
      <div
        className="avatar cursor-pointer hover:opacity-80"
        onClick={triggerImg}
      >
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://api.lorem.space/image/face?hash=3174" />
        </div>
      </div>
      <input
        type="file"
        name=""
        id="profilepic"
        hidden
        onChange={(e: any) => {
          uploadImg(e.target.files[0]);
        }}
        accept="image/png, image/jpeg"
      />
      <AppInput
        label="Name"
        triggerChange={(e) => {
          Setbiodata({ ...biodata, name: e });
        }}
        type="text"
        value={biodata.name}
      />
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your bio</span>
        </label>
        <textarea
          className="textarea textarea-bordered h-24"
          defaultValue={biodata.bio}
          onChange={(e: any) => {
            Setbiodata({ ...biodata, bio: e.target.value });
          }}
        />
      </div>

      <AppButton
        label="Update"
        triggerClick={() => {
          updateData();
        }}
      />
    </div>
  );
}

export default BioSection;
