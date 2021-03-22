import React from "react";

import { Link } from "react-router-dom";

function PortfolioC(props) {
    return (
        <React.Fragment>
            <section className="hero">
                <header className="column is-full" style={{ float: "left" }}>
                    <div className="title leftHeading">
                        <h1 style={{ color: "whitesmoke" }}><span>&lt;check&gt;</span>my<br />portfolio<span>&lt;/out&gt;</span></h1>
                    </div>
                    <div className="myLinks">
                        <Link to="/home" className="intLink">About</Link>
                        <Link to="/portfolio" className="active intLink">Portfolio</Link>
                        <Link to="/contact" id="contactModal" className="intLink">Contact</Link>
                    </div>
                </header>
            </section>

            <div className="column is-full">
                <div className="tile is-ancestor">
                    <div className="tile is-parent" id="hwHolder1">
                        <article className="tile is-child box">
                            <h1 className="title" style={{ textAlign: "center" }}>
                                Betsy
                            </h1>
                            <hr />
                            <a rel="noreferrer" href="https://betsyshop.herokuapp.com/" target="_blank">
                                <img src="./pictures/betsyshop.PNG" alt="betsyshop, collaborated project with two classNamemates" />
                                <hr />
                            </a>
                            <h1 className="subtitle">
                                BETSY, is an ecommerce platform that lets users signup to an account, and then buy or sell anything. Once a
                                buyer decides to purchase an item, the seller receives an email from 'Betsy' letting them know what item was sold.
                            </h1>
                            <a rel="noreferrer" href="https://github.com/prolsu/betsyshop" target="_blank">
                                <abbr title="Repository">
                                    <img className="repoIcon" src="./pictures/repo.png" alt="GitHub Repository" />
                                </abbr>
                            </a>
                        </article>
                    </div>
                    <div className="tile is-parent" id="hwHolder2">
                        <article className="tile is-child box">
                            <h1 className="title" style={{ textAlign: "center" }}>
                                Devour Burgers!
                            </h1>
                            <hr />
                            <a rel="noreferrer" href="https://iseeburgers.herokuapp.com/" target="_blank">
                                <img src="./pictures/website-desktop.PNG" alt="MySQL burger app, uses node.js, mysql, and handlebars" />
                                <hr />
                            </a>
                            <h1 className="subtitle">
                                The 'Devour Burgers!' app takes input from the user and saves it to a database, which is also used to
                                populate content to the main page. User is able to manipulate elements from the DB, from updating the
                                elements' status - 'not devoured' to 'devoured'- as well as delete each item. The app is hosted by Heroku.
                            </h1>
                            <a rel="noreferrer" href="https://github.com/prolsu/burger" target="_blank">
                                <abbr title="Repository">
                                    <img className="repoIcon" src="./pictures/repo.png" alt="GitHub Repository" />
                                </abbr>
                            </a>
                        </article>
                    </div>
                    <div className="tile is-parent" id="hwHolder3">
                        <article className="tile is-child box">
                            <h1 className="title" style={{ textAlign: "center" }}>
                                My Weather Dashboard
                            </h1>
                            <hr />
                            <a rel="noreferrer" href="https://prolsu.github.io/weather_dashboard/" target="_blank">
                                <img src="./pictures/weatherApp.PNG" alt="weather app, applied the use of weather API" />
                                <hr />
                            </a>
                            <h1 className="subtitle">
                                My Weather Dashboard displays current weather conditions along with a 5-day forecast. The user's searches
                                will be stored locally and displayed upon running the app. A delete button is provided as well.
                            </h1>
                            <a rel="noreferrer" href="https://github.com/prolsu/weather_dashboard" target="_blank">
                                <abbr title="Repository">
                                    <img className="repoIcon" src="./pictures/repo.png" alt="GitHub Repository" />
                                </abbr>
                            </a>
                        </article>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="column" style={{ textAlign: "center" }}>
                    <a className="icons" rel="noreferrer" href="https://www.linkedin.com/in/pralburco/" target="_blank"><img src="./pictures/LI-In-Bug.png"
                        alt="linkedin" /></a>
                    <a className="icons" rel="noreferrer" href="https://github.com/prolsu" target="_blank"><img
                        src="./pictures/iconfinder_Github_1298743.png" alt="github" /></a>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PortfolioC;