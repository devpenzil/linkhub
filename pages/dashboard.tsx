/* eslint-disable react-hooks/exhaustive-deps */
import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import app from "../appwrite/config";
import LinkSection from "../components/LinkSection";
import Preview from "../components/Preview";
import SettingsSection from "../components/SettingsSection";
import ThemeSection from "../components/ThemeSection";
import { useRouter } from "next/router";
import BioSection from "../components/BioSection";
import CopyIcon from "../assets/icons/CopyIcon";
import { toast } from "react-toastify";
import Eye from "../assets/icons/Eye";
import axios from "axios";
import DashboardIntro from "../components/DashboardIntro";

const Dashboard: NextPage = () => {
  const router = useRouter();
  const [allData, SetData] = useState<any>();
  const [activeElement, SetActiveElement] = useState(<DashboardIntro />);
  const [uid, Setuid] = useState("");
  useEffect(() => {
    app.account
      .getSessions()
      .then((Response) => {
        Setuid(Response.sessions[0].userId);
        fetchData();
      })
      .catch((Error) => {
        console.log(Error);
        router.push("/auth/login");
      });
  }, []);
  const fetchData = () => {
    app.database
      .getDocument("6276953fd351b96aec7a", uid)
      .then((Response: any) => {
        SetData(Response);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  const copyLink = () => {
    toast.loading("Your link is preparing");
    axios
      .get(
        `https://api.shrtco.de/v2/shorten?url=https://linkhub-appwrite.netlify.app/${uid}`
      )
      .then((Response) => {
        toast.dismiss();
        navigator.clipboard.writeText(Response.data.result.full_short_link);
        toast.success("Link copies to clipboard");
      })
      .catch((Error) => {
        toast.dismiss();
        console.log(Error);
      });
  };

  return (
    <>
      <Head>
        <title>Dashboard - LinkHub</title>
      </Head>
      {allData && (
        <div className="container mx-auto">
          <div className="h-20" />
          <div className="flex justify-around">
            <div className="flex flex-col items-center">
              This is just a preview
              <div className="mockup-phone">
                <div className="camera" />
                <div className="display">
                  <div
                    className="artboard artboard-demo phone-1 overflow-y-auto no-scroll-bar"
                    data-theme={allData?.theme}
                  >
                    <Preview data={allData && allData} />
                  </div>
                </div>
              </div>
              <div className="mt-3  space-y-3 cursor-pointer">
                <div
                  className="flex space-x-2 justify-center"
                  onClick={copyLink}
                >
                  Copy the link <CopyIcon />
                </div>
                <div
                  className="flex space-x-2 justify-center"
                  onClick={() => {
                    router.push(`/${uid}`);
                  }}
                >
                  Preview <Eye />
                </div>
              </div>
            </div>
            <div className="w-[600px]">
              <div>
                <div className="tabs">
                  <a
                    className={
                      "tab tab-bordered " +
                      (activeElement.type.name === "LinkSection" &&
                        " tab-active")
                    }
                    onClick={() => {
                      SetActiveElement(
                        <LinkSection uid={uid} updated={fetchData} />
                      );
                    }}
                  >
                    Links
                  </a>
                  <a
                    className={
                      "tab tab-bordered " +
                      (activeElement.type.name === "ThemeSection" &&
                        " tab-active")
                    }
                    onClick={() => {
                      SetActiveElement(
                        <ThemeSection uid={uid} updated={fetchData} />
                      );
                    }}
                  >
                    Theme
                  </a>
                  <a
                    className={
                      "tab tab-bordered " +
                      (activeElement.type.name === "BioSection" &&
                        " tab-active")
                    }
                    onClick={() => {
                      SetActiveElement(
                        <BioSection uid={uid} updated={fetchData} />
                      );
                    }}
                  >
                    Bio
                  </a>
                  <a
                    className={
                      "tab tab-bordered " +
                      (activeElement.type.name === "SettingsSection" &&
                        " tab-active")
                    }
                    onClick={() => {
                      SetActiveElement(<SettingsSection />);
                    }}
                  >
                    Stat
                  </a>
                </div>
              </div>
              <div className="mt-5 w-full">{activeElement}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
