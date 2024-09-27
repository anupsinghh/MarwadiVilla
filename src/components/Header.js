import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className="py-6 mb-12 border-b">
            <div className="container mx-auto flex justify-between items-center font-bold text-gray-800" >
                <div className="flex justify-between items-center gap-6">
                    <Link to="/">
                        {/* <img src={Logo} alt="logo"/> */}
                        <p className="text-violet-700 hover:text-violet-800 text-3xl font-bold transition">MarwadiVilla</p>
                    </Link>
                    <Link className="px-4 py-3 bg-violet-300 text-white rounded-lg" to="/">Home</Link>
                    <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg" to="/compare">Compare</Link>
                    <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg"  to="">List</Link>
                    <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg"  to="">Appointment</Link>
                    <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg"  to="">Resources</Link>
                </div>
                <div className="flex items-center gap-6 ">
                    <Link className="border-2 text-violet-800  px-4 py-3 rounded-lg hover:bg-violet-300 hover:text-white transition" to="">Log in</Link>
                    <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition " to="">Sign up</Link>
                </div>

                {/* Navigation Links */}
                <nav className={`md:flex md:items-center md:gap-6 absolute md:static bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-16 left-0 w-full md:w-auto' : 'top-[-200px] md:top-0'}`}>
                    <div className="flex flex-col md:flex-row md:gap-6">
                        <Link className="px-4 py-3 bg-violet-300 text-white rounded-lg md:mt-0" to="">Home</Link>
                        <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg md:mt-0" to="">Compare</Link>
                        <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg md:mt-0" to="">List</Link>
                        <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg md:mt-0" to="">Appointment</Link>
                        <Link className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg md:mt-0" to="">Resources</Link>
                    </div>

                    {/* Auth Links for mobile */}
                    <div className="flex flex-col md:flex-row md:gap-6 mt-4 md:mt-0">
                        <Link className="border-2 text-violet-800 px-4 py-3 rounded-lg hover:bg-violet-300 hover:text-white transition" to="">Log in</Link>
                        <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition" to="">Sign up</Link>
                    </div>
                </nav>
            </div>

            {/* Backdrop when menu is open */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu}></div>
            )}
        </header>
    );
}

export default Header;
