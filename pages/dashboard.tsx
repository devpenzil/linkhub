import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import LinkSection from "../components/LinkSection";
import Preview from "../components/Preview";
import SettingsSection from "../components/SettingsSection";
import StatSection from "../components/StatSection";
import ThemeSection from "../components/ThemeSection";

const Dashboard: NextPage = () => {
  const [activeElement, SetActiveElement] = useState(<LinkSection />);
  return (
    <>
      <Head>
        <title>Dashboard - LinkHub</title>
      </Head>
      <div className="container mx-auto">
        <div className="h-20" />
        <div className="flex justify-around">
          <div>
            <div className="mockup-phone">
              <div className="camera" />
              <div className="display">
                <div className="artboard artboard-demo phone-1 overflow-y-auto">
                  <Preview />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[600px]">
            <div>
              <div className="tabs">
                <a
                  className="tab tab-bordered"
                  onClick={() => {
                    SetActiveElement(<LinkSection />);
                  }}
                >
                  Links
                </a>
                <a
                  className="tab tab-bordered tab-active"
                  onClick={() => {
                    SetActiveElement(<ThemeSection />);
                  }}
                >
                  Theme
                </a>
                <a
                  className="tab tab-bordered"
                  onClick={() => {
                    SetActiveElement(<StatSection />);
                  }}
                >
                  Stat
                </a>
                <a
                  className="tab tab-bordered"
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
    </>
  );
};

export default Dashboard;
