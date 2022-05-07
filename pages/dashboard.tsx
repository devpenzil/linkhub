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

const Dashboard: NextPage = () => {
  const router = useRouter();
  const [allData, SetData] = useState<any>();
  const [activeElement, SetActiveElement] = useState(<></>);
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
      .getDocument("627505b352fea363d3c1", uid)
      .then((Response: any) => {
        SetData(Response);
      })
      .catch((Error) => {
        console.log(Error);

        if (Error.code === 404) {
          app.database
            .createDocument("627505b352fea363d3c1", uid, {
              theme: "light",
            })
            .then((Response) => {
              console.log(Response);
            })
            .catch((Error) => {
              console.log(Error);
            });
        }
      });
  };
  console.log(allData);

  return (
    <>
      <Head>
        <title>Dashboard - LinkHub</title>
      </Head>
      {allData && (
        <div className="container mx-auto">
          <div className="h-20" />
          <div className="flex justify-around">
            <div>
              <div className="mockup-phone">
                <div className="camera" />
                <div className="display">
                  <div
                    className="artboard artboard-demo phone-1 overflow-y-auto"
                    data-theme={allData?.theme}
                  >
                    <Preview data={allData && allData} />
                  </div>
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
                      SetActiveElement(<BioSection />);
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
                    Settings
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
