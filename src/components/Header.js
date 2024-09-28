import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ user, onLogout }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate(); // Use navigate for programmatic navigation

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleLinkClick = (path) => {
        if (!user) {
            // If the user is not logged in, navigate to the login page instead of the link
            navigate("/login");
        } else {
            navigate(path);
        }
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
        <header className="py-6 mb-0 border-b bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center font-bold text-gray-800">
                <div className="flex justify-between items-center gap-6">
                    <Link to="/">
                        <p className="text-violet-700 hover:text-violet-800 text-3xl font-bold transition">GharDekho</p>
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
                    <button className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg" onClick={() => handleLinkClick("/compare")}>Compare</button>
                    <button className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg" onClick={() => handleLinkClick("/listings")}>Listings</button>
                    <button className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg" onClick={() => handleLinkClick("/wishlist")}>Wishlist</button>
                    <button className="px-4 py-3 hover:bg-violet-300 hover:text-white rounded-lg" onClick={() => handleLinkClick("/appointments")}>Appointments</button>
                </nav>

                <div className="hidden md:flex items-center gap-6">
                    {user ? (
                        <div className="flex items-center gap-2">
                            {user.profilePic && (
                                <img 
                                    src={user.profilePic} 
                                    alt={user.name} 
                                    className="w-10 h-10 rounded-full border-2 border-violet-700"
                                />
                            )}
                            <span className="text-gray-800">Hello, {user.name}</span>
                            <button 
                                className="border-2 text-violet-800 px-4 py-2 rounded-lg hover:bg-violet-300 hover:text-white transition"
                                onClick={onLogout}
                                style={{ color: 'red' }} // Set logout button to red
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <>
                            <button className="border-2 text-violet-800 px-4 py-2 rounded-lg hover:bg-violet-300 hover:text-white transition" onClick={() => navigate("/login")}>Log in</button>
                            <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition" to="">Sign up</Link>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <nav ref={menuRef} className={`md:hidden fixed top-0 right-0 w-full max-w-xs h-auto bg-white shadow-md transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
                <div className="flex flex-col items-start p-2">
                    <button onClick={closeMenu} className="self-end text-gray-800 p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {user ? (
                        <div className="flex items-center gap-2">
                            {user.profilePic && (
                                <img 
                                    src={user.profilePic} 
                                    alt={user.name} 
                                    className="w-8 h-8 rounded-full border-2 border-violet-700"
                                />
                            )}
                            <span className="border-2 text-violet-800 w-full text-left px-4 py-2 rounded-lg">Hello, {user.name}</span>
                            <button 
                                className="w-full text-left hover:bg-violet-300 hover:text-white rounded-lg px-4 py-2" 
                                onClick={onLogout}
                                style={{ color: 'red' }} // Set logout button to red
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <>
                            <button onClick={() => { closeMenu(); navigate("/login"); }} className="border-2 text-violet-800 w-full text-left px-4 py-2 rounded-lg hover:bg-violet-300 hover:text-white transition">Log in</button>
                            <Link onClick={closeMenu} className="bg-violet-700 w-full text-left hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition" to="">Sign up</Link>
                        </>
                    )}
                    <button onClick={() => { closeMenu(); handleLinkClick("/"); }} className="w-full text-left px-4 py-2 hover:bg-violet-300 hover:text-white rounded-lg">Home</button>
                    <button onClick={() => { closeMenu(); handleLinkClick("/compare"); }} className="w-full text-left px-4 py-2 hover:bg-violet-300 hover:text-white rounded-lg">Compare</button>
                    <button onClick={() => { closeMenu(); handleLinkClick("/listings"); }} className="w-full text-left px-4 py-2 hover:bg-violet-300 hover:text-white rounded-lg">List</button>
                    <button onClick={() => { closeMenu(); handleLinkClick("/wishlist"); }} className="w-full text-left px-4 py-2 hover:bg-violet-300 hover:text-white rounded-lg">Wishlist</button>
                    <button onClick={() => { closeMenu(); handleLinkClick("/appointments"); }} className="w-full text-left px-4 py-2 hover:bg-violet-300 hover:text-white rounded-lg">Appointments</button>
                    <Link onClick={closeMenu} className="w-full text-left px-4 py-2 hover:bg-violet-300 hover:text-white rounded-lg" to="">Resources</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
