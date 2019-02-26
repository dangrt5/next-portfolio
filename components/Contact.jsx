import React from "react";

const Contact = () => (
    <div className="row">
        <h4>Contact</h4>
        <div className="col s12 m6">
            <a href="mailto:randy.dang05@gmail.com"><img className="center" src="../static/images/email.svg" alt="Email" /></a>
            <h6 className="center"><a href="mailto:randy.dang05@gmail.com">randy.dang05@gmail.com</a></h6>
        </div>
        <div className="col s12 m6">
            <a href="tel:8052942988"><img className="center" src="../static/images/mobile-phone.svg" alt="Phone" /></a>
            <h6 className="center"><a href="tel:8052942988">805-294-2988</a></h6>
        </div>

        <style jsx>{`
            img {
                display: block;
                margin: auto;
                width: 75px;
            }
        `}</style>

    </div>
)

export default Contact;