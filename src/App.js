// In App.js

import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from ".././src/firebaseConfig";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MapSearch from "./components/MapSearch";
import AppointmentBooking from './components/AppointmentBooking';

import Home from "./pages/Home";
import Compare from "./pages/Compare";
import PropertyPage from "./pages/PropertyPage";
import Login from "./components/Login";
import Listing from "./components/Listing";


function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/property/:id" element={<PropertyPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/map-search" element={<MapSearch />} />
        <Route path="/property/:id/book-appointment" element={<AppointmentBooking />} />
        <Route path="/listing" element={<Listing />} />

const auth = getAuth(app);

function App() {
    const [user, setUser] = useState(null);
    const [wishlistedProperties, setWishlistedProperties] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    name: user.displayName,
                    profilePic: user.photoURL,
                });
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleWishlistToggle = (property) => {
        setWishlistedProperties((prev) => {
            if (prev.some((item) => item.id === property.id)) {
                return prev.filter((item) => item.id !== property.id);
            } else {
                return [...prev, property];
            }
        });
    };

    const handleLogin = (userData) => {
        setUser(userData);
        navigate("/");
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                navigate("/login");
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    };

    return (
        <div className="max-w-[1440px] mx-auto bg-white">
            <Header user={user} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home wishlistedProperties={wishlistedProperties} onWishlistToggle={handleWishlistToggle} />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/property/:id" element={<PropertyPage />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/map-search" element={<MapSearch />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
