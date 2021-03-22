import React from "react";

import linkedinLogo from "./logos/linkedin.png";
import gitHubLogo from "./logos/github.png";
import profile2 from "./pictures/IMG_7937-2.jpg";

import { Link } from "react-router-dom";

function HomeDesktop(props) {

    function desktopDisplayBio() {
        const brief  = document.getElementById("brief");
        const move = document.getElementById("desktopHeader");

        brief.classList.add("showMe");
        move.classList.add("move");
    };

    return (
        <div className="desktop">
            <div className="myself">
                <div className="column is-full">
                    <img src={profile2} alt="myself" />
                </div>
                <div id="linkHolder" style={{position: "absolute", top: "20%", left: "20%"}}>
                    <div className="column" id="bio">
                        <h1 id="brief" className="subtitle" style={{textAlign: "center", color: "whitesmoke"}}>
                            My Name is Pedro Alburqueque. Full-Stack Web Developer continuously learning new technologies and eager
                            to get my hands on the next big thing.
                            <div className="column" style={{textAlign: "center"}}>
                                <a className="icons" rel="noreferrer" href="https://www.linkedin.com/in/pralburco/" target="_blank"><img
                                    src={linkedinLogo} alt="linkedin" /></a>
                                <a className="icons" rel="noreferrer" href="https://github.com/prolsu" target="_blank"><img
                                    src={gitHubLogo} alt="github" /></a>
                            </div>
                        </h1>
                    </div>
                    <header id="desktopHeader" className="column is-full" style={{float: "left"}}>
                        <div className="title leftHeading">
                            <h1 style={{color: "whitesmoke"}}><span>&lt;hello&gt;</span>world!<br />I'm<span>&lt;/Pedro&gt;</span></h1>
                        </div>
                        <div className="myLinks">
                            <Link rel="noreferrer" onClick={desktopDisplayBio} to="/home" className="active intLink">About</Link>
                            <Link rel="noreferrer" to="/portfolio" className="intLink">Portfolio</Link>
                            <Link rel="noreferrer" to="/contact" className="intLink">Contact</Link>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    );
};

export default HomeDesktop;