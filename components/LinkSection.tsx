/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import app from "../appwrite/config";
import { links, linksection } from "../types/dashboard";
import AppButton from "./AppButton";
import AppInput from "./AppInput";

function LinkSection({ uid, updated }: linksection) {
  const [links, SetLinks] = useState<links>({
    email: "",
    facebook: "",
    github: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    whatsapp: "",
  });
  useEffect(() => {
    app.database
      .getDocument("6276953fd351b96aec7a", uid)
      .then((Response: any) => {
        SetLinks({
          ...links,
          email: Response.email,
          facebook: Response.facebook || "",
          github: Response.github || "",
          instagram: Response.instagram || "",
          linkedin: Response.Linkedin || "",
          twitter: Response.Twitter || "",
          whatsapp: Response.whatsapp || "",
        });
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);
  // console.log(links);

  const update = () => {
    app.database
      .updateDocument("6276953fd351b96aec7a", uid, {
        email: links.email,
        facebook: links.facebook,
        github: links.github,
        instagram: links.instagram,
        Linkedin: links.linkedin,
        Twitter: links.twitter,
        whatsapp: links.whatsapp,
      })
      .then((Response) => {
        console.log(Response);
        toast.dismiss();
        toast.success("updated");
        updated();
      })
      .catch((Error) => {
        console.log(Error);
        toast.dismiss();
        toast.error("Try again");
      });
  };

  return (
    <div className="py-4">
      <div>
        <AppInput
          label="Email"
          triggerChange={(e) => {
            SetLinks({ ...links, email: e });
          }}
          type="url"
          value={links.email}
        />
        <AppInput
          label="Whatsapp"
          triggerChange={(e) => {
            SetLinks({ ...links, whatsapp: e });
          }}
          type="url"
          value={links.whatsapp}
        />
        <AppInput
          label="Instagram"
          triggerChange={(e) => {
            SetLinks({ ...links, instagram: e });
          }}
          type="url"
          value={links.instagram}
        />
        <AppInput
          label="twitter"
          triggerChange={(e) => {
            SetLinks({ ...links, twitter: e });
          }}
          type="url"
          value={links.twitter}
        />
        <AppInput
          label="Github"
          triggerChange={(e) => {
            SetLinks({ ...links, github: e });
          }}
          type="url"
          value={links.github}
        />
        <AppInput
          label="Linkedin"
          triggerChange={(e) => {
            SetLinks({ ...links, linkedin: e });
          }}
          type="url"
          value={links.linkedin}
        />
        <AppInput
          label="Facebook"
          triggerChange={(e) => {
            SetLinks({ ...links, facebook: e });
          }}
          type="url"
          value={links.facebook}
        />
        <AppButton
          label="Update"
          triggerClick={() => {
            update();
          }}
        />
      </div>
    </div>
  );
}

export default LinkSection;
