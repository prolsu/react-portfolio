import React from "react";
import linkedinLogo from "./logos/linkedin.png";
import gitHubLogo from "./logos/github.png";

import { Link } from "react-router-dom";

function ContactC(props) {
    return (
        <React.Fragment>
            <section className="hero">
                <header className="column is-full" style={{ float: "left" }}>
                    <div className="title leftHeading">
                        <h1 style={{ color: "whitesmoke" }}><span>&lt;my&gt;</span>contact<br />info<span>&lt;/here&gt;</span></h1>
                    </div>
                    <div className="myLinks">
                        <Link to="/home" className="intLink">About</Link>
                        <Link to="/portfolio" className="intLink">Portfolio</Link>
                        <Link to="/contact" className="active intLink">Contact</Link>
                    </div>
                </header>
            </section>

            <div className="container">
                <div className="column">
                    <h1 className="title" style={{ textAlign: "center", color: "whitesmoke" }}>E-mail: <a href="mailto:pralburco@gmail.com">pralburco@gmail.com</a></h1>
                    <h1 className="title" style={{ textAlign: "center", color: "whitesmoke" }}>Download my Resume <Link to="/resume">here.</Link></h1>
                </div>
            </div>

            <div className="container">
                <div className="column" style={{ textAlign: "center" }}>
                    <a className="icons" rel="noreferrer" href="https://www.linkedin.com/in/pralburco/" target="_blank"><img src={linkedinLogo} alt="linkedin" /></a>
                    <a className="icons" rel="noreferrer" href="https://github.com/prolsu" target="_blank"><img src={gitHubLogo} alt="github" /></a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ContactC;