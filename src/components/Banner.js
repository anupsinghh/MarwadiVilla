import React from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const Banner = () => {
    const navigate = useNavigate();

    const handleMapSearch = () => {
        navigate("/map-search");
    };

    return (
        <section className="h-full max-h-[640px] mb-10 xl:mb-24">
            <div className="flex justify-between items-center px-4">
                <h1 className="flex-grow text-3xl font-bold text-gray-800 text-center">Search properties to rent</h1>
                <button
                    onClick={handleMapSearch}
                    className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded ml-4"
                >
                    Map Search
                </button>
            </div>
            <Search />
        </section>
    );
};

export default Banner;
