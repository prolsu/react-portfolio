import React from "react";

import HomeDesktop from "../components/HomeDesktop";
import HomeMobile from "../components/HomeMobile";

function Home() {
    return window.innerWidth < 700 ? <HomeMobile /> : <HomeDesktop />
};

export default Home;