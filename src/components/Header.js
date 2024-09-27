import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Close the menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="py-6 mb-0 border-b">
            <div className="container mx-auto flex justify-between items-center font-bold text-gray-800">
                <div className="flex justify-between items-center gap-6">
                    <Link to="/">
                        <p className="text-violet-700 hover:text-violet-800 text-3xl font-bold transition">MarwadiVilla</p>
                    </Link>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex md:items-center md:gap-6">
                    <Link className="px-4 py-3 bg-violet-300 text-white rounded-lg" to="/">Home</Link>
                    <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg" to="/compare">Compare</Link>
                    <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg" to="">List</Link>
                    <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg" to="">Appointment</Link>
                    <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg" to="">Resources</Link>
                </nav>

                <div className="hidden md:flex items-center gap-6">
                    <Link className="border-2 text-violet-800 px-4 py-3 rounded-lg hover:bg-violet-300 hover:text-white transition" to="">Log in</Link>
                    <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition" to="">Sign up</Link>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <nav ref={menuRef} className={`md:hidden fixed top-0 right-0 w-full max-w-xs h-auto bg-white shadow-md transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
                <div className="flex flex-col items-start p-2">
                    <Link onClick={closeMenu} className="border-2 text-violet-800 w-full text-left px-4 py-2 rounded-lg hover:bg-violet-300 hover:text-white transition" to="">Log in</Link>
                    <Link onClick={closeMenu} className="bg-violet-700 w-full text-left hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition" to="">Sign up</Link>
                    <Link onClick={closeMenu} className="w-full text-left px-4 py-2 hover:bg-violet-300 hover:text-white rounded-lg" to="/">Home</Link>
                    <Link onClick={closeMenu} className="w-full text-left px-4 py-2 hover:bg-violet-300 hover:text-white rounded-lg" to="/compare">Compare</Link>
                    <Link onClick={closeMenu} className="w-full text-left px-4 py-2 hover:bg-violet-300 hover:text-white rounded-lg" to="">List</Link>
                    <Link onClick={closeMenu} className="w-full text-left px-4 py-2 hover:bg-violet-300 hover:text-white rounded-lg" to="">Appointment</Link>
                    <Link onClick={closeMenu} className="w-full text-left px-4 py-2 hover:bg-violet-300 hover:text-white rounded-lg" to="">Resources</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
