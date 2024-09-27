import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Compare from "./pages/Compare";
import Listing from "./components/Listing";
import Login from "./components/Login"; // Adjusted import

function App() {
    const [user, setUser] = useState(null); // Manage user state

    const handleLogin = (userData) => {
        setUser(userData); // Set user on login
    };

    const handleLogout = () => {
        setUser(null); // Clear user on logout
    };

    return (
        <div className="max-w-[1440px] mx-auto bg-white">
            <Header user={user} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/listings" element={<Listing />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
