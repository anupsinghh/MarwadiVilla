import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animations
import bannerImage from '../assets/img/apartments/ph.webp'; // Your WebP image

const IntroPage = () => {
    // Animation variants for different elements
    const bannerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
            },
        },
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                ease: "easeOut",
                delay: 0.5,
            },
        },
    };

    // Preload the image for better performance
    useEffect(() => {
        const img = new Image();
        img.src = bannerImage; // Preload the image
    }, []);

    return (
        <motion.div
            className="banner-container mb-10 flex flex-col items-center justify-center h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bannerImage})` }}
            initial="hidden"
            animate="visible"
            variants={bannerVariants} // Animation for the background
        >
            <motion.div
                className="content relative z-10 text-center text-white p-5"
                variants={contentVariants} // Animation for the content
            >
                <div className="overlay absolute inset-0 bg-black opacity-20 z-0"></div>

                <h1 className="text-4xl md:text-6xl font-bold mb-4 relative z-10">
                    Welcome to Your Next Home
                </h1>
                <p className="text-lg md:text-xl mb-6 relative z-10">
                    Explore a wide range of properties available for rent tailored to your needs.
                </p>
                <Link
                    to="/search"
                    className="bg-violet-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-violet-400 transition duration-300 relative z-10"
                >
                    Start Searching
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default IntroPage;
