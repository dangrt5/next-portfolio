import React from "react";

const Applications = () => (
    <div className="row">
        <div className="col s4">
            <div className="project-image" />
            <h5 className="center">Eye Spy</h5>
        </div>
        <div className="col s4">
            <div className="project-image" />
        </div>
        <div className="col s4">
            <div className="project-image" />
        </div>

        <style jsx>{`

        .project-image {
            height: 250px;
            width: 250px;
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

    `}
        </style>

    </div>
)

export default Applications;