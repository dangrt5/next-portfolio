import React from "react";

const WorkExperience = () => {
  return (
    <div className="row">
      <h4>Work Experience</h4>
      <h6>- Applied Medical</h6>
      <h6>- Parapxl Corp.</h6>

      <style jsx>{`
        h4 {
          margin-bottom: 16px;
        }

        div.row > ul {
          list-style-type: circle;
        }
      `}</style>
    </div>
  );
};

export default WorkExperience;
