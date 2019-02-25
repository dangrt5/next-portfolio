import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";

export default () => (

    <div>
        <Head>
            <title>Randy Dang's Portfolio</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        </Head>
        <div className="container">
            <NavBar />
            <h1 className="center">Randy Dang Portfolio</h1>
        </div>
    </div>

)