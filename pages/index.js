import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Title from "../components/Title";
import Applications from "../components/Applications";
import TechStack from "../components/TechStack";

export default () => (

    <div>
        <Head>
            <title>Randy Dang</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        </Head>
        <NavBar />
        <div className="container">
            <Title />
            <div className="divider"></div>
            <Applications />
            <div className="divider"></div>
            <TechStack />
        </div>
    </div>

)