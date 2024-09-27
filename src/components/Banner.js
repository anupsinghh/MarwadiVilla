import React from "react";

import Search from "./Search";

const Banner = () => {
    return (
        <section className="h-full max-h-[640px] mb-10 xl:mb-24">
            <div className="flex justify-around items-center ">
                <h1 className="text-3xl font-bold text-gray-800">Search properties to rent</h1>
                <input 
                    type="text" 
                    placeholder="Search for properties..." 
                    className="border-2 px-4 py-2 rounded-lg text-gray-500 font-medium hover:bg-violet-300 focus:outline-none focus:border-violet-500"
                />
            </div>
            {/* <Search/> */}
        </section>
    );
}

export default Banner;
