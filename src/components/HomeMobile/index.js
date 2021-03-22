import React from "react";
import { Link } from "react-router-dom";

import propfile1 from "./pictures/IMG_7937.jpg";
import linkedinLogo from "./logos/linkedin.png";
import gitHubLogo from "./logos/github.png";

function HomeMobile(props) {
    return (
        <div className="mobile">
            <section className="hero">
                <header className="column is-full" style={{ float: "left" }}>
                    <div className="title leftHeading">
                        <h1 style={{ color: "whitesmoke" }}><span>&lt;hello&gt;</span>world!<br />I'm<span>&lt;/Pedro&gt;</span></h1>
                    </div>
                    <div className="myLinks">
                        <Link to="#bio" className="active intLink">About</Link>
                        <Link to="/portfolio" className="intLink">Portfolio</Link>
                        <Link to="/contact" className="intLink">Contact</Link>
                    </div>
                </header>
            </section>
            <div className="myself">
                <div className="column is-full">
                    <img src={propfile1} alt="myself" />
                </div>
            </div>
            <div className="column">
                <article className="tile is-child box" id="bio">
                    <h1 className="subtitle" style={{ textAlign: "center" }}>
                        My Name is Pedro Alburqueque. Full-Stack Web Developer continuously learning new technologies and eager to get
                        my hands on the next big thing.
                    </h1>
                </article>
                <div className="column" style={{ textAlign: "center" }}>
                    <a className="icons" rel="noreferrer" href="https://www.linkedin.com/in/pralburco/" target="_blank"><img
                        src={linkedinLogo} alt="linkedin" /></a>
                    <a className="icons" rel="noreferrer" href="https://github.com/prolsu" target="_blank"><img
                        src={gitHubLogo} alt="github" /></a>
                </div>
            </div>
        </div>
    );
};

export default HomeMobile;