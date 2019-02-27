import React from "react";

const NavBar = () => (
    <nav>
        <div className="nav-wrapper white">
            <ul id="nav-mobile" className="right">
                <li><a target="_blank" href="https://linkedin.com/in/randytuandang">LinkedIn</a></li>
                <li><a target="_blank" href="https://github.com/dangrt5">Github</a></li>
                <li><a target="_blank" href="../static/dang-randy-resume.pdf">Resumé</a></li>
            </ul>
        </div>
        <style jsx>{`
            .nav-wrapper {
                border: none;
            }

            nav {
                box-shadow: none;
            }

            a {
                color: blue;
            }
        `}
        </style>
    </nav>
)

export default NavBar;