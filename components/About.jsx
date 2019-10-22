import React from "react";
import JS from "../static/images/javascript.svg";
import Company from "../static/images/house.svg";

const About = () => {
  return (
    <div className="row">
      <h4>About Me</h4>
      <div className="col s12">
        <ul>
          <li>
            <h6>
              <img src={JS} alt="JavaScript" /> Developer with curiosity to try
              all technologies
            </h6>
          </li>
          <li>
            <h6>
              <img src={Company} alt="Currently At" />
              Currently: Applied Medical
            </h6>
          </li>
        </ul>
      </div>

      <style jsx>
        {`
          h6 {
            display: flex;
            align-items: center;
          }

          h6 img {
            margin-right: 16px;
            width: 40px;
          }

          li:not(:first-of-type) {
            margin: 24px 0;
          }
        `}
      </style>
    </div>
  );
};

export default About;
