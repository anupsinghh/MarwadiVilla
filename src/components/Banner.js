import React from "react";
import { motion } from "framer-motion";
import Search from "./Search";

const Banner = () => {
    // Animation variants for scroll effects
    const bannerVariants = {
        hidden: { opacity: 0, y: -100 }, // Start off-screen
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.section
            className="h-full max-h-[640px] mb-10 xl:mb-24"
            initial="hidden"
            whileInView="visible" // Trigger animation on scroll into view
            viewport={{ once: true, amount: 0.2 }} // Animation triggers when 20% of the section is in view
            variants={bannerVariants}
        >
            <motion.div className="flex justify-around items-center"
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.3 }}
            >
                <h1 className="text-3xl font-bold text-gray-800">Search properties to rent</h1>
                <input 
                    type="text" 
                    placeholder="Search for properties..." 
                    className="border-2 px-4 py-2 rounded-lg text-gray-500 font-medium hover:bg-violet-300 focus:outline-none focus:border-violet-500"
                />
            </motion.div>
            <Search/>
        </motion.section>
    );
};

export default Banner;
