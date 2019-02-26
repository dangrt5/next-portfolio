import React from "react";


const Title = () => (
    <div className="row">
        <div className="col s6 offset-s3">
            <h2 className="center">Randy Dang</h2>
            <h5 className="center">Web Developer</h5>
        </div>


        <style jsx>{`
        
            img {
                width: 100px;
                display: block;
                margin: auto;
            }

            h2, h5 {
                margin: 0;
            }

        `}</style>

    </div>
)

export default Title;