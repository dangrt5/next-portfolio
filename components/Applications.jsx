import React from "react";

const Applications = () => (
    <div className="row">
        <h4>Portfolio</h4>
        <div className="col s12 m4">
            <h6 className="center">Happy Camper</h6>
            <div className="project-image center" />
            <p className="center description">Campsite Assistance Tool</p>
            <p className="links center">
                <a href="/">Live</a> | <a href="/">Github</a>
            </p>
        </div>
        <div className="col s12 m4">
            <h6 className="center">Student Grade Table</h6>
            <div className="project-image" />
            <p className="center description">Academic Management System</p>
            <p className="links center">
                <a href="/">Live</a> | <a href="/">Github</a>
            </p>
        </div>
        <div className="col s12 m4">
            <h6 className="center">Eye Spy</h6>
            <div className="project-image" />
            <p className="center description">AI Image Scavenger Hunt Game</p>
            <p className="links center">
                <a href="/">Live</a> | <a href="/">Github</a>
            </p>
        </div>

        <style jsx>{`

        .project-image {
            height: 200px;
            width: 100%;
            background-size: contain;
            background-repeat: no-repeat;
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

        .links, .description {
            margin: 0;
        }
    `}
        </style>

    </div>
)

export default Applications;