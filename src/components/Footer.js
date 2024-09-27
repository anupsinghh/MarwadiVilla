import React, { useEffect, useState } from "react";
import { RiHeart2Fill } from "react-icons/ri";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollY = window.scrollY;

        // Show footer if scrolled to the bottom of the page
        setIsVisible(windowHeight + scrollY >= documentHeight - 100);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <footer className={`bg-white w-full h-20 text-gray-800 fixed bottom-0 transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="flex justify-center items-center p-5 gap-4 text-lg">
                <p>Created with </p>
                <RiHeart2Fill className="text-red-500 text-3xl" />
                <p> by <span className="text-red-500 font-semibold">Suraj Anup Pratik</span></p>
            </div>
        </footer>
    );
};

export default Footer;
