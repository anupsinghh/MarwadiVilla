import React from "react";
import { Link } from "react-router-dom"; // Import if you're using React Router for navigation
import bannerImage from '../assets/img/apartments/a6lg.png'; // Adjust the path to your asset image

const IntroPage = () => {
    return (
        <div className="banner-container mb-10 flex flex-col items-center justify-center h-screen bg-cover bg-center"
             style={{ backgroundImage: `url(${bannerImage})` }}>
             
            <div className="content relative z-10 text-center text-white p-5">
                <div className="overlay absolute inset-0 bg-black opacity-20 z-0"></div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-4 relative z-10">Welcome to Your Next Home</h1>
                <p className="text-lg md:text-xl mb-6 relative z-10">
                    Explore a wide range of properties available for rent tailored to your needs.
                </p>
                <Link to="/search" className="bg-violet-500 px-6 py-3 rounded-lg text-lg font-semibold 
                                                hover:bg-violet-400 transition duration-300 relative z-10">
                    Start Searching
                </Link>
            </div>
        </div>
    );
}

export default IntroPage;
