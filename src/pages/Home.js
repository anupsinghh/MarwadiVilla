import React from "react";

import Banner from "../components/Banner"; 
import HouseList from "../components/HouseList";
import Intro from "../components/Intro"

const Home = () => {
    return(
        <div className="min-h-[1800px] ">
            <Intro/>
            <Banner/> 
            <HouseList/>
        </div>
    )
}

export default Home;