import React from "react";
import Link from "next/link";

const NavBar = () => (
    <nav>
        <div className="nav-wrapper">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="https://linkedin.com/in/randytuandang">LinkedIn</a></li>
                <li><a href="https://github.com/dangrt5">Github</a></li>
            </ul>
        </div>
    </nav>
)

export default NavBar;