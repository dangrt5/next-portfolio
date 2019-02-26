import React from "react";


const Title = () => (
    <div className="row">
        <div className="col s12 center">
            <div className="section">
                <img src="../static/images/player.svg" alt="Self Icon" />
            </div>
            <div className="section">
                <h2 className="center">Randy Dang</h2>
                <h5 className="center">Web Developer</h5>
            </div>
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

            .section {
                display: inline-block;
                vertical-align: top;
            }

        `}</style>

    </div>
)

export default Title;