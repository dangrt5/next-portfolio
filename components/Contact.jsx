import React from "react";

const Contact = () => (
    <div className="row">
        <h4>Contact</h4>
        <div className="col s12">
            <h6>Feel free to contact me through <a target="_blank" href="https://linkedin.com/in/randytuandang">LinkedIn</a> or <a href="mailto:randy.dang05@gmail.com">Email</a>.</h6>
        </div>

        <style jsx>{`
            img {
                display: block;
                margin: auto;
                width: 75px;
            }

            a:hover {
                text-decoration: underline;
            }

        `}</style>

    </div>
)

export default Contact;