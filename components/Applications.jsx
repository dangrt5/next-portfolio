import React from "react";
import Link from "next/link";

const Applications = () => (
  <div className="row">
    <h4>Portfolio</h4>
    <div className="col s12 m4">
      <h6 className="center">Happy Camper</h6>
      <div className="project-image center" />
      <p className="center description">Campsite Assistance Tool</p>
      <p className="links center">
        {/* <a href="https://happycamper.live" target="_blank">
          Live
        </a>{" "}
        |{" "} */}
        <a href="https://github.com/dangrt5/happy-camper" target="_blank">
          Github
        </a>
      </p>
    </div>
    <div className="col s12 m4">
      <h6 className="center">Student Grade Table</h6>
      <div className="project-image" />
      <p className="center description">Academic Management System</p>
      <p className="links center">
        {/* <a target="_blank" href="/">
          Live
        </a>{" "} */}
        {/* |{" "} */}
        <a
          target="_blank"
          href="https://github.com/dangrt5/student-grade-table"
        >
          Github
        </a>
      </p>
    </div>
    <div className="col s12 m4">
      <h6 className="center">Eye Spy</h6>
      <div className="project-image" />
      <p className="center description">AI Image Scavenger Hunt Game</p>
      <p className="links center">
        {/* <a target="_blank" href="../static/eye-spy/index.html">
          Live
        </a>{" "} */}
        {/* |{" "} */}
        <a target="_blank" href="https://github.com/dangrt5/eye-spy">
          Github
        </a>
      </p>
    </div>

    <style jsx>
      {`
        .project-image {
          height: 200px;
          width: 100%;
          background-size: contain;
          background-repeat: no-repeat;
        }

        .project-image {
          background-position: center;
        }

        .col:first-of-type .project-image {
          background-image: url(../static/images/happycamper.jpg);
        }

        .col:nth-of-type(2) .project-image {
          background-image: url(../static/images/sgt.jpg);
        }

        .col:last-of-type .project-image {
          background-image: url(../static/images/eyespy.jpg);
        }

        .col > p:not(.links) {
          font-style: italic;
        }

        .links,
        .description {
          margin: 0;
        }

        a:hover {
          text-decoration: underline;
        }

        .center {
          margin-bottom: 8px;
        }
      `}
    </style>
  </div>
);

export default Applications;
