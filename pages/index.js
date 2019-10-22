import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import Applications from "../components/Applications";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import WorkExperience from "../components/WorkExperience";
import About from "../components/About";
import "../static/styles.css";

export default () => (
  <div>
    <Head>
      <title>Randy Dang</title>
    </Head>
    <NavBar />
    <div className="container">
      <Title />
      <div className="divider"></div>
      <About />
      {/* <div className="divider"></div> */}
      {/* <WorkExperience /> */}
      <div className="divider"></div>
      <TechStack />
      <div className="divider"></div>
      <Applications />
      <div className="divider"></div>
      <Contact />
    </div>
  </div>
);
